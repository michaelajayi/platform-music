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
    <div className="w-screen h-auto flex justify-center items-center p-5 md:p-20 bg-black bg-opacity-[10%] relative">
      {/* absolutely positioned elements */}
      <Image
        src={maze}
        alt="Maze"
        className="absolute inset-0 w-full object-cover z-5"
      />
      {/* scroller */}
      <div className="absolute top-5 md:top-10 right-5 md:right-10 grid place-content-center z-5">
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
      <div className="grid grid-cols-12 gap-5 md:gap-20 z-10">
        {/* left side */}
        <div className="col-span-12 md:col-span-4 w-full flex flex-col justify-between">
          <p className="text-[48px] md:text-[96px] leading-[50px] md:leading-[125px] text-white">
            Let&apos;s Explore
          </p>

          {/* media controls */}
          <div
            className="hidden md:flex space-x-4 justify-center items-center rounded-[8px] px-5 py-3 border-[2.59px] border-white/7  backdrop-blur-[25.87px] bg-gradient-to-b from-black/20 from-0% via-black/14 via-69% to-black/20 to-100% [box-shadow:inset_0_77.6px_155.2px_0_rgba(255,255,255,0.15)]"
          >
            {mediaControls.map((control, index) => (
              <Image
                src={control.icon}
                alt={control.action}
                key={index}
                className="cursor-pointer"
              />
            ))}
          </div>

          {/* <p className="text-white">Hi there...</p> */}
        </div>
        {/* right side */}
        <div className="col-span-12 md:col-span-8 w-full flex flex-col space-y-5 md:space-y-20 overflow-auto">
          <p className="text-[48px] md:text-[96px] leading-[48px] md:leading-[125px] text-white">
            Platform{" "}
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Records
          </p>
          {/* table */}
          <table className="table-auto md:table-fixed text-white text-left border-collapse">
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
                <th className="hidden md:block border-b-[.5px] border-[#555] pb-2 font-medium text-[16px]">
                  Genre
                </th>
              </tr>
            </thead>
            <tbody className="text-white md:text-dark-gray text-[12px] md:text-[20px]">
              {platformRecords.map((record, index) => (
                <tr className="" key={index}>
                  <td className="border-b-[.5px] border-dark-gray">
                    <Image
                      src={play}
                      alt="play icon"
                      className="cursor-pointer"
                    />
                    {/* </div> */}
                  </td>
                  <td className="border-b-[.5px] border-dark-gray py-3">
                    <Image src={record.albumArt} alt="table image" className="" />
                  </td>
                  <td className="border-b-[.5px]  border-dark-gray">
                    {record.track}
                  </td>
                  <td className="border-b-[.5px]  border-dark-gray">
                    {record.artist}
                  </td>
                  <td className="hidden md:block border-b-[.5px]  border-dark-gray">
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
