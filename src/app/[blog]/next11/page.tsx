import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
          <div className="px-3 md:px-8 py-8 rounded-lg">
          <Image
            src="/images/11.jpg"
            alt="setup"
            width={400}
            height={400}
            className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px]  rounded-lg border border-slate-300"
          />
          <div className="px-3 md:px-8 py-8 rounded-lg">
            <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 11</h1>
            <h3 className="pb-4 text-xl font-medium text-center font-serif">Eleventh Version of Next.JS</h3>
            <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Next.js 11, released in <b>June 2021</b>, focused on improving the <b>developer experience performance</b> and introducing new tools for modern web development. Here a detailed breakdown of the major features and enhancements in Next.js 11</p>
            <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 11</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 11</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Conformance with ESLint
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built-in <b>ESLint support</b> for consistent code quality and project conformance.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic detection and setup of ESLint configuration when creating a Next.js app.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black text-lg text-left px-3 md:px-8 py-7 text-cyan-500 h-[80px] rounded-lg w-[60%] ml-[5%]">
            <code>npx create-next-app@latest my-app</code>
            </div>
            <li className="py-2 list-disc text-md mx-3 md:mx-9">ESLint rules optimized for Next.js, including warnings for common issues like:
<br />
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Missing <span className="bg-gray-400 p-1">{`<Image>`}</span> attributes.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improper use of <span className="bg-gray-400 p-1">next/head</span>.
            </li>
            </li>
        </ul>
        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Real-Time Collaborative Editing
        </h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Live Share </b>powered by Visual Studio Code.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Developers can collaborate on the same Next.js project in real time with remote peers.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced for pair programming and debugging.
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Next.js Script Component
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced the <span className="bg-gray-400 p-1">{`<Script>`}</span> component for third-party scripts with better loading strategies.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized loading for performance by reducing render-blocking scripts.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Strategies include:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>beforeInteractive</b>: Load script before the page becomes interactive.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>afterInteractive</b>: Default; loads script after page is interactive.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>lazyOnload</b>: Loads script when the browser is idle.
          </li>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[320px] sm:h-[380px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>import Script from next/script;</code><br /><br />
            <code>{`const MyPage = () => (`}</code><br />
            <code>&nbsp;{`  <>`}</code><br />
            <code>&nbsp;&nbsp;{`    <Script src="https://example.com/script.js" strategy="lazyOnload" />`}</code><br />
            <code>&nbsp;&nbsp;{`    <div>Page Content</div>`}</code><br />
            <code>&nbsp;{` </>`}</code><br />
            <code>{`)`}</code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Improved Fast Refresh
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced <b>Fast Refresh</b> ensures a seamless development experience with real-time updates.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">No need to reload the page or lose component state when editing React components or CSS.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Web Vitals Monitoring
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built-in <b>Web Vitals tracking</b> for Core Web Vitals like:
<br /> 
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Largest Contentful Paint (LCP).
</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9">First Input Delay (FID).
</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9">Cumulative Layout Shift (CLS).
</li>
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Integrated directly with <span className="bg-gray-400 p-1">next/scriptnext/script</span> and the analytics library.
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
         <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[150px] sm:h-[180px] h-full rounded-lg md:w-[70%] sm:w-[90%] md:ml-[5%] w-full">
<code>{`export function reportWebVitals(metric) {`}</code><br />
<code>&nbsp;{`  console.log(metric);`}</code><br />
<code>{`}`}</code>
</div>
</ul>
<h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Improved Performance for Images
</h4>
<ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced the <span className="bg-gray-400 p-1">{`<Image>`}</span> component for better performance and flexibility.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Added features:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Native <span className="bg-gray-400 p-1">priority</span> attribute for above-the-fold images.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved caching for optimized images.
          </li>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[350px] sm:h-[430px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>import Image from next/image;</code><br />
            <code>{`const MyImage = () => (`}</code><br />
            <code>&nbsp;{`  <Image`}</code><br />
            <code>&nbsp;&nbsp;{`    src="/example.jpg"`}</code><br />
            <code>&nbsp;&nbsp;{`    alt="Example"`}</code><br />
            <code>&nbsp;&nbsp;{`    width={500}`}</code><br />
            <code>&nbsp;&nbsp;{`    height={300}`}</code><br />
            <code>&nbsp;&nbsp;{` priority`}</code><br />
            <code>&nbsp;{`  />`}</code><br />
            <code>{`);`}</code>
            </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Middleware (Experimental)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced middleware to intercept requests and add custom logic before rendering.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Middleware is written in the <span className="bg-gray-400 p-1">pages/_middleware.js</span> file or <span className="bg-gray-400 p-1">middleware.js</span>.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables use cases like:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Authentication and authorization.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">A/B testing.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Custom headers and redirects.
          </li>
          </li>
          <li className="py-4 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[290px] sm:h-[350px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`export function middleware(req) {`}</code><br/>
            <code>&nbsp;{`  const { pathname } = req.nextUrl;`}</code><br/> <br/>
            <code>&nbsp;{`  if (pathname === '/protected') {`}</code><br/>
            <code>&nbsp;&nbsp;{`    return Response.redirect('/login');`}</code><br/>
            <code>&nbsp;{`}`}</code><br/>
            <code>{`}`}</code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. React 17 Support
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Full support for <b>React 17</b>, enabling:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">JSX transformations.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Gradual adoption with existing React projects.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Create-Next-App Templates
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced <b>create-next-appn</b> with new templates for faster project initialization.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Examples:</li>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[140px] sm:h-[190px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>npx create-next-app@latest my-app --example blog</code><br />
            <code>npx create-next-app@latest my-app --example ecommerce</code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">10. CSS and Sass Module Enhancements
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved support for <b>CSS Modules</b> and <b>Sass Modules</b>.

</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:

<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Create <span className="bg-gray-400 p-1">.module.css</span> or <span className="bg-gray-400 p-1">.module.scss</span> files for scoped styles.</li>
          </li>
          <div className="bg-black my-3 border-2 border-gray-500 text-lg text-left px-3 md:px-8 py-7 text-cyan-500 h-[120px] rounded-lg w-[60%] ml-[5%]">
            <code>{`.button {`}</code><br />
            <code>{`  background-color: blue;`}</code><br />
            <code>{`}`}</code>
          </div><br />
          <div className="bg-black md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[180px] sm:h-[250px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`import styles from './styles.module.css';`}</code><br />
            <code>{`  const MyButton = () => <button className={styles.button}>Click Me</button>;`}</code><br />
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">11. Custom Webpack 5 Support
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Webpack 5 became the default bundler for Next.js, offering:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster builds.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved caching.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Better tree-shaking for smaller bundles.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">12. Improved Static Generation and SSR
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Incremental improvements in <b>Static Site Generation (SSG)</b> and <b>Server-Side Rendering (SSR)</b>:

          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster builds for large static sites.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">On-demand revalidation of static pages with improved caching.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">13. Preview Mode Enhancements
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved <b>Preview Mode</b> for integrating with CMSs.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Supports previewing unpublished or draft content.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">14. Enhanced Error Handling
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved error reporting with detailed stack traces.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Better handling of common issues during development and production.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">15. Easier Deployment with Vercel
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Deeper integration with Vercel for instant deployments, performance analytics, and rollback capabilities.
          </li>
          </ul>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Benefits of Next.js 11:
          </h3>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Enhanced Developer Experience</b>: Fast Refresh, ESLint, and Live Share make development more seamless.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Improved Performance</b>: Optimized loading of images and scripts boosts page speed.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Modern Features</b>: Middleware and Web Vitals tracking cater to advanced use cases.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Future-Ready</b>: Compatibility with React 17 and Webpack 5 ensures modern standards.
          </li>
          </ul>
          <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 11 empowered developers to build highly performant, scalable, and modern web applications with minimal configuration and maximum productivity.
</p>
                </div>
                <Comments/>
                </div>
                
  )
}

export default page