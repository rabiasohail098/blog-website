import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
    <div className="px-3 md:px-8 py-8 rounded-lg">
    <Image
      src="/images/10.jpg"
      alt="setup"
      width={400}
      height={400}
      className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"
    />
    <div className="px-3 md:px-8 py-8 rounded-lg">
      <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 10</h1>
      <h3 className="pb-4 text-xl font-medium text-center font-serif">Tenth Version of Next.JS</h3>
      <p className="py-4 text-[16px] text-justify px-3 md:px-12">
      Next.js 10 released in <b>October 2020</b>, brought several groundbreaking features that enhanced both developer experience and application performance. Here is a detailed overview of what was introduced in Next.js 10:      </p>
      <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 10</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 10</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Image Optimization
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Built-in Image Component:</b> The new <span className="bg-gray-400 p-1">{`<Image>`}</span> component simplifies handling images with automatic optimization.
</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Key features:
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic resizing and serving images in modern formats like WebP.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Lazy loading by default for performance improvements.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Examples:</li>
          </li>
          <div className="bg-black border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[380px] sm:h-[450px] h-full rounded-lg md:w-[70%] sm:w-[90%] md:ml-[5%] w-full">
            <code>{`import Image from 'next/image';`}</code><br/>
            <code>&nbsp;{`const MyImage = () => (`}</code><br/><br />
            <code>&nbsp;{` <Image`}</code><br />
            <code>&nbsp;&nbsp;{` src="/example.jpg" // Path to the image`}</code><br />
            <code>&nbsp;&nbsp;{` alt="Example Image" `}</code><br />
            <code>&nbsp;&nbsp;{` width={800} `}</code><br />
            <code>&nbsp;&nbsp;{`height={600}`}</code><br />
            <code>&nbsp;{`  />`}</code><br />
            <code>{`);`}</code><br />
            <code>export default MyImage</code><br />
          </div>
          <li className="py-4 px-3 md:px-12 list-disc text-md mx-3 md:mx-9">Optimized images are served via a built-in Image Optimization API.</li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Internationalized Routing (i18n)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Native support for internationalized (multilingual) routing.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables locale-based URL routing, such as <span className="bg-gray-400 p-1">/en</span>, <span className="bg-gray-400 p-1">/fr</span>, or <span className="bg-gray-400 p-1">/es</span>.
</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Configuration in <span className="bg-gray-400 p-1">next.config.js:</span></li>
<div className="bg-black my-3 border-gray-500 border-2 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[260px] sm:h-[320px] h-full w-full rounded-lg md:w-[70%] md:ml-[5%] sm:w-[90%]">
    <code>{`module.exports = {`}</code><br /><br />
    <code>&nbsp;{` i18n: {`}</code><br />
    <code>&nbsp;&nbsp;{` locales: ['en', 'fr', 'es'],`}</code><br />
    <code>&nbsp;&nbsp;{`defaultLocale: 'en',`}</code><br /><br />
    <code>&nbsp;{`},`}</code><br />
    <code>{`};`}</code><br /><br />
</div>
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits <br />
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic locale detection.
</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified management of language-specific content.
</li>
</li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Next.js Analytics (Powered by Vercel)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Launched <b>Next.js Analytics</b> to provide real-time insights into application performance.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Monitors:
<br />
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Page load times.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Visitor metrics.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Web Vitals (e.g., LCP, FID, CLS).
            </li>
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Built-in Webpack 5 Support
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Experimental support for <b>Webpack 5</b>, bringing performance enhancements and features like:

          
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Better tree-shaking and faster builds.</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Smaller client-side bundles.</li>   
</li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. New <span className="bg-gray-400 p-1">next/script</span> Component</h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced the <span className="bg-gray-400 p-1">{`<Script>`}</span> component for loading third-party scripts efficiently.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables deferred or async loading of external scripts.</li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
       <div className="bg-black my-3 border-gray-500 border-2  md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[350px] sm:h-[430px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
        <code>{`import Script from 'next/script';`}</code><br /><br />
        <code>{`const MyPage = () => (`}</code><br />
        <code>&nbsp;{`  <>`}</code><br />
        <code>&nbsp;&nbsp;{`    <Script src="https://example.com/script.js" strategy="lazyOnload" />`}</code><br />
        <code>&nbsp;&nbsp;{`    <div>My Page Content</div>`}</code><br />
        <code>&nbsp;{` </>`}</code><br />
        <code>{`);`}</code>
       </div>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Strategies:
