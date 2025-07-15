import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <ReactPlayer
      slot="media"
      src={videoSrc}
      controls={false}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default VideoPlayer;
