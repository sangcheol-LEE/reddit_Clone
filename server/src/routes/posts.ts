import { Router ,Request,Response} from "express";
import userMiddleWare from "../middlewares/user";
import authMiddleWare from "../middlewares/auth";
import Comment from "../entities/Comment";
import Post from "../entities/Post";
import Sub from "../entities/Sub";



const getPost = async(req: Request, res : Response) => {
   const {identifier, slug} = req.params;

   try {
      const post = await Post.findOneOrFail({
         where : {identifier, slug},
         relations: ["sub", "votes"]
      })

      if(res.locals.user) {
         post.setUserVote(res.locals.user)
      }

      return res.send(post)
   }catch(e) {
      console.log(e)
      return res.status(404).json({error: "게시글을 찾을 수 없습니다."})
   }
}


const createPost = async(req: Request, res : Response) => {
   const {title, body, sub} = req.body;
   if(title.trim() === "") {
      return res.status(400).json({title: "제목은 비워둘 수 없습니다."});
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

const createPostComment = async(req:Request, res:Response) => {
   const {identifier, slug} = req.params;
   const body = req.body.body;

   try {
      const post = await Post.findOneByOrFail({identifier, slug});
      const comment = new Comment();
      comment.body = body;
      comment.user = res.locals.user;
      comment.post = post;

      if(res.locals.user) {
         post.setUserVote(res.locals.user)
      }

      console.log("Comment", comment)
      await comment.save();

      return res.json(comment);
   }catch(e) {
      console.log("createPostComment",e)
      return res.status(404).json({ error: "게시물을 찾을 수 없습니다." })
   }
}

const getPostComments = async(req: Request, res: Response) => {
   const {identifier,slug} = req.params;

   try{
      const post = await Post.findOneByOrFail({ identifier, slug});
      const comments = await Comment.find({
         where: {postId: post.id},
         order: {createAt: "DESC"},
         relations: ["votes"]
      })

      if(res.locals.user) {
         comments.forEach((comment) => comment.setUserVote(res.locals.user))
      }
      return res.json(comments)
   }catch(e) {
      console.log("getPostComments",e)
      return res.status(500).json({error: "문제가 발생했습니다."})
   }
}

const router = Router();
router.post("/", userMiddleWare, authMiddleWare, createPost);
router.get("/:identifier/:slug", userMiddleWare, getPost);
router.post("/:identifier/:slug/comments", userMiddleWare, createPostComment)
router.get("/:identifier/:slug/comments", userMiddleWare, getPostComments)
export default router