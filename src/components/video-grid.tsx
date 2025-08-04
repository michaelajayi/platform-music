"use client";

import { IVideoComponent } from "@/interfaces/media.interface";

import VideoComponent from "./video-component";
import { videos } from "@/app/utils/constants";
const VideoGrid = () => {

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5  mt-5 md:mt-10">
      {videos.map((video: IVideoComponent, index: number) => (
        <VideoComponent video={video} key={index} />
      ))}
    </div>
  );
};

export default VideoGrid;
