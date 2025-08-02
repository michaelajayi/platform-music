import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
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
      )}
    </div>
  );
};

export default VideoPlayer;
