import { Router,Request,Response } from "express";
import userMiddleWare from "../middlewares/user";
import authMiddleWare from "../middlewares/auth";
import { isEmpty } from "class-validator";
import { AppDataSource } from "../data-source";
import Sub from "../entities/Sub";
import Post from "../entities/Post";
import { User } from "../entities/User";
import { NextFunction } from "express-serve-static-core";
import multer,{FileFilterCallback} from "multer";
import path from "path";
import { makeId } from "../utils/helper";
import { unlinkSync } from "fs";

const getSub = async(req:Request, res: Response) => {
   const name = req.params.name;
   try{
      const sub = await Sub.findOneByOrFail({ name });

      // 포스트를 생성한 후에 해당 sub에 속하는 포스트 정보들을 넣어주기

      const posts = await Post.find({
         where: {subName : sub.name},
         order : {createAt : "DESC"},
         relations : ["comments", "votes"]
      })

      sub.posts = posts;

      if(res.locals.user) {
         sub.posts.forEach((p) => p.setUserVote(res.locals.user))
      }

      console.log("subKing",sub)

      return res.json(sub)
   }catch(e) {
      return res.status(404).json({error: "커뮤니티를 찾을 수 없습니다."})
   }
}

const createSub = async(req:Request,res: Response, next:Function) => {
   const {name, title, decription} = req.body;

   // 먼저 Sub를 생성할 수 있는 유저인지 체크를 위해 유저 정보 가져오기(요청 시 보내주는 토큰을 이용)
   // 유저정보가 없다면, throw Error !
   // 유저정보가 있다면, sub 이름과 제목이 이미 있는 것인지 체크
   try{
      let errors:any = {};
      if(isEmpty(name)) errors.name = "이름은 비워둘 수 없습니다."
      if(isEmpty(title)) errors.title = "제목은 비워둘 수 없습니다."

      const sub = await AppDataSource
         .getRepository(Sub)
         .createQueryBuilder("sub")
         .where("lower(sub.name) = :name", {name: name.toLowerCase() })
         .getOne();

         if(sub) errors.name = "서브가 이미 존재합니다."

         if(Object.keys(errors).length > 0) {
            throw errors;
         }
   }catch(e) {
      console.log(e)
      return res.status(500).json(e)
   }

   try {
      const user : User = res.locals.user;

      const sub = new Sub();
      sub.name = name;
      sub.description = decription;
      sub.title = title;
      sub.user = user;

      await sub.save();
      return res.json(sub);
   }catch(e) {
      console.log(e)
      return res.status(500).json({error: "we got a problem"})
   }

   // Sub Instance 생성 후 데이터베이스에 저장 !s
   // 저장한 정보 프론트엔드로 전달해주기
}

const topSubs = async(req:Request, res:Response) => {
   try{
      const imageUrlExp = `COALESCE('${process.env.APP_URL}/images/' ||s."imageUrn",'https://www.gravatar.com/avatar?d=mp&f=y')`
      const subs = await AppDataSource.createQueryBuilder()
      .select(
         `s.title, s.name, ${imageUrlExp} as "imageUrl", count(p.id) as "postCount"`
         )
      .from(Sub, "s")
      .leftJoin(Post, "p", `s.name = p."subName"`)
      .groupBy(`s.title, s.name, "imageUrl"`)
      .orderBy(`"postCount"`, 'DESC')
      .limit(5)
      .execute();
      return res.json(subs)
   }catch(e) {
      console.log(e);
      return res.status(500).json({e : "문제가 발생했습니다."})
   }
}

const ownSub = async(req:Request, res:Response, next: NextFunction) => {
   const user: User = res.locals.user;
   try{
      const sub = await Sub.findOneOrFail({where: {name : req.params.name}});
      if(sub.username !== user.username) {
         return res
            .status(403)
            .json({error: "이 커뮤니티를 소유하고 있지 않습니다"})
      }

      res.locals.sub = sub;
      next()
   }catch(e) {
      console.log(e)
      return res.status(500).json({error : "문제가 발생 했습니다."})
   }
}

const upload = multer({
   storage: multer.diskStorage({
      destination: "public/images",
      filename: (_,file, callback) => {
         const name = makeId(10);
         callback(null, name + path.extname(file.originalname));
      },
   }),
   fileFilter: (_, file:any, callback: FileFilterCallback) => {
      if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
         callback(null, true)
      }else {
         callback(new Error("이미지가 아닙니다."))
      }
   }
})

const uploadSubImage = async(req:Request, res:Response) => {
   const sub:Sub = res.locals.sub;
   try{
      const type = req.body.type;
      //파일 유형을 지정치 않았을 시에는 업로드된 파일 삭제
      if(type !== "image" && type !== "banner") {
         if(!req.file?.path) {
            return res.status(400).json({error: "유효하지 않은 파일"})
         }

         // 파일을 지워주기
         unlinkSync(req.file.path);
         return res.status(400).json({error: "잘못된 유형"})
      }
      let oldImageUrn : string = "";
      if(type === "image") {
         // 사용중인 Urn을 저장합니다. (이전 파일을 아래서 삭제하기 위해서)
         oldImageUrn = sub.imageUrn || ""
         // 새로운 파일 이름을 Urn으로 넣어줍니다.
         sub.imageUrn = req.file?.filename || '';
      }else if (type === "banner") {
         oldImageUrn = sub.bannerUrn || "";
         sub.bannerUrn  = req.file?.filename || "";
      }

      await sub.save();

      // 사용하지 않는 이미지 파일 삭제
      if(oldImageUrn !== "") {
         const fullFilename = path.resolve(
            process.cwd(),
            "public",
            "images",
            oldImageUrn
         );
         unlinkSync(fullFilename)
      }

      return res.json(sub)
   }catch(e) {
      console.log(e)
      return res.status(500).json({error : "문제가 발생했습니다."})
   }
}
const router = Router()

router.get("/:name", userMiddleWare, getSub);
router.post('/',userMiddleWare,authMiddleWare,createSub);
router.get("/sub/topSubs", topSubs)
router.post("/:name/upload", userMiddleWare, authMiddleWare, ownSub, upload.single("file"), uploadSubImage)
export default router
