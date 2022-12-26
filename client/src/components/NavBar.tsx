import Link from 'next/link';
import React, { Fragment } from 'react';
import { useAuthDispatch, useAuthState } from '../context/auth';
import Axios from 'axios';
import Image from 'next/image';

const NavBar:React.FC = () => {
   const {loading, authenticated} = useAuthState();
   const dispatch = useAuthDispatch()
   const handleLogout = () => {
      try{
         Axios.post("/auth/logout")
            .then(() => {
               dispatch("LOGOUT");
               window.location.reload()
            })
            .catch(e => {
               console.log(e)
            })
      }catch(e) {
         console.log("handleLogout",e)
      }
   }

   return (
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-13 px-5 bg-white">
         <span className="text-2xl font-semibold text-gray-400">
            <Link href="/">
               <Image
                  src="/Logo.png"
                  alt="logo"
                  width={80}
                  height={45}
               />
            </Link>
         </span>

         <div className="max-w-full px-4">
            <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
               <i className="pl-2 pr-3 text-gray-400 fas fa-search"></i>
               <input
                  type="text"
                  placeholder="Search Reddit"
                  className="px-3 py-1 bg-transparent h-7 rounded focus:outline-none"
               />
            </div>
         </div>

         <div className="flex">
            {!loading &&
               (authenticated ? (
                  <button
                     className="w-20 p-x mr-2 text-sm text-center h-7 text-white bg-gray-400 rounded"
                     onClick={handleLogout}
                  >로그아웃</button>
               ) : (
                  <>
                     <Link href="/login" className="w-20 pt-1 text-sm p-x mr-2 h-7 text-center text-blue-500 border border-blue-500 rounded">
                        로그인
                     </Link>

                     <Link href="/register" className="w-20 text-sm pt-1 p-x h-7 text-center text-white bg-gray-400 rounded">
                        회원가입
                     </Link>
                  </>
               ))
            }
         </div>

      </div>
   );
};

export default NavBar;