import React,{useState,useRef,useEffect, ChangeEvent} from 'react';
import useSWR from "swr";
import Axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuthState } from '../../context/auth';
import Sidebar from '../../components/Sidebar';
import { Post } from '../../types';
import PostCard from '../../components/PostCard';

const SubPage = () => {
   const router = useRouter();
   const subName = router.query.sub;
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [ownSub, setOwnSub] = useState(false);
   const {authenticated, user} = useAuthState();
   const {data: sub, error, mutate} = useSWR(subName ? `/subs/${subName}` : null);




   const uploadImage = async(event: ChangeEvent<HTMLInputElement>) => {
      if(event.target.files === null) return;

      const file = event.target.files[0];
      console.log("file", file)

      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", fileInputRef.current!.name)

      try {
         await Axios.post(`/subs/${sub.name}/upload`, formData, {
            headers : {'Context-Type': "multipart/form-data"}
         })
      }catch(e) {
         console.log(e)
      }
   }

   const openFileInput = (type : string) => {
      if(!ownSub) return;
      const fileInput = fileInputRef.current;
      if(fileInput) {
         fileInput.name = type
         fileInput.click();
      }
   }


   useEffect(() => {
      if(!sub || !user) return;
      setOwnSub(authenticated && user.username === sub.username);
   }, [sub])

   let renderPosts;

   if(!sub) {
      renderPosts = <p className="text-lg text-center">Loading....</p>
   } else if(sub.posts.length === 0) {
      renderPosts = <p className="text-lg text-center">현재 작성된 포스트가 없습니다.</p>
   }else {
      renderPosts = sub.posts.map((post: Post) => (
         <PostCard key={post.identifier} post={post} subMutate={mutate}/>
      ))
   }


   return (
      <React.Fragment>
      {
         sub &&
            <React.Fragment>
               <div>
                  <input type="file" hidden={true} ref={fileInputRef} onChange={uploadImage}/>
                  {/* 베너 이미지 */}
                  <div className="bg-gray-400">
                     {sub.bannerUrl ? (
                        <div
                           className="h-56"
                           style={{
                              backgroundImage: `url(${sub.bannerUrl})`,
                              backgroundRepeat : "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                           }}
                           onClick={() => openFileInput("banner")}
                        >
                        </div>
                     ) : (
                        <div
                           className='h-20 bg-gray-400'
                           onClick={() => openFileInput("banner")}
                        ></div>
                     )}
                  </div>
                  <div>
                     {/* 커뮤니티 메타 데이터 */}
                     <div className="h-20 bg-white">
                        <div className="relative flex max-w-5xl px-5 mx-auto">
                           <div className="absolute" style={{ top : -15}}>
                              {sub.imageUrl && (
                                 <Image
                                    src={sub.imageUrl}
                                    alt="커뮤니티 이미지"
                                    width={70}
                                    height={70}
                                    className="rounded-full"
                                    onClick={() => openFileInput("image")}
                                 />
                              )}
                           </div>
                           <div className="pt-1 pl-24">
                              <div className="flex items-center">
                                 <h1 className="text-3xl font-bold">{sub.title}</h1>
                              </div>
                              <p className="text-small font-bold text-gray-400">
                                 /r/{sub.name}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 포스트의 사이드 바 */}
                  <div className="flex max-w-5xl px-4 pt-5 mx-auto">
                     <div className="w-full md:mr-3 md:w-8/12">{renderPosts}</div>
                     <Sidebar sub={sub}/>
                  </div>
               </div>
            </React.Fragment>
      }
      </React.Fragment>
   )
}

export default SubPage

