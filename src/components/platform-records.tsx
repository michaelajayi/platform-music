"use client";

import { audioTracks } from "@/app/utils/constants";
import { ITrack } from "@/interfaces/media.interface";
import Image from "next/image";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import arrowDownRed from "../../public/icons/arrow-down-red.svg";
import maze from "../../public/images/maze.svg";
import scroller from "../../public/images/scroller.svg";

import { useEffect, useRef, useState } from "react";
import MediaControls from "./media-controls";

const PlatformRecords = () => {
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [shuffledIndexes, setShuffledIndexes] = useState<number[]>([]);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');

  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize shuffled indexes
  useEffect(() => {
    setShuffledIndexes(
      [...Array(audioTracks.length).keys()].sort(() => Math.random() - 0.5),
    );
  }, []);

  const playTrack = (track: ITrack) => {
    // If clicking the same track that's currently playing, toggle pause/play
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    }
    // If clicking a different track, play that track
    else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 0);
    }
  };

  const togglePlay = () => {
    if (!currentTrack && audioTracks.length > 0) {
      playTrack(audioTracks[0]);
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (!currentTrack) return;
  
    // If repeat one is on, just restart the current track
    if (repeatMode === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }
  
    const currentIndex = audioTracks.findIndex(
      (track) => track.id === currentTrack.id,
    );
    let prevIndex;
  
    if (isShuffle) {
      const currentShuffledIndex = shuffledIndexes.indexOf(currentIndex);
      prevIndex =
        shuffledIndexes[
          (currentShuffledIndex - 1 + shuffledIndexes.length) %
            shuffledIndexes.length
        ];
    } else {
      prevIndex = (currentIndex - 1 + audioTracks.length) % audioTracks.length;
    }
  
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    playTrack(audioTracks[prevIndex]);
  };
  
  const handleNext = () => {
    if (!currentTrack && audioTracks.length > 0) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      playTrack(audioTracks[0]);
      return;
    }
    if (!currentTrack) return;
  
    // If repeat one is on, just restart the current track
    if (repeatMode === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }
  
    const currentIndex = audioTracks.findIndex(
      (track) => track.id === currentTrack.id,
    );
    let nextIndex;
  
    if (isShuffle) {
      const currentShuffledIndex = shuffledIndexes.indexOf(currentIndex);
      nextIndex =
        shuffledIndexes[(currentShuffledIndex + 1) % shuffledIndexes.length];
    } else {
      nextIndex = (currentIndex + 1) % audioTracks.length;
    }
  
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    playTrack(audioTracks[nextIndex]);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
    if (!isShuffle) {
      // Create new shuffled indexes excluding current track
      const currentIndex = currentTrack
        ? audioTracks.findIndex((track) => track.id === currentTrack.id)
        : -1;
      const newShuffled = [...Array(audioTracks.length).keys()]
        .filter((i) => i !== currentIndex)
        .sort(() => Math.random() - 0.5);
      if (currentIndex >= 0) newShuffled.unshift(currentIndex);
      setShuffledIndexes(newShuffled);
    }
  };

  const toggleRepeat = () => {
    setRepeatMode(prev => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  };

  return (
    <div className="w-screen h-auto flex justify-center items-center p-5 lg:p-20 bg-black relative py-20 z-30">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={currentTrack?.audioSrc} />

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
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-10">
          <p className="text-[36px] lg:text-[96px] leading-[50px] lg:leading-[125px] text-white col-span-4 w-full">
            Let&apos;s <span className="block">Explore</span>
          </p>
          <p className="text-[36px] lg:text-[96px] leading-[48px] lg:leading-[125px] text-white col-span-8 w-full self-end">
            Our Catalog
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
          {/* media controls */}
          <div className="flex flex-col space-y-4 col-span-5 lg:col-span-3 lg:self-end row-start-2 lg:col-start-1 lg:row-start-1 relative mx-auto lg:mx-0">
            <MediaControls
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isShuffle={isShuffle}
              toggleShuffle={toggleShuffle}
              toggleRepeat={toggleRepeat}
              repeatMode={repeatMode}
            />
          </div>
          <table className="table-auto lg:table-fixed text-white text-left border-collapse mt-10 lg:mt-0 col-span-8 lg:col-start-5">
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
              {audioTracks.map((record, index) => (
                <tr className="" key={index}>
                  {/* play/pause */}
                  <td
                    className="border-b-[.5px] border-dark-gray"
                    onClick={() => playTrack(record)}
                  >
                    {currentTrack?.id === record.id && isPlaying ? (
                      <FaCirclePause
                        className="cursor-pointer text-white hover:text-gray-400"
                        size={30}
                      />
                    ) : (
                      <FaCirclePlay
                        className={`cursor-pointer ${
                          currentTrack?.id === record.id
                            ? "text-white hover:text-gray-400"
                            : "text-[#999] hover:text-[#555]"
                        }`}
                        size={30}
                      />
                    )}
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
