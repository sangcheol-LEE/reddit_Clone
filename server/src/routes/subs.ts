import { Router,Request,Response } from "express";
import userMiddleWare from "../middlewares/user";
import authMiddleWare from "../middlewares/auth";
import { isEmpty } from "class-validator";
import { AppDataSource } from "../data-source";
import Sub from "../entities/Sub";
import { User } from "../entities/User";

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

const router = Router()

router.post('/',userMiddleWare,authMiddleWare,createSub);

export default router
