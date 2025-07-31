import Image from "next/image";
import { socialLinks } from "@/app/utils/constants";

const SocialLinks = () => {
  return (
    <div className="flex space-x-5 md:space-x-10 items-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-tomato-red rounded-full aspect-square md:p-5"
        >
          <Image src={social.icon} alt={social.item} className="scale-[.55] md:scale-[1]" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks;