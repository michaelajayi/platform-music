import Image from "next/image";
import amazonMusic from "../../public/icons/amazon-music.svg";
import appleMusic from "../../public/icons/apple-music.svg";
import arrowRightWhite from "../../public/icons/arrow-right-white.svg";
import deezer from "../../public/icons/deezer.svg";
import pandora from "../../public/icons/pandora.svg";
import soundcloud from "../../public/icons/soundcloud.svg";
import spotify from "../../public/icons/spotify.svg";
import tidal from "../../public/icons/tidal.svg";
import youtubeMusic from "../../public/icons/youtube-music.svg";
import youtubePlayIcon from "../../public/icons/youtube-play-icon-white.svg";
import maze from "../../public/images/maze.svg";
import MarqueeComponent from "./marquee-component";
import VideoGrid from "./video-grid";

const MediaGallery = () => {
  const streamingPlatforms = [
    {
      title: "Youtube",
      icon: youtubeMusic,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Apple Music",
      icon: appleMusic,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Spotify",
      icon: spotify,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Soundcloud",
      icon: soundcloud,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Tidal",
      icon: tidal,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Pandora",
      icon: pandora,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Deezer",
      icon: deezer,
      link: "https://www.youtube.com/music",
    },
    {
      title: "Amazon Music",
      icon: amazonMusic,
      link: "https://www.youtube.com/music",
    },
  ];
  return (
    <div className="w-screen h-auto flex justify-center items-center bg-black bg-opacity-[10%] relative px-5 md:px-20 pt-10 lg:pt-20 pb-5 z-30">
      {/* absolutely position element */}
      <Image
        src={maze}
        alt="Maze"
        className="absolute inset-0 w-full h-full object-cover z-5 pointer-events-none"
      />

      <div className="w-full flex flex-col space-y-10 z-10">
        <div className="w-full flex flex-col space-y-20">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-0">
            <h4 className="text-white text-[34px] md:text-[96px] leading-[53px] md:leading-[125px]">
              The Platform Music TV
            </h4>
            {/* youtube icon */}
            <div className="flex items-center">
              <div className="flex space-x-2 justify-center items-center p-3 bg-[#E62117] rounded-tl-[5px] rounded-bl-[5px]">
                <Image src={youtubePlayIcon} alt="youtube play icon" />
                <p className="text-white text-[16px] leading-[12.231px] text-center">
                  Youtube
                </p>
              </div>
              <div className="flex justify-center items-center p-3 bg-white rounded-tr-[5px] rounded-br-[5px]">
                <p className="uppercase font-medium text-dark-gray text-[14px] leading-[12.231px] text-center">
                  2m
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-10 justify-center items-center">
          <VideoGrid />
          <button className="flex space-x-2 items-center px-5 py-2 bg-[#058AE3] rounded-[8px] cursor-pointer">
            <p className="text-white text-[20px]">See More</p>
            <Image src={arrowRightWhite} alt="arrow right white" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-10 lg:py-20">
          <div className="lg:col-span-4">
            <p className="font-medium text-[16px] md:text-[20px] leading-[30px] uppercase text-dark-gray col-span-12 md:col-span-4 lg: pr-10">
              The Platform Music: Where Every Note Tells a Story, and Every Beat
              Inspires a Movement!
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-7">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
              {streamingPlatforms.map((platform, index) => (
                <a
                  href={platform.link}
                  className="flex space-x-3 items-center"
                  key={index}
                >
                  <Image src={platform.icon} alt={platform.title} />
                      <p className="font-medium text-white text-[14px] md:text-[20px] leading-normal md:leading-[30px] uppercase">
                    {platform.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-5 md:mt-10">
          <MarqueeComponent text="platform music empowering the new age of sounds" />
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
