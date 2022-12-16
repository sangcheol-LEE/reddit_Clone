import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";

export default  async (req:Request, res:Response ,next:NextFunction) => {
   try {
      const token = req.cookies.token;
      if(!token) return next()

      const { email }:any = jwt.verify(token, process.env.JWT_SECRET!);

      const user = await User.findOneBy({email})
      console.log('user',user)
      if(!user) throw new Error("UnAuthenticated")

      res.locals.user = user; // 유저정보를 res.local.user에 넣어주기

      return next();
   }catch(e) {
      console.log(e)
      return res.status(400).json({error : "Something went wrong"})
   }
}
