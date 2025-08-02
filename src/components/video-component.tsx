import { IVideoComponent } from "@/interfaces/media.interface";
import VideoPlayer from "./video-player";

const VideoComponent = ({ video }: { video: IVideoComponent }) => {
  return (
    <div className="w-full flex flex-col space-y-3 md:space-y-5">
      <div className="relative pt-[56.25%] w-full">  {/* 16:9 aspect ratio */}
        <div className="absolute inset-0 w-full h-full flex justify-center items-center overflow-hidden border border-[#D9D9D9]">
          <VideoPlayer videoSrc={video.url} />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
        </div>
      </div>
      <p className="text-white text-[18px] md:text-[20px]">{video.title}</p>
    </div>
  );
};

export default VideoComponent;
