import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMarkEmailRead, MdContactPhone } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      label: 'About',
      href: '/#about',
    },
    {
      label: 'Skill sets',
      href: '#experience',
    },
    {
      label: 'Experiences',
      href: '#projects',
    },
    {
      label: 'Certifications',
      href: '#certification',
    },
    {
      label: 'Contact me',
      href: '#contact',
    },
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    // Set the initial active item based on the current URL
    const currentPath = window.location.pathname + window.location.hash;
    const initialActiveItem = navItems.findIndex((item) => item.href === currentPath);
    setActiveItem(initialActiveItem !== -1 ? initialActiveItem : null);
  }, []);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Image
          src="/images/New Bitmap Image.jpg"
          alt="avatar"
          width="150"
          height="150"
          className="border-4 border-black border-slate-500 drop-shadow-xl shadow-black rounded-full mx-3 mt-8"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/"></Link>
        </h1>
        <h1 className="mt-3 text-lg tracking-tight text-slate-200 sm:text-3xl font-serif font-black">
        Full Stack Developer<br></br></h1>
          <h4 className="mt-3 font-medium tracking-tight text-slate-200 ">
         (React, Next.js, Node.js, Threejs, React Native)
        </h4>
        <p className="mt-4 max-w-xs leading-relaxed text-justify">
          I build accessible, inclusive products and digital experiences for the web.
        </p>
        <p className="max-w-xs leading-relaxed text-justify">
          I enjoy taking on new challenges and collaborating with other developers to create
          innovative and impactful products that solve real-world problems.
        </p>
      </div>
      <ul className="mt-12 w-max">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`group flex items-center py-3 cursor-pointer ${
                activeItem === index ? 'active' : ''
              }`}
              onClick={() => handleItemClick(index)}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all ${
                  activeItem === index
                    ? 'w-16 bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 '
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                } motion-reduce:transition-none`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeItem === index
                    ? 'text-slate-200 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                    : 'group-hover:text-slate-200 group-focus-visible:text-slate-200'
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="ml-2 mt-8 flex items-center">
        <Link href="https://t.me/applepie0429" className="mr-10 text-2xl">
          <FaTelegram />
        </Link>
        <Link href="applepie042900@gmail.com" className="mr-10 text-2xl">
          <MdOutlineMarkEmailRead />
        </Link>
        <Link href="(86) 18692250763" className="mr-10 text-2xl">
          <MdContactPhone />
        </Link>
        <Link href="wechat: 18692250763" className="mr-10 text-2xl">
          <IoLogoWechat />
        </Link>
      </div>
    </div>
  );
}
