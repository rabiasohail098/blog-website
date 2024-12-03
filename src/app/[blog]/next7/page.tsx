import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const page = () => {
  return (
    <div>
      <div className="px-3 md:px-8 py-8 rounded-lg">
        <Image
          src="/images/7.jpg"
          alt="setup"
          width={400}
          height={400}
          className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"
        />
        <div className="px-3 md:px-8 py-8 rounded-lg">
          <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 7</h1>
          <h3 className="pb-4 text-xl font-medium text-center font-serif">Seventh Version of Next.JS</h3>
          <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Next.js 7, released in <b>October 2018</b>, was a significant step forward in the framework is development. It introduced new features that enhanced developer productivity, improved performance, and expanded customization options. This version focused on simplifying routing, better asset management, and integrating modern React features.
          </p>
          <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 7</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 7</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">
            1. Static and Dynamic Routing Enhancements
          </h4>
          <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">
              Introduced <b>Static Import for Pages</b>
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">
              Allowed importing pages from custom folders instead of being limited to the <span className="bg-gray-400 p-1">pages</span> directory.
            </li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          </ul>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[120px] sm:h-[130px] h-[150px] rounded-lg md:w-[60%] sm:w-[80%] w-full  md:ml-[5%]">
            <code>import MyPage from ./custom-folder/MyPage;</code>
            <br />
            <code>export default MyPage;</code>
          </div><br />
          <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">
              Improved support for dynamic routing patterns, though full file-based dynamic routing (like{' '}
              <span className="bg-gray-400 p-1">[id].js</span>) came later in Next.js 9.
            </li>
          </ul>
          <h4 className="pb-4 list-decimal px-3 md:px-12 text-lg font-semibold text-left font-serif">2. Improved Build Performance</h4>
          <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Leveraged <b>Webpack 4</b> optimizations for faster builds.</li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced client and server build times with better code-splitting.</li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced JavaScript bundle sizes for faster page loads.</li>
          </ul>
          <h4 className="pb-4 list-decimal px-3 md:px-12 text-lg font-semibold text-left font-serif">3. Webpack and Babel Configuration</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allowed <b>custom Webpack and Babel configurations</b> through <span className="bg-gray-400 p-1">next.config.js</span>, enabling developers to fine-tune their build process.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example: Modifying Webpack behavior:</li>
          </ul>
          <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[300px] rounded-lg md:w-[60%] sm:w-[80%] w-full md:ml-[5%]">
            <code>{`module.exports = {`}</code><br />
            <code>&nbsp;{`webpack: (config) => {`}</code><br />
            <code>&nbsp;&nbsp;{` config.module.rules.push({`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{`  test: /\.svg$/,`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{`  use: ['@svgr/webpack'],`}</code><br />
            <code>&nbsp;&nbsp;{` });`}</code><br />
            <code>&nbsp;&nbsp;{`    return config;`}</code><br />
            <code>&nbsp;{`  },`}</code><br />
            <code>{`};`}</code>
          </div>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Improved CSS Support</h4>
        <ul className="px-3 md:px-12">
        <li className="pb-2 list-disc text-md mx-3 md:mx-9">Extended CSS handling capabilities, allowing developers to import CSS files directly into components.</li>
        <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified CSS configuration while maintaining flexibility for custom setups.</li>
        </ul>
        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Customizable <span className="bg-gray-400 p-1">Document</span> and <span className="bg-gray-400 p-1">App</span> Components</h4>
         <ul className="px-3 md:px-12">
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced customization of <span className="bg-gray-400 p-1">_document.js</span> and <span className="bg-gray-400 p-1">_app.js</span> for global layouts, meta tags, and shared data between pages.
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example: Adding a global layout in <span className="bg-gray-400 p-1">_app.js</span></li>
         <div className="bg-black my-3 border-2 border-gray-500 md:text-sm sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[320px] sm:h-[380px] h-full rounded-lg md:w-[60%] sm:w-[80%] w-full ml-[5%]">
          <code>import ../styles/globals.css;</code><br/>
          <code>{`function MyApp({ Component, pageProps }) {`}</code><br />
          <code>&nbps;{`  return (`}</code><br />
          <code>&nbps;&nbps;{`  <div>`}</code><br />
          <code>&nbps;&nbps;&nbps;{` <header>My App Header</header>`}</code><br />
          <code>&nbps;&nbps;&nbps;{` <Component {...pageProps} />`}</code><br />
          <code>&nbps;&nbps;{` </div>`}</code><br />
          <code>&nbps;&nbps;{`  );`}</code><br />
          <code>&nbps;{`}`}</code><br />
          <code>export default MyApp;</code>
         </div>
         </ul>
         <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Support for React 16.6 Features</h4>
         <ul className="px-3 md:px-12">
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Fully supported React 16.6, introducing:
         <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>React.memo:</b> Optimized functional components.</li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>React.lazy and Suspense: </b> Lazy loading components for better performance.</li>
         </li>
         </ul>
         <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Static Export Improvements</h4>
         <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved the <span className="bg-gray-400 p-1">next export</span> feature for better compatibility with static hosting.</li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Supported more complex static content workflows, paving the way for future static site generation advancements.</li>
         </ul>
         <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Enhanced Error Reporting</h4>
         <ul className="px-3 md:px-12">
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Clearer and more detailed error messages during development.
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved stack traces for client-side and server-side errors.
         </li>
         </ul>
         <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Automatic Prefetching for Links</h4>
         <ul className="px-3 md:px-12">
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatically prefetches linked pages during idle time, improving perceived performance and navigation speed.</li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
         <div className="bg-black my-3 border-2 border-gray-500 text-lg text-left px-3 md:px-8 py-7 text-cyan-500 h-[300px] rounded-lg md:w-[60%] sm:w-[90%] w-full md:ml-[5%]">
          <code>import Link from next/link;</code><br />
          <code>{`function HomePage() {`}</code><br />
          <code>&nbsp;{` return (`}</code><br />
          <code>&nbsp;&nbsp;{`<Link href="/about">`}</code><br />
          <code>&nbsp;&nbsp;&nbsp;{`   <a>About Us</a>`}</code><br />
          <code>&nbsp;&nbsp;{`    </Link>`}</code><br />
          <code>&nbsp;{`  );`}</code><br />
          <code>{`}`}</code><br />
          <code>export default HomePage;</code>
         </div>
         </ul>
         <h3 className="py-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Performance Enhancements
         </h3>
         <ul className="px-3 md:px-12">
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster rebuilds and incremental compilation during development.
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced JavaScript bundle sizes and optimized runtime performance.
         </li>
         <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized static files and assets, improving load times.
         </li>

         </ul>
         <h3 className="py-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Limitations of Next.js 7
</h3>
<ul className="px-3 md:px-12">
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>No File-based Routing for Dynamic Routes: </b>The <span className="bg-gray-400 p-1">[id].js</span> syntax for dynamic routing was introduced in Next.js 9.</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>No Built-in API Routes: </b>Developers still needed custom servers for handling backend logic.</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>No Static Site Generation (SSG) or Incremental Static Regeneration (ISR): </b>These were introduced in Next.js 9 and 10.</li>
<li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Limited TypeScript Support: </b>While possible, TypeScript integration required manual setup and configuration.
</li>
</ul>
          </div>
      </div>
      <Comments/>
    </div>
  );
};

export default page;

