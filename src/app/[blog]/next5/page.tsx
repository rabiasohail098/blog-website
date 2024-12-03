import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
    <div className='px-3 md:px-8 py-8 rounded-lg  '>
         <Image src="/images/5.jpg" alt="setup" width={400} height={400} className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"/>
        <div className='px-3 md:px-8 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 5</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Fifth Version of Next.JS</h3>
        <p className='py-4  text-[16px] text-justify px-3 md:px-12'>Next.js 5, released in <b>March 2018</b>, was a significant milestone for the framework, introducing key features that improved performance, compatibility, and ease of deployment. It expanded the possibilities for server-side rendering (SSR) and static export workflows, making Next.js even more popular among developers.</p>
        <p className='py-4  text-[16px] text-justify px-3 md:px-12'>Here are the key details and features of <b>Next.js 5</b>:</p>
        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Key Features of Next.js 5</h3>
        <ul className='px-3 md:px-12'>
        <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Multi-Zone Support</h4>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced the ability to compose multiple Next.js applications into a single application, referred to as <b>multi-zone support</b>.</li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed developers to create micro-frontends or split large apps into smaller, maintainable parts.</li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example: Different subdomains or URL paths could serve different Next.js apps.</li>
        <div className='bg-black md:text-lg text-sm my-3 border-2 border-gray-500 text-left px-8 py-7 text-cyan-500 md:h-[320px] sm:h-[330px] h-full rounded-lg md:w-[60%] w-[95%] md:ml-[5%]'>
            <code>&nbsp;{`module.exports = {`}</code><br />
            <code>&nbsp;&nbsp;{`exportPathMap: async function (defaultPathMap) {`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{` return {`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;&nbsp;{`'/app1': { page: '/' },`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;&nbsp;{`'/app2': { page: '/other' },`}</code> <br />
            <code>&nbsp;&nbsp;&nbsp;&nbsp;{` };`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{`  },`}</code><br />
            <code>&nbsp;&nbsp;{`};`}</code>
        </div>
        <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Dynamic Import with SSR</h4>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved <span className='bg-gray-400 p-1'>next/dynamic</span> to support server-side rendering (SSR) for dynamically imported modules.</li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed components to load conditionally on the server side without affecting SSR capabilities.
        </li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
        <div className='bg-black md:text-sm text-[14px] my-3 border-2 border-gray-500 text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[230px] sm:h-[300px] h-full rounded-lg md:w-[60%] w-[90%] md:ml-[5%]'>
            <code>{`import dynamic from 'next/dynamic';`}</code><br />
            <code>{`const DynamicComponent = dynamic(() => import('./SomeComponent'), { ssr: true });`}</code><br />
            <code>{`function Page() {`}</code><br />
            <code>&nbsp;{`return <DynamicComponent />;`}</code><br />
            <code>{`}`}</code><br />
            <code>{`export default Page;`}</code><br />
            </div>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Webpack 4 Integration</h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Next.js 5 adopted <b>Webpack 4</b>, resulting in:
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Faster build times.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Smaller JavaScript bundles for better performance.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Built-in support for features like tree-shaking.</li>
            </li>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Automatic Static Optimization</h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved static file export process with better optimizations for pages without server-side code.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed hybrid static/dynamic applications, setting the stage for static site generation features introduced in later versions.</li>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>5.  Enhanced Error Handling</h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved error handling for SSR and client-side rendering, making debugging easier during development.</li>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Production-ready Build Improvements</h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved the production build process to generate smaller bundles and better optimize client-side JavaScript.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Reduced initial load times for users.</li>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>7. Support for Custom <span className='bg-gray-400 p-1'>server.js</span></h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed developers to customize their server logic with a custom <span className='bg-gray-400 p-1'>server.js</span> file.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example: Adding custom API endpoints or middleware logic.</li>
            <div className='bg-black md:text-sm my-3 border-2 border-gray-500 text-[14px] text-left px-8 py-7 text-cyan-500 md:h-[500px] sm:[600px] h-full rounded-lg md:w-[60%] w-[90%] md:ml-[5%]'>
                <code>const express = require(express);</code><br />
                <code>const next = require(next);</code><br />
                <code>{`const app = next({ dev: process.env.NODE_ENV !== 'production' });`}</code><br />
                <code>const handle = app.getRequestHandler();</code><br />
                <code>{`app.prepare().then(() => {`}</code><br />
                <code>{`const server = express();`}</code><br />
                <code>{` server.get('/custom-route', (req, res) => {`}</code><br />
                <code>&nbsp;{`  return app.render(req, res, '/custom-page', req.query);`}</code><br />
                <code>{`  });`}</code><br />
                <code>{`server.all('*', (req, res) => {`}</code><br />
                <code>&nbsp;{`return handle(req, res);`}</code><br />
                <code>{`  });`}</code><br />
                <code>{`  server.listen(3000, () => {`}</code><br />
                <code>&nbsp;{` console.log('> Ready on http://localhost:3000');`}</code><br />
                <code>{`  });`}</code><br />
                <code>{`  });`}</code>
            </div>
            <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>8.  Improved Static Export (<span className='bg-gray-400 p-1'>next export</span>)</h4>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enhanced the <span className='bg-gray-400 p-1'>next export</span> feature to work seamlessly with dynamic routing and custom configurations.</li>
        </ul>
        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Performance Enhancements</h3>
        <ul className='px-3 md:px-12'>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Adopted faster and more optimized Webpack builds.</li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Reduced JavaScript bundle sizes, enhancing page load performance.</li>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced better caching mechanisms during the build process.</li>
        </ul>
        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Community Impact</h3>
        <p className='py-4  text-[16px] text-justify px-12'>Next.js 5 marked a turning point for the framework by focusing on scalability, flexibility, and developer experience. It laid the groundwork for modern features like <b>Incremental Static Regeneration (ISR)</b> and <b>API routes</b> introduced in later versions.</p>
        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Limitations of Next.js 5</h3>
        <ul className='px-3 md:px-12'>
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Still lacked built-in API routes, which required custom server logic.</li>  
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>No support for <b>Static Site Generation (SSG)</b> or <b>Incremental Static Regeneration (ISR)</b> (introduced in Next.js 9 and 10).</li>  
        <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Did not have advanced optimizations for images, fonts, and other assets (added in Next.js 10).</li>  
       </ul>
        </div>
        <Comments/>
        </div>
  )
}

export default page