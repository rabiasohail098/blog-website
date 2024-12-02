import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Latest = () => {
  return (
    <div>

            <h2 className='py-4 text-[45px] text-center font-serif font-bold'>Latest Version</h2>
            <div className='flex-row md:flex'>
                <div className='p-4 md:w-[50%] w-[85%] '>
                    <h2 className='px-8 text-4xl text-left font-semibold font-sans'>Next.JS 15</h2>
                    <p className='text-[20px] px-8 text-justify py-5'>Next.js has consistently pushed the boundaries of web development, and with the release of Next.js 15, the framework has reached new heights. This version introduces powerful features that enhance performance, development speed, and flexibility, particularly with React 19 compatibility and advancements in server-side rendering. If you are a developer or a tech enthusiast, Next.js 15 is packed with updates that are worth exploring.</p>
                    <Link href="/blog/next15" className='ml-[5%]'><button className='border border-white bg-black text-white text-[15px] text-center p-3 rounded-lg'>Read More</button></Link>
                </div>
                <div className='md:w-[50%] w-[85%] pt-8'>
                <Image src="/images/15.jpg" alt="next-15" width={200} height={250} className="ml-10 mr-6 w-[90%] h-[300px] border border-slate-300 rounded-lg"/>
                </div>
            </div>
           

        </div>
    
  )
}

export default Latest