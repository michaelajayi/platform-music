import ReactPlayer from "react-player";

const BackgroundVideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <ReactPlayer
      slot="media"
      src={videoSrc}
      controls={false}  
      muted={true}
      loop={true}
      playsInline={true}
      playing={true}
      style={{
        width: "100%",
        height: "100%",
      }}
      className="absolute inset-0 object-cover"
    />
  );
};

export default BackgroundVideoPlayer;
