import { StaticImageData } from "next/image";

export interface IVideoComponent {
  banner: string;
  title: string;
  url: string
};

export interface ITrack {
  track: string;
  artist: string;
  genre: string;
  albumArt: StaticImageData;
  audioSrc: string;
}