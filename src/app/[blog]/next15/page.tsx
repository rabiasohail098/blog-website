import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
    <div className="px-3 md:px-8 py-8 rounded-lg">
    <Image
      src="/images/15.jpg"
      alt="setup"
      width={400}
      height={400}
      className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"
    />
    <div className="px-3 md:px-8 py-8 rounded-lg">
      <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 15</h1>
      <h3 className="pb-4 text-xl font-medium text-center font-serif">fitteenth Version of Next.JS</h3>
      <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 15 introduces several exciting features and improvements aimed at enhancing performance, developer experience, and compatibility with modern tools. Here an overview of the major updates:</p>
      <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 15</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 15</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Support for React 19:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Integration with React 19 introduces advanced client and server component features.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Includes the experimental React Compiler, reducing manual memoization needs and improving code efficiency​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Partial Pre-rendering (Experimental):

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Combines static and dynamic rendering on the same page.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhances load times by pre-rendering a static shell and loading dynamic content asynchronously​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Improved Hydration Error Messages:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplifies debugging by providing clear and actionable error messages when server-rendered content mismatches client-side rendering​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Caching Behavior Updates:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">By default, fetch requests now use <span className="bg-gray-400 p-1">no-store</span>, ensuring data freshness.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">GET route handlers and client-side router caching have been updated to avoid caching outdated data, offering more predictable behavior​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. New <span className="bg-gray-400 p-1">unstable_after</span> API (Experimental):

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Executes non-critical tasks like logging or analytics after a response finishes streaming.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improves primary response performance without blocking user interactions​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Enhanced <span className="bg-gray-400 p-1">create-next-app</span> Command:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Streamlines project setup with faster initialization.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduces TurboPack for enhanced build speed and performance​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Vercel Firewall:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">A new security layer to handle DDoS attacks and other threats natively, reducing dependency on external solutions like Cloudflare​
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Feature Flags Overhaul:

</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Server-side management of feature flags ensures secure rollouts and minimizes accidental leaks of upcoming features​
          </li>
          </ul>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Benefits:
          </h3>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved application performance.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified debugging and error handling.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced developer tools for faster setup and better scalability.
          </li>
          </ul>
      </div>
      <Comments/>
      </div>
  )
}

export default page