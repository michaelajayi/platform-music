"use client";

import headerLogo from "../../public/header-logo.svg";
import hamburger from "../../public/icons/hamburger.svg";
import hamburgerClose from "../../public/icons/hamburger-close.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

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

  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <nav className="w-full z-20 flex-shrink-0 absolute inset-0 self-start">
      <div className="flex justify-between items-center px-5 lg:px-20 py-5">
        <Link href="/">
          <Image src={headerLogo} alt="header logo" priority />
        </Link>
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
        {isMobile ? (
          <Image
            src={hamburgerClose}
            alt="hamburger close"
            priority
            className="cursor-pointer lg:hidden"
            onClick={() => setIsMobile(!isMobile)}
          />
        ) : (
          <Image
            src={hamburger}
            alt="hamburger"
            priority
            className="cursor-pointer lg:hidden"
            onClick={() => setIsMobile(!isMobile)}
          />
        )}
      </div>
      {/* mobile menu goes here... */}
      <div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Nav;
