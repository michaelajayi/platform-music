import { IVideoComponent } from "@/interfaces/video.interface";
import VideoPlayer from "./video-player";

const VideoComponent = ({ video }: { video: IVideoComponent }) => {
  return (
    <div className="w-full flex flex-col space-y-3 md:space-y-5">
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative rounded-none md:rounded-[8px]">
        {/* absolutely position backdrop and play icon */}
        <div className="bg-black/20 flex justify-center items-center absolute inset-0 h-full">
          {/* <Image src={playIcon} alt="play icon" className="cursor-pointer" /> */}
        </div>
        <div className="w-full h-[200px] md:h-[245px]">
          <VideoPlayer videoSrc={video.url} />
        </div>
      </div>
      <p className="text-white text-[18px] md:text-[20px]">{video.title}</p>
    </div>
  );
};

export default VideoComponent;
