import Image from "next/image";
import logo from "../../public/images/logo.svg";
import email from "../../public/icons/email.svg";

import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import tiktok from "../../public/images/tiktok.svg";
import youtube from "../../public/images/youtube.svg";

const Footer = () => {
  const socialLinks = [
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
  return (
    <footer className="bg-black flex justify-center items-center w-full relative overflow-y-hidden">
      <div className="w-full justify-center items-center flex flex-col">
        <div className="flex flex-col space-y-8 justify-center items-center w-full h-auto py-5 md:py-10 md:mb-[150px]">
          <Image
            src={logo}
            alt="Platform Music Logo"
            width={100}
            height={100}
            className="pointer-events-none select-none mx-auto"
          />
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
          <div className="flex space-x-5 md:space-x-10 items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-tomato-red rounded-full aspect-square p-1 md:p-5"
              >
                <Image src={social.icon} alt={social.item} className="scale-[.65] md:scale-[1]" />
              </a>
            ))}
          </div>
          <p className="text-dark-gray text-[16px] md:text-[20px] text-center">
            &copy; {new Date().getFullYear()} ThePlatformmusic Ltd.
          </p>
        </div>
        <div className="absolute -bottom-12 w-full flex justify-center items-center">
          <h3 className="text-white/10 uppercase text-[205.35px] leading-[205.35px] font-impact pointer-events-none select-none hidden md:block">
            Platform Music
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
