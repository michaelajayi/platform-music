import { PiRepeat, PiRepeatOnce } from "react-icons/pi";
import { BsRewindFill, BsFillFastForwardFill } from "react-icons/bs";
import { RxShuffle } from "react-icons/rx";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IMediaControl } from "@/interfaces/media.interface";

const MediaControls = ({
  isPlaying,
  togglePlay,
  handlePrev,
  handleNext,
  isShuffle,
  toggleShuffle,
  repeatMode,
  toggleRepeat,
}: IMediaControl) => {
  return (
    <div className="flex space-x-8 justify-center items-center rounded-[8px] px-8 py-5 border-[2.59px] border-white/20  backdrop-blur-[25.87px] bg-gradient-to-b from-black/20 from-0% via-black/14 via-69% to-black/20 to-100% [box-shadow:inset_0_77.6px_155.2px_0_rgba(255,255,255,0.15)] col-span-5 lg:col-span-3 lg:self-end row-start-2 lg:col-start-1 lg:row-start-1 relative mx-auto lg:mx-0">
      {/* shuffle */}
      <RxShuffle
        className={`cursor-pointer hover:text-[#555] ${isShuffle ? "text-white" : "text-[#999]"}`}
        size={30}
        onClick={toggleShuffle}
      />
      {/* prev */}
      <BsRewindFill
        className="cursor-pointer text-[#999] hover:text-[#555]"
        size={35}
        onClick={handlePrev}
      />
      {/* play/pause */}
      {isPlaying ? (
        <FaCirclePause
          className="cursor-pointer text-white hover:text-gray-400"
          size={60}
          onClick={togglePlay}
        />
      ) : (
        <FaCirclePlay
          className="cursor-pointer text-[#999] hover:text-[#555]"
          size={60}
          onClick={togglePlay}
        />
      )}
      {/* next */}
      <BsFillFastForwardFill
        className="cursor-pointer text-[#999] hover:text-[#555]"
        size={35}
        onClick={handleNext}
      />
      {/* repeat - updated section */}
      {repeatMode === "one" ? (
        <PiRepeatOnce
          className="cursor-pointer text-white hover:text-gray-400"
          size={30}
          onClick={toggleRepeat}
        />
      ) : (
        <PiRepeat
          className={`cursor-pointer hover:text-[#555] ${
            repeatMode === "all" ? "text-white" : "text-[#999]"
          }`}
          size={30}
          onClick={toggleRepeat}
        />
      )}
    </div>
  );
};

export default MediaControls;
