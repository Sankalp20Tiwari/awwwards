import React from 'react'
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center
        justify-between gap-4 px-4 md:flex-row'>
            <p className='text-sm text-center md:text-left'>
                &copy; Nova 2025. All rights reserved
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {socialLinks.map((link, index) => (
                    <a 
                        href={link.href} 
                        key={index} 
                        target='_blank'
                        rel='noreferrer noopener'
                        className='text-black transition-colors duration-500
                        ease-in-out hover:text-white'
                        >
                        {link.icon}
                    </a>
                ))}
            </div>
            <a href="#privacy-policy"
                className='text-sm text-center md:text-right hover:underline'
            >
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer
