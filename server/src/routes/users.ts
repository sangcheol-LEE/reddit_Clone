import { Router,Request, Response} from "express";
import Post from "../entities/Post";
import { User } from "../entities/User";
import Comment from "../entities/Comment";
import userMiddeleWare from "../middlewares/user"


const getUserData = async(req : Request, res: Response) => {
   try {
      // 유저정보 가져오기
      const user = await User.findOneOrFail({
         where: {username : req.params.username},
         select: ["username", "createAt"],
      });
      // 유저가 쓴 포스트 정보 가져오기
      // 여기서 comments의 votes와 relationship으로 넣어주는 이유는
      // Post Entity에서 commentCount의 this.comments와
      // voteScore의 this.vote를 가져오기 위함이다.
      const posts = await Post.find({
         where: {username : user.username},
         relations:["comments", "vote","sub"]
      })

      // 유저가 쓴 댓글목록 가져오기
      const comments = await Comment.find({
         where: {username : user.username},
         relations: ["post"]
      });

      if(res.locals.user) {
         const { user } = res.locals;
         posts.forEach((p) => p.setUserVote(user));
         comments.forEach((c) => c.setUserVote(user))
      }

      let userData : any[] = []

      //toJSON 해주는 이유는 ?
      // spread operator를 이용해서 새로운 객체로 복사를 할 때 인스턴스 상태로 하면,
      // @Expose를 이용한 getter는 들어가지 않는다. 그래서 객체로 바꾼 후 복사한다.
      posts.forEach((p) => userData.push({type : "Post", ...p.toJSON()}));
      comments.forEach((c) => userData.push({type : "Comment", ...c.toJSON()}));

      // 최신 정보가 먼저 오게 순서정렬
      userData.sort((a,b) => {
         if(b.createAt > a.createAt) return 1;
         if(b.createAt < a.createAt) return -1;
         return 0;
      });

      return res.json({user, userData});
   }catch(e) {
      console.log(e)
      return res.status(500).json({error : "문제가 발생했습니다아..."})
   }

}


const router = Router();
router.get("/:username", userMiddeleWare, getUserData)

export default router;