'use client';

import { IVideoComponent } from "@/interfaces/video.interface";
import gospelVideo from "../../public/images/video-banners/gosapl-video.svg";
import jireh from "../../public/images/video-banners/jireh.svg";
import worshipWithMe from "../../public/images/video-banners/worship-with-me.svg";
import divineEchoes from "../../public/images/video-banners/divine-echoes.svg";
import heavenlyMelodies from "../../public/images/video-banners/heavenly-melodies.svg";
import sameGod from "../../public/images/video-banners/same-god.svg";
import transcendentWhispers from "../../public/images/video-banners/transcendent-whispers.svg";
import spiritEmbrace from "../../public/images/video-banners/spirit-embrace.svg";
import etherealChords from "../../public/images/video-banners/ethereal-chords.svg";
import VideoComponent from "./video-component";
const VideoGrid = () => {
  const videos: IVideoComponent[] = [
    {
      banner: gospelVideo,
      title: "Mictos - A Place of Glory",
      url: "https://www.youtube.com/watch?v=u0cqjUy7HIU",
    },
    {
      banner: jireh,
      title: "Elysian Harmony - A Journey to the Divine",
      url: "https://www.youtube.com/watch?v=XxWOZs9v3NM",
    },
    {
      banner: worshipWithMe,
      title: "Celestial Voices - A Symphony of Faith",
      url: "https://www.youtube.com/watch?v=wyOYJtdvXRk",
    },
    {
      banner: divineEchoes,
      title: "Divine Echoes - A Celebration of Grace",
      url: "https://www.youtube.com/watch?v=T__INNgTW1M",
    },
    {
      banner: heavenlyMelodies,
      title: "Heavenly Melodies - An Anthem of Hope",
      url: "https://www.youtube.com/watch?v=GhTu53CRtJc",
    },
    {
      banner: sameGod,
      title: "Sacred Rhythms - A Tribute to the Spirit",
      url: "https://www.youtube.com/watch?v=jqJEeD6qCgg",
    },
    {
      banner: transcendentWhispers,
      title: "Transcendent Whispers - An Invocation of Peace",
      url: "https://www.youtube.com/watch?v=kuqIKaiMigM",
    },
    {
      banner: spiritEmbrace,
      title: "Spirit's Embrace - A Voyage of Enlightenment",
      url: "https://www.youtube.com/watch?v=f2gJHnNLGok",
    },
    {
      banner: etherealChords,
      title: "Ethereal Chords - A Harmony for the Soul",
      url: "https://www.youtube.com/watch?v=7ajvlBOq79s",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5  mt-5 md:mt-10">
      {videos.map((video: IVideoComponent, index: number) => (
        <VideoComponent video={video} key={index} />
      ))}
    </div>
  );
};

export default VideoGrid;
