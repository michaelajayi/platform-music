import { INavLink } from "@/interfaces/ui.interface";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import tiktok from "../../../public/images/tiktok.svg";
import youtube from "../../../public/images/youtube.svg";
import { Variants } from "framer-motion";

export const socialLinks = [
  {
    item: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/ThePlatformMusic",
  },
  {
    item: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/ThePlatformMusic",
  },
  {
    item: "tiktok",
    icon: tiktok,
    link: "https://www.tiktok.com/@ThePlatformMusic",
  },
  {
    item: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/@ThePlatformMusic",
  },
];

export const navLinks: INavLink[] = [
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

export const missionStatement =
  "Our mission is to glorify God by producing and promoting spirit-filled gospel music that uplifts hearts, transforms lives and spreads the message of Christ to the world. We are committed to cultivating and nurturing a creative and Christ-centered environment where Music Ministers, Creators and Team Members are empowered, valued, respected and equitably supported. Through excellence, professionalism, integrity and a deep sense of purpose, we strive to honour every God-given gift and foster a community built on faith, trust, fairness and fellowship.";

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const menuVariants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      ease: "easeOut",
      duration: 0.4,
    },
  }),
};

export const swiperBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};
