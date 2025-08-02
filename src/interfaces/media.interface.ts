import { StaticImageData } from "next/image";

export interface IVideoComponent {
  banner: string;
  title: string;
  url: string
};

export interface IMediaControl { 
  isPlaying: boolean;
  togglePlay: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  isShuffle: boolean;
  toggleShuffle: () => void;
  repeatMode: 'off' | 'all' | 'one';
  toggleRepeat: () => void;
}

export interface ITrack {
  id: number;
  track: string;
  artist: string;
  genre: string;
  albumArt: StaticImageData;
  audioSrc: string;
}