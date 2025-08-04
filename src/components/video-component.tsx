import { useRef } from "react";
import { IVideoComponent } from "@/interfaces/media.interface";
import VideoPlayer, { VideoPlayerRef } from "./video-player";
import playIcon from "../../public/icons/play-icon.svg";
import Image from "next/image";

const VideoComponent = ({ video }: { video: IVideoComponent }) => {
  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  const handlePlayPause = () => {
    videoPlayerRef.current?.togglePlay();
  };

  return (
    <div className="w-full flex flex-col space-y-3 md:space-y-5">
      <div className="relative pt-[56.25%] w-full">
        <div className="absolute inset-0 w-full h-full flex justify-center items-center overflow-hidden border border-[#D9D9D9]">
          <VideoPlayer 
            ref={videoPlayerRef}
            videoSrc={video.url} 
          />
          <div 
            className="absolute inset-0 bg-black/20 z-10 flex justify-center items-center cursor-pointer" 
            onClick={handlePlayPause}
          >
            <Image src={playIcon} alt="play icon" />
          </div>
        </div>
      </div>
      <p className="text-white text-[18px] md:text-[20px]">{video.title}</p>
    </div>
  );
};

export default VideoComponent;