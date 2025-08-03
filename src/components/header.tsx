import Image from "next/image";
import headerScroller from "../../public/images/header-scroller.svg";
import arrowDownWhite from "../../public/icons/arrow-down-white.svg";
import BackgroundVideoPlayer from "./background-video-player";
import { headerMissionPreview, missionStatement } from "@/app/utils/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-screen overflow-hidden flex flex-col z-10">
      {/* absolute positioned elements */}
      <div className="absolute inset-0 z-10">
        <BackgroundVideoPlayer videoSrc="/videos/header.mp4" />

        {/* scroller */}
        <div className="absolute right-5 lg:right-10 bottom-5 lg:bottom-10 grid place-content-center bg-tomato-red rounded-full z-20">
          <Image
            src={headerScroller}
            alt="header scroller"
            priority
            className="w-full h-full pointer-events-none select-none animate-slow-spin z-5 scale-[.95]"
          />
          <Image
            src={arrowDownWhite}
            alt="Arrow Down Red"
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 top-1/2 pointer-events-none select-none z-5"
          />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-[1px] [-webkit-backdrop-filter:blur(10px)]"></div>
      </div>

      {/* hero content goes here... */}
      <div className="relative z-10 flex-grow grid lg:grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-[1fr_auto] place-content-center space-y-20 px-5 lg:px-20 py-20 h-full">
        <div className="lg:row-start-1 lg:col-start-1 lg:self-start lg:mt-[10rem] w-full max-w-[30rem] mx-auto lg:mx-0">
          <p className="text-white lg:text-base text-[12px]">
            {headerMissionPreview}
          </p>
        </div>
        <div className="lg:row-start-2 lg:col-start-2 lg:self-end lg:mb-20 w-full max-w-2xl">
          <p className="text-white lg:text-base lg:cols-start-2 text-[12px] mx-auto lg:mx-0">
            {missionStatement}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
