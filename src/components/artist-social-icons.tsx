import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ISocial } from "@/interfaces/artist.interface";

import facebookIcon from "../../public/icons/socials/facebook.svg";
import instagramIcon from "../../public/icons/socials/instagram.svg";
import tiktokIcon from "../../public/icons/socials/tiktok.svg";
import youtubeIcon from "../../public/icons/socials/youtube.svg";
import spotifyIcon from "../../public/icons/socials/spotify.svg";
import twitterIcon from "../../public/icons/socials/twitter.svg";

interface IArtistSocialIconsProps {
  socials: ISocial[];
}

const ArtistSocialIcons = ({ socials }: IArtistSocialIconsProps) => {
  const socialIcons: { [key: string]: StaticImageData } = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    tiktok: tiktokIcon,
    youtube: youtubeIcon,
    spotify: spotifyIcon,
  };
  
  return (
    <div className="w-full flex space-x-5">
      {
        socials.map((social: ISocial, index: number) => {
          const iconSrc = socialIcons[social.name.toLowerCase()];
          
          if (!iconSrc) {
            return (
              <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                <span className="text-white capitalize">{social.name}</span>
              </Link>
            )
          }
          
          return (
            <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
              <Image
                src={iconSrc}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          )
        })
      }
    </div>
  )
}

export default ArtistSocialIcons;