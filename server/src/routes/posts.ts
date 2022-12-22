import { Router ,Request,Response} from "express";
import userMiddleWare from "../middlewares/user";
import authMiddleWare from "../middlewares/auth";
import Post from "../entities/Post";
import Sub from "../entities/Sub";

const createPost = async(req: Request, res : Response) => {
   const {title, body, sub} = req.body;
   if(title.trim() === "") {
      return res.status(400).json({title: "제목은 비워둘 수 없습니다."})
   }

   const user = res.locals.user;

   try {
      const subRecord = await Sub.findOneByOrFail({name : sub})
      const post = new Post()
      post.title = title;
      post.body = body;
      post.user = user;
      post.sub = subRecord;

      await post.save();

      return res.json(post);
   }catch(e) {
      console.log(e)
      return res.status(500).json({error : "문제가 발생했습니다. - createPost "})
   }
}

const router = Router();
router.post("/", userMiddleWare, authMiddleWare, createPost);

export default router