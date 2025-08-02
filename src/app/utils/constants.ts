import { INavLink } from "@/interfaces/ui.interface";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import tiktok from "../../../public/images/tiktok.svg";
import youtube from "../../../public/images/youtube.svg";
import { Variants } from "framer-motion";

import echoesOfTomorrow from "../../../public/images/echoes-of-tomorrow.svg";
import rhythmOfTheNight from "../../../public/images/rhythm-of-the-night.svg";
import chasingStars from "../../../public/images/chasing-stars.svg";
import vibesOfTheCity from "../../../public/images/vibes-of-the-city.svg";
import melodyInMotion from "../../../public/images/melody-in-motion.svg";
import shuffle from "../../../public/icons/shuffle.svg";
import prev from "../../../public/icons/previous.svg";
import next from "../../../public/icons/next.svg";
import playCircle from "../../../public/icons/play-circle.svg";
import repeatOnce from "../../../public/icons/repeat-once.svg";

import img_post_01 from "../../../public/images/blog/posts/001.jpg";
import img_post_02 from "../../../public/images/blog/posts/002.jpg";
import img_post_03 from "../../../public/images/blog/posts/003.jpg";
import { ITrack } from "@/interfaces/media.interface";

export const platformRecords: ITrack[] = [
  {
    track: "Echoes of Tomorrow",
    artist: "Ngoebi Binebai",
    genre: "Rap Beats",
    albumArt: echoesOfTomorrow,
    audioSrc: "/audio/audio.mp3",
  },
  {
    track: "Rhythm of the Night",
    artist: "Adeola Iwalewa",
    genre: "Urban Rhythms",
    albumArt: rhythmOfTheNight,
    audioSrc: "/audio/audio.mp3",
  },
  {
    track: "Chasing Stars",
    artist: "Ugochukwu Anyaoku",
    genre: "Street Vibes",
    albumArt: chasingStars,
    audioSrc: "/audio/audio.mp3",
  },
  {
    track: "Vibes of the City",
    artist: "Nengi Amachree",
    genre: "Flow and Groove",
    albumArt: vibesOfTheCity,
    audioSrc: "/audio/audio.mp3",
  },
  {
    track: "Melody in Motion",
    artist: "Rashida Danjuma",
    genre: "Rhythmic Poetry",
    albumArt: melodyInMotion,
    audioSrc: "/audio/audio.mp3",
  },
];

export const mediaControls = [
  {
    action: "shuffle",
    icon: shuffle,
  },
  {
    action: "prev",
    icon: prev,
  },
  {
    action: "playcircle",
    icon: playCircle,
  },
  {
    action: "next",
    icon: next,
  },
  {
    action: "repeatonce",
    icon: repeatOnce,
  },
];

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

export const blogSwiperBreakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 3.2,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 3.2,
    spaceBetween: 40,
  },
};

export const posts = [
  {
    id: 1,
    title: "Exploring the Wonders of the Digital Frontier",
    image: img_post_01,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Exploring the Wonders of the Digital Frontier",
    image: img_post_02,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Exploring the Wonders of the Digital Frontier",
    image: img_post_03,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
    title: "Exploring the Wonders of the Digital Frontier",
    image: img_post_01,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Exploring the Wonders of the Digital Frontier",
    image: img_post_02,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
