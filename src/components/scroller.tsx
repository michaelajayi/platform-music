import Image from "next/image";
import learnMoreCurvedText from "../../public/images/learn-more-curved-text.svg";
import arrowDownWhite from "../../public/icons/arrow-down-white-scroller.svg";

const Scroller = () => {
  return (
    <div className="grid place-content-center bg-tomato-red rounded-full">
      <Image
        src={learnMoreCurvedText}
        alt="header scroller"
        priority
        className="w-full h-full pointer-events-none select-none animate-slow-spin z-5 scale-[.85]"
      />
      <Image
        src={arrowDownWhite}
        alt="Arrow Down Red"
        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 top-1/2 pointer-events-none select-none z-5"
      />
    </div>
  );
};

export default Scroller;
