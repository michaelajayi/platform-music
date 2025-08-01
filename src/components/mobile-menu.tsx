"use client";

import { useEffect } from "react";
import { INavLink } from "@/interfaces/ui.interface";
import Image from "next/image";
import email from "../../public/icons/email.svg";
import SocialLinks from "./social-links";
import hamburgerClose from "../../public/icons/hamburger-close.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  backdropVariants,
  linkVariants,
  menuVariants,
} from "@/app/utils/constants";

interface MobileMenuProps {
  navLinks: INavLink[];
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ navLinks, isOpen, closeMenu }: MobileMenuProps) => {

  // lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style = "";
      document.documentElement.style.overflow = "";
    }

    // clean up side effects
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // clean up side effects
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  // mobile menu animation

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 w-screen h-screen bg-black flex justify-center items-center z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
        >
          {/* close button */}
          <motion.div
            className="cursor-pointer absolute right-10 top-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src={hamburgerClose}
              alt="hamburger close"
              priority
              onClick={closeMenu}
            />
          </motion.div>
          {/* menu content */}
          <motion.div
            className="w-full h-full flex flex-col py-10 lg:py-20 justify-between"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* mobile nav links */}
            <div className="flex flex-col justify-center items-center space-y-10 lg:space-y-12 pt-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    className="text-white text-[38px] lg:text-[48px] leading-[30px] lg:leading-[50px] text-center"
                    onClick={closeMenu}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
            {/* mobile nav footer */}
            <motion.div
              className="flex flex-col space-y-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* email */}
              <div className="flex space-x-1 items-center">
                <Image src={email} alt="email" />
                <a
                  href="mailto:theplatformmusicltd@gmail.com"
                  className="text-dark-gray text-[16px] md:text-[20px] text-center"
                >
                  theplatformmusicltd@gmail.com
                </a>
              </div>
              {/* social links */}
              <SocialLinks />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
