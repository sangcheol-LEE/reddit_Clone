import { NextFunction, Request, Response } from "express";
import {User} from "../entities/User";

export default  async (req:Request, res:Response,next:NextFunction) => {
   try {
      const user:User | undefined = res.locals.user
      if(!user) throw new Error("UnAuthenticated")
      return next();
   }catch(e) {
      console.log(e)
      return res.status(401).json({ error : "UnAuthenticated" })
   }
}
