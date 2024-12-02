import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex md:w-full sm:w-full w-full h-[60px] pt-4 justify-around mt-4 bg-slate-900'>
        <h1 className='text-white text-lg flex '>Next.JS Version &nbsp;<FaRegCopyright className='mt-1 text-[22px]'/>&nbsp; made by Rabia Sohail</h1>
        <div className='flex gap-3 text-white text-xl'>
<Link href="https://www.facebook.com/parniyasohail098"><FaFacebook /></Link>
<Link href="https://www.linkedin.com/in/rabia-sohail-684740278/"><FaLinkedin /></Link>
<Link href="https://www.youtube.com/@Parniya098"><CiYoutube className='text-2xl' /></Link>
<Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram /></Link>
        </div>
    </div>
  )
}

export default Footer