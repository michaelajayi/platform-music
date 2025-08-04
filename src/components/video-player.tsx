import { useRef, useState, useImperativeHandle, forwardRef } from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
  videoSrc: string;
  playerConfig?: React.ComponentProps<typeof ReactPlayer>;
};

export type VideoPlayerRef = {
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
};

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ videoSrc, playerConfig }, ref) => {
    const playerRef = useRef<React.ElementRef<typeof ReactPlayer>>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };

    const play = () => {
      setIsPlaying(true);
    };

    const pause = () => {
      setIsPlaying(false);
    };

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      togglePlay,
      play,
      pause,
      isPlaying,
    }));

    return (
      <ReactPlayer
        ref={playerRef}
        src={videoSrc}
        playing={isPlaying}
        controls={false}
        playsInline
        width="100%"
        height="100%"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        {...playerConfig}
      />
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;