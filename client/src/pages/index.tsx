import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Axios from "axios";
import useSWR from "swr"
import { Sub } from '../types'
import Image from 'next/image'
import { useAuthState } from '../context/auth';

const Home:NextPage = () => {
  const {authenticated} = useAuthState();
  const fetcher = async(url : string) => {
    return await Axios.get(url).then(res => res.data)
  }
  const address = "http://localhost:4000/api/subs/sub/topSubs";
  const {data: topSubs} = useSWR<Sub[]>(address, fetcher)
  console.log("topSubs",topSubs)

  return (
    <div className="flex max-w-5xl px-4 pt-5 mx-auto">
      {/* post list */}
      <div className="w-full md:mr-3 md:w-8-12"></div>

      {/* side bar */}
      <div className="hidden w-4/12 ml-3 md:block">
        <div className="bg-white border rounded">
          <div className="p-4 border-b">
            <p className="text-lg font-semibold text-center">상위 커뮤니티</p>
          </div>
          {/* community list */}
          <div>
            {topSubs?.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center px-4 py-2 text-xs border-b"
              >
                <Link href={`/r/${sub.name}`}>
                  <Image
                    src={sub.imageUrl}
                    className="rounded-full cursor-pointer"
                    alt="Sub"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href={`/r/${sub.name}`}
                  className="ml-2 font-bold hover:cursor-pointer"
                >
                  /r/{sub.name}
                </Link>
                <p className='ml-auto font-md'>{sub.postCount}</p>
              </div>
            ))}
          </div>
            {authenticated && (
              <div className="w-fill py-6 text-center">
                <Link
                  href="/subs/create"
                  className="w-full p-2 text-center text-white bg-gray-400 rounded"
                  >커뮤니티 만들기
                </Link>
              </div>
            )
            }
        </div>
      </div>
    </div>
  )
}

export default Home
