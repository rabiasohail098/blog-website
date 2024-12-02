import Link from "next/link";
const nextVersions = [
    {
      version: "Next.js 1",
      releaseDate: "October 2016",
      features: ["Basic Static and Server Rendering", "File-Based Routing","Automatic Code Splitting"],
      imagePath: "/images/1.jpg",
      src:<Link href="/blog/next1" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 2",
      releaseDate: "March 2017",
      features: ["Custom server support", "Improved performance","Improved Hot Module Replacement"],
      imagePath: "/images/2.jpg",
       src:<Link href="/blog/next2" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 3",
      releaseDate: "August 2017",
      features: ["Dynamic imports", "Prefetching", "Improved client-side routing"],
      imagePath: "/images/3.jpg",
       src:<Link href="/blog/next3" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 4",
      releaseDate: "December 2017",
      features: ["Better error handling", "Improved server-side rendering","React 16 Support"],
      imagePath: "/images/4.jpg",
       src:<Link href="/blog/next4" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 5",
      releaseDate: "February 2018",
      features: ["Webpack 4 support", "Automatic static optimization","Multi-Zone Support"],
      imagePath: "/images/5.jpg", 
      src:<Link href="/blog/next5" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 6",
      releaseDate: "June 2018",
      features: ["Automatic static exports", "Improved support for custom servers","New Link API"],
      imagePath: "/images/6.jpg",
       src:<Link href="/blog/next6" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 7",
      releaseDate: "October 2018",
      features: ["Hooks support", "Automatic prefetching", "Customizable `next.config.js`"],
      imagePath: "/images/7.jpg",
       src:<Link href="/blog/next7" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 8",
      releaseDate: "February 2019",
      features: ["Serverless functions support", "API Routes","Built-In Polyfills"],
      imagePath: "/images/8.jpg",
       src:<Link href="/blog/next8" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 9",
      releaseDate: "July 2019",
      features: ["API routes", "Dynamic routing", "Automatic static optimization"],
      imagePath: "/images/9.jpg",
       src:<Link href="/blog/next9" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 10",
      releaseDate: "October 2020",
      features: ["Image optimization", "Internationalized routing", "Automatic image and font optimization"],
      imagePath: "/images/10.jpg",
       src:<Link href="/blog/next10" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 11",
      releaseDate: "June 2021",
      features: ["Improved development environment", "Conformance", "Improved image component"],
      imagePath: "/images/11.jpg",
       src:<Link href="/blog/next11" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 12",
      releaseDate: "October 2021",
      features: ["Middleware support", "Rust-based compiler", "Edge functions"],
      imagePath: "/images/12.jpg",
       src:<Link href="/blog/next12" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>

    },
    {
      version: "Next.js 13",
      releaseDate: "October 2022",
      features: [ "Server Components", "Nested routing", "New image component"],
      imagePath: "/images/13.jpg",
       src:<Link href="/blog/next13" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 14",
      releaseDate: "October 2023",
      features: ["Stable App Router", "Improved Layouts", "New caching strategies"],
      imagePath: "/images/14.jpg",
       src:<Link href="/blog/next14" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
    },
    {
      version: "Next.js 15",
      releaseDate: "October 2024",
      features: ["React 19 compatibility", "Improved server actions", "Enhanced development speed"],
      imagePath: "/images/15.jpg",
       src:<Link href="/blog/next15" className="text-[15px] text-center font-semibold bg-black border border-slate-300 p-3 rounded-lg text-white">Read More</Link>
 },
  ];
  
  export default nextVersions;