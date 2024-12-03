import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
       <div className="px-3 md:px-8 py-8 rounded-lg">
      <Image
        src="/images/9.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"
      />
      <div className="px-3 md:px-8 py-8 rounded-lg">
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 9</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">Nineth Version of Next.JS</h3>
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
        Next.js 9, released in <b>July 2019</b>, introduced several new features and improvements aimed at enhancing the developer experience and scalability of applications. Below are the key details of this version:
        </p>      
<p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 9</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 9</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. API Routes
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced serverless API routes to handle backend logic.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Developers can now create API endpoints by adding JavaScript or TypeScript files in the <span className="bg-gray-400 p-1">/pages/api</span> directory.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[200px] md:h-[180px] sm:h-[220px] rounded-lg w-[60%] ml-[5%]">
            <code>{`export default function handler(req, res) {`}</code><br/>
            <code>&nbsp;{`res.status(400).json({ message: 'Hello, world!' });`}</code><br/>
            <code>{`}`}</code>
            </div>
            <li className="py-2 list-disc text-md mx-3 md:mx-9"><b>Benefits:</b>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Easy integration with existing Next.js projects.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatically deployed as serverless functions.
            </li>
            </li>
            
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Dynamic Routing
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified <b>dynamic routes</b> using file-based routing with brackets <span className="bg-gray-400 p-1">([param])</span>.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:
         
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">File:<span className="bg-gray-400 p-1"> /pages/post/[id].js</span>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">URL: <span className="bg-gray-400 p-1">/post/1</span> or
          <span className="bg-gray-400 p-1">/post/abc</span>.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Access parameters using the <span className="bg-gray-400 p-1">useRouter </span>hook or 
          <span className="bg-gray-400 p-1">getServerSideProps</span>.</li>
          </li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[350px] sm:h-[380px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`import { useRouter } from 'next/router';`}</code><br />
            <code>{`const Post = () => {`}</code><br />
            <code>&nbsp;{`  const router = useRouter();`}</code><br />
            <code>&nbsp;{`  const { id } = router.query;`}</code><br /><br />
            <code>&nbsp;{`  return <div>Post ID: {id}</div>;`}</code><br />
            <code>{`};`}</code><br /><br />
            <code>export default Post;</code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Pre-Rendering Improvements</h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Static Generation (SSG):</b>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Static content is generated at build time.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Use <span className="bg-gray-400 p-1">getStaticProps</span> and <span className="bg-gray-400 p-1">getStaticPaths</span> for dynamic static content.
            </li>
              </li>
            </ul>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Server-Side Rendering (SSR):
            </b>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Content is generated on each request using <span className="bg-gray-400 p-1">getServerSideProps</span>.</li>
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Automatic Static Optimization</h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Pages without server-side logic are automatically rendered as static HTML at build time.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved performance by reducing server load and enabling fast CDN delivery.
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Built-In TypeScript Support</h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic TypeScript configuration and setup.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Next.js detects <span className="bg-gray-400 p-1">.ts</span> and <span className="bg-gray-400 p-1">.tsx</span> files and generates the necessary <span className="bg-gray-400 p-1">tsconfig.json</span> file.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Provides type-checking during development.
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Improved Developer Experience
            </h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">
                <b>Fast Refresh:</b> <br />
                <li className="pb-2 list-disc text-md mx-3 md:mx-9">Instant feedback while coding with hot reloading.
                <b>Better Error Reporting:</b> <br />
                <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved stack traces and build-time error messages.
                </li>
                </li>
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Middleware Support with Custom Routes
            </h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced support for custom routes <span className="bg-gray-400 p-1">(next.config.js)</span> for redirects, rewrites, and headers.</li>
            <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-full md:h-[350px] sm:h-[380px] rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
                <code>{`module.exports = {`}</code> <br />
                <code>&nbsp;{`async redirects() {`}</code><br />
                <code>&nbsp;&nbsp;{` return [`}</code><br />
                <code>&nbsp;&nbsp;&nbsp;{`{`}</code><br />
                <code>&nbsp;&nbsp;&nbsp;&nbsp;{`source: '/old-route',`}</code><br />
                <code>&nbsp;&nbsp;&nbsp;&nbsp;{`destination: '/new-route',`}</code><br />
                <code>&nbsp;&nbsp;&nbsp;&nbsp;{`  permanent: true,`}</code><br />
                <code>&nbsp;&nbsp;&nbsp;{` },`}</code><br />
                <code>&nbsp;&nbsp;{` ];`}</code><br />
                <code>&nbsp;{` },`}</code><br />
                <code>{`};`}</code>
            </div>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Size Reduction</h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced build sizes for faster deployment.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Code splitting ensures only the necessary JavaScript is loaded for each page.
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Internationalized Routing</h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">While basic internationalization wasn’t fully supported in v9, developers could implement custom solutions.
            </li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">10. Enhanced Support for AMP
            </h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Added support for the <b>AMP (Accelerated Mobile Pages) </b>AMP framework.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Use the <span className="bg-gray-400 p-1">amp</span> property in Next.js pages for AMP compatibility.</li>
            </ul>
            <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">11. New Analytics Tools
            </h4>
            <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved performance analytics and metrics to monitor website performance in production.
            </li>
            </ul>
            <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 9 was a game-changer, setting the foundation for many features available in later versions. It focused on performance, scalability, and ease of use, making it an ideal choice for modern web development.
</p>
         </div>
          <Comments/>
         </div>
        
       
  )
}

export default page