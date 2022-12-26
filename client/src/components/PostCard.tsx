import React from 'react'
import { Post } from '../types'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"
import Link from 'next/link'
import Image from "next/image";
import Axios from "axios";
import dayjs from 'dayjs'
import {useRouter} from "next/router"
import { useAuthState } from '../context/auth'


interface PostCardProps {
   post : Post
   subMutate?: () => void
   mutate?: () => void
}

const PostCard = ({
   post: {
      identifier,
      slug,
      body,
      subName,
      createdAt,
      voteScore,
      title,
      userVote,
      commentCount,
      url,
      username,
      sub
},
subMutate,mutate
}: PostCardProps) => {
   const {authenticated} = useAuthState()
   const router = useRouter();
   const isInSubPage = router.pathname === "/r/[sub]"

   const vote = async(value : number) => {
      if(!authenticated) router.push("/login")
      if(value === userVote) value = 0

      try {
         await Axios.post("/votes", {
            identifier,
            slug,
            value
         })
         if(mutate) {mutate()}
         if(subMutate) { subMutate();}
      }catch(e) {
         console.log("vote",e)
      }
   }

   return (
      <div
         className="flex mb-4 bg-white rounded"
         id={identifier}
      >
         {/* 좋아요 싫어요 기능 */}
         <div className="flex-shirink-0 w-10 py-2 text-center rounded-l">
            {/* 좋아요 */}
            <div
               className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500"
               onClick={() => vote(1)}
            >
               {
                  userVote === 1 ?
                     <FaArrowUp className="text-red-500"/>
                     : <FaArrowUp />
               }
            </div>
            <p className="text-xs font-bold">{voteScore}</p>
            {/* 싫어요 */}
            <div
               className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-500"
               onClick={() => vote(-1)}
            >
               {
                  userVote === - 1 ?
                     <FaArrowDown className="text-blue-500"/>
                     : <FaArrowDown />
               }
            </div>
         </div>

         {/* 포스트 데이터 */}
         <div className="w-full p-2">
            <div className="flex items-center">
            {!isInSubPage && (
               <div className="flex items-center">
                  <Link href={`/r/${subName}`}>
                     {
                        sub &&
                           <Image
                              src={sub?.imageUrl}
                              alt="sub"
                              className="rounded-full cursor-pointer"
                              width={12}
                              height ={12}
                           />
                     }
                  </Link>
                  <Link href={`/r/${subName}`} className="ml-2 text-xs font-bold cursor-pointer hover:underline">
                     /r/${subName}
                  </Link>
                  <span className="mx-1 text-xs text-gray-400">*</span>
               </div>
            )}

               <p className="text-xs text-gray-400">
                  Posted by
                  <Link href={`/u/${username}`} className="mx-1 hover:underline">/u/{username}</Link>
                  <Link href={url}>{dayjs(createdAt).format("YYYY-MM-DD HH:mm")}</Link>
               </p>
            </div>

            <Link href={url}
                  className="my-1 text-lg font-medium">
               {title}
            </Link>
            {body && <p className="my-1 text-sm">{body}</p>}
            <div className="flex">
               <Link href={url}>
                  <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                  <span>{commentCount}</span>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default PostCard