<br /> 
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><span className="bg-gray-400 p-1">lazyOnload</span>: Load script when the browser is idle.
</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><span className="bg-gray-400 p-1">beforeInteractive</span>: Load script before the page becomes interactive.
</li>
      </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Static File Serving for <span className="bg-gray-400 p-1">public/</span> Directory
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced the <span className="bg-gray-400 p-1">public/</span> directory for serving static assets (e.g., images, files).
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">
        <b>Benefits: <br />
        </b>
        <li className="pb-2 list-disc text-md mx-3 md:mx-9">Files in <span className="bg-gray-400 p-1">public/</span> are accessible via / (root) URLs.</li>
        <li className="pb-2 list-disc text-md mx-3 md:mx-9"> Example: A file <span className="bg-gray-400 p-1">public/logo.png</span> can be accessed at <span className="bg-gray-400 p-1">http://localhost:3000/logo.png.</span></li>
        </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Automatic Static Generation for More Pages</h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved static generation capabilities:

       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Pages using <span className="bg-gray-400 p-1">getStaticProps</span> can now support <b>incremental static regeneration</b>.</li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">This allows on-demand re-generation of static pages during runtime.
       </li>
       </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Incremental Static Regeneration (ISR) Enhancements
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Incremental Static Regeneration</b> was refined for better performance and reliability.

       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allows you to update static content without rebuilding the entire site.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
       <div className="bg-black my-3 border-gray-500 border-2 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[230px] sm:h-[300px] h-full rounded-lg md:w-[70%] md:ml-[5%] sm:w-[90%] w-full">
        <code>{`export async function getStaticProps() {`}</code><br/>
        <code>&nbsp;{`  return {`}</code><br/>
        <code>&nbsp;&nbsp;{`props: { data: 'Hello World' },`}</code><br/>
        <code>&nbsp;&nbsp;{`revalidate: 60;`}</code><br/>
        <code>&nbsp;{`  };`}</code><br/>
        <code>{`}`}</code>
       </div>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Improved Middleware (Preview Mode)
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Extended preview mode to allow authenticated previews of draft content.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplifies content management workflows with CMS integration.
       </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">10. Custom Headers and Middleware Enhancements
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved support for adding custom headers and handling redirects in <span className="bg-gray-400 p-1">next.config.js.</span></li>
       <div className="bg-black my-3 border-gray-500 border-2 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[380px] sm:h-[450px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
        <code>{`module.exports = {`}</code><br/>
        <code>&nbsp;{`async headers() {`}</code><br />
        <code>&nbsp;&nbsp;{` return [`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;{` {`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;{` source: '/about',`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;{`headers: [`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{ key: 'X-Custom-Header', value: 'MyHeaderValue' },`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;{`  ],`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;{`  },`}</code><br />
        <code>&nbsp;&nbsp;{`];`}</code><br />
        <code>&nbsp;{` },`}</code><br />
        <code>{`};`}</code>
       </div>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">11. Enhanced CSS and Sass Support
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Full support for global and module-based CSS and Sass.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized loading of CSS for faster builds and smaller bundle sizes.
       </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">12. Preview Mode Enhancements
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced integration for previewing unpublished content from a CMS or other backend services.
       </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">13. Improved Deployment Experience
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Seamless integration with <b>Vercel</b>, including instant rollbacks and optimized serverless deployments.
       </li>
       </ul>
       <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">14. Experimental Features
       </h4>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Continued innovation with experimental features like React Concurrent Mode and Server Components.
       </li>
       </ul>
       <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Benefits of Next.js 10:
       </h3>
       <ul className="px-3 md:px-12">
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplifies image and script handling for better performance.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables seamless multilingual support.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimizes static and dynamic content generation for modern web applications.
       </li>
       <li className="pb-2 list-disc text-md mx-3 md:mx-9">Provides a robust developer and user experience.
       </li>
       </ul>
       <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 10 significantly elevated the framework, making it even more capable for building performant, scalable, and developer-friendly applications.
</p>
      </div>
      <Comments/>
      </div>
    
  )
}

export default page