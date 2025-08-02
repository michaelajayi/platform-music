"use client";

import { navLinks } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import headerLogo from "../../public/header-logo.svg";
import HamburgerToggle from "./hamburger-toggle";
import MobileMenu from "./mobile-menu";

const Nav = () => {
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  
  useEffect(() => {
    // only run on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    }
    
    // check initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // clean up side effects
    return () => window.removeEventListener('resize', checkMobile);
}, []);

  return (
    <nav className="relative w-full z-0 flex-shrink-0 inset-0 self-start bg-transparent">
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

        {/* hamburger toggle */}
        <HamburgerToggle
          isMobile={isMobile}
          isMobileOpen={isMobileOpen}
          toggleHamburgerMenu={() => setIsMobileOpen(!isMobileOpen)}
        />
      </div>
      {/* mobile menu goes here... */}
      {isMobileOpen && (
        <div className="absolute inset-0">
          <MobileMenu
            navLinks={navLinks}
            isOpen={isMobileOpen}
            closeMenu={() => setIsMobileOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
