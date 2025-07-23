import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <ReactPlayer
      slot="media"
      src={videoSrc}
      controls={false}
      playing={false}
      playsInline={true}
      style={{  
        width: "100%",
        height: "100%",
      }}
      config={{
        youtube: {
          color: "white",
        },
      }}
      className="relative z-10"
    />
  );
};

export default VideoPlayer;
