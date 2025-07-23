"use client";

import headerLogo from "../../public/header-logo.svg";
import hamburger from '../../public/icons/hamburger.svg';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="w-full z-20 py-5 flex-shrink-0 absolute inset-0 self-start">
      <div className="flex justify-between items-center px-5 lg:px-20">
        <Image src={headerLogo} alt="header logo" priority />
        <div className="hidden md:flex space-x-5">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              className={`text-white text-[16px] leading-[24px] px-2 ${link.href === pathname ? "border-b-[2px] border-white" : null}`}
              key={index}
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <Image src={hamburger} alt="hamburger" priority className="cursor-pointer lg:hidden" />
        {/* mobile menu goes here... */}
      </div>
    </nav>
  );
};

export default Nav;
