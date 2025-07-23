import arrowDownRed from "../../public/icons/arrow-down-red.svg";
import scroller from "../../public/images/scroller.svg";
import maze from "../../public/images/maze.svg";
import echoesOfTomorrow from "../../public/images/echoes-of-tomorrow.svg";
import rhythmOfTheNight from "../../public/images/rhythm-of-the-night.svg";
import chasingStars from "../../public/images/chasing-stars.svg";
import vibesOfTheCity from "../../public/images/vibes-of-the-city.svg";
import melodyInMotion from "../../public/images/melody-in-motion.svg";
import play from "../../public/icons/play.svg";
import Image from "next/image";

import shuffle from "../../public/icons/shuffle.svg";
import prev from "../../public/icons/previous.svg";
import next from "../../public/icons/next.svg";
import playCircle from "../../public/icons/play-circle.svg";
import repeatOnce from "../../public/icons/repeat-once.svg";

const PlatformRecords = () => {
  const platformRecords = [
    {
      track: "Echoes of Tomorrow",
      artist: "Ngoebi Binebai",
      genre: "Rap Beats",
      albumArt: echoesOfTomorrow,
    },
    {
      track: "Rhythm of the Night",
      artist: "Adeola Iwalewa",
      genre: "Urban Rhythms",
      albumArt: rhythmOfTheNight,
    },
    {
      track: "Chasing Stars",
      artist: "Ugochukwu Anyaoku",
      genre: "Street Vibes",
      albumArt: chasingStars,
    },
    {
      track: "Vibes of the City",
      artist: "Nengi Amachree",
      genre: "Flow and Groove",
      albumArt: vibesOfTheCity,
    },
    {
      track: "Melody in Motion",
      artist: "Rashida Danjuma",
      genre: "Rhythmic Poetry",
      albumArt: melodyInMotion,
    },
  ];

  const mediaControls = [
    {
      action: "shuffle",
      icon: shuffle,
    },
    {
      action: "prev",
      icon: prev,
    },
    {
      action: "playcircle",
      icon: playCircle,
    },
    {
      action: "next",
      icon: next,
    },
    {
      action: "repeatonce",
      icon: repeatOnce,
    },
  ];

  return (
    <div className="w-screen h-auto flex justify-center items-center p-5 lg:p-20 bg-black relative py-20">
      {/* absolutely positioned elements */}
      <Image
        src={maze}
        alt="Maze"
        className="absolute inset-0 w-full object-cover z-0"
      />
      {/* scroller */}
      <div className="absolute top-5 lg:top-20 right-5 lg:right-10 grid place-content-center z-0">
        <Image
          src={scroller}
          alt="Scroller"
          className="w-full h-full pointer-events-none select-none animate-slow-spin"
        />
        <Image
          src={arrowDownRed}
          alt="Arrow Down Red"
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 top-1/2 pointer-events-none select-none"
        />
      </div>

      <div className="w-full space-y-5 lg:space-y-20 z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-20">
          <p className="text-[48px] lg:text-[96px] leading-[50px] lg:leading-[125px] text-white col-span-4 w-full">
            Let&apos;s Explore
          </p>
          <p className="text-[48px] lg:text-[96px] leading-[48px] lg:leading-[125px] text-white col-span-8 w-full self-end">
            Our Catalog
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-20">
          {/* media controls */}
          <div className="flex space-x-4 justify-center items-center rounded-[8px] px-5 py-3 border-[2.59px] border-white/7  backdrop-blur-[25.87px] bg-gradient-to-b from-black/20 from-0% via-black/14 via-69% to-black/20 to-100% [box-shadow:inset_0_77.6px_155.2px_0_rgba(255,255,255,0.15)] col-span-4 lg:self-end row-start-2 col-start-2 lg:col-start-1 lg:row-start-1 relative">
            {mediaControls.map((control, index) => (
              <Image
                src={control.icon}
                alt={control.action}
                key={index}
                className="cursor-pointer"
              />
            ))}
          </div>
          <table className="table-auto lg:table-fixed text-white text-left border-collapse mt-10 lg:mt-0 col-span-8">
            <thead className="">
              <tr className="">
                <th className="border-b-[.5px] border-[#555] pb-2"></th>
                <th className="border-b-[.5px] border-[#555] pb-2"></th>
                <th className="border-b-[.5px] border-[#555] pb-2 font-medium text-[16px]">
                  Track
                </th>
                <th className="border-b-[.5px] border-[#555] pb-2 font-medium text-[16px]">
                  Artist
                </th>
                <th className="border-b-[.5px] border-[#555] pb-2 font-medium text-[16px]">
                  Genre
                </th>
              </tr>
            </thead>
            <tbody className="text-white lg:text-dark-gray text-[12px] lg:text-[20px]">
              {platformRecords.map((record, index) => (
                <tr className="" key={index}>
                  <td className="border-b-[.5px] border-dark-gray">
                    <Image
                      src={play}
                      alt="play icon"
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="border-b-[.5px] border-dark-gray py-3">
                    <Image
                      src={record.albumArt}
                      alt="table image"
                      className="scale-[.65] lg:scale-100"
                    />
                  </td>
                  <td className="border-b-[.5px]  border-dark-gray">
                    {record.track}
                  </td>
                  <td className="border-b-[.5px]  border-dark-gray">
                    {record.artist}
                  </td>
                  <td className="border-b-[.5px]  border-dark-gray">
                    {record.genre}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlatformRecords;
