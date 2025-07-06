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
    <footer className="bg-black min-h-[400px] py-10 flex flex-col space-y-10 relative">
      <div className="flex flex-col space-y-8 justify-center items-center w-full h-auto pb-[150px] z-10">
        <Image src={logo} alt="Platform Music Logo" width={100} height={100} className="pointer-events-none select-none mx-auto"/>
        {/* email */}
        <div className="flex space-x-1 items-center">
          <Image src={email} alt="email" />
          <a
            href="mailto:theplatformmusicltd@gmail.com"
            className="text-dark-gray text-[20px] leading-[12px] text-center"
          >
            theplatformmusicltd@gmail.com
          </a>
        </div>

        {/* social links */}
        <div className="flex space-x-10 items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-tomato-red rounded-full aspect-square p-5"
            >
              <Image src={social.icon} alt={social.item} />
            </a>
          ))}
        </div>
        <p className="text-dark-gray text-[20px] leading-[12.23px] text-center">
          &copy; {new Date().getFullYear()} ThePlatformmusic Ltd.
        </p>
      </div>
      <div className="grid place-items-center absolute bottom-3 left-0 right-0">
        <h3 className="text-white/10 uppercase text-[205.35px] leading-[90.59px] font-impact pointer-events-none select-none md:text-[clamp(80px,15vw,205px)] z-0">
          Platform Music
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
