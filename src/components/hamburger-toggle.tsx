"use client";

import Image from "next/image";
import hamburgerClose from "../../public/icons/hamburger-close.svg";
import hamburger from "../../public/icons/hamburger.svg";

interface IHamburgerToggleProps {
  isMobile: boolean;
  isMobileOpen: boolean;
  toggleHamburgerMenu: () => void;
}

const HamburgerToggle = ({
  isMobile,
  isMobileOpen,
  toggleHamburgerMenu,
}: IHamburgerToggleProps) => {
  // return null during SSR to prevent hydration mismatch
  if (typeof window === 'undefined') return null;
  
  if (!isMobile) return null;

  return (
    <button onClick={toggleHamburgerMenu}>
      <Image
        src={isMobileOpen ? hamburgerClose : hamburger}
        alt={isMobileOpen ? "Close menu" : "Open menu"}
        width={24}
        height={24}
        priority
      />
    </button>
  );
};

export default HamburgerToggle;
