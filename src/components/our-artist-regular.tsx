import Image from 'next/image';
import dozyJan from "../../public/images/artists/dozy-jan.svg";
import cossyBrown from "../../public/images/artists/cossy-brown.svg";
import { useState } from 'react';

const OurArtistRegular = () => {
  const [aboutArtistText, setAboutArtistText] = useState(
    "Music is the essence of our existence, a melody that resonates within every heart. At The Sound Haven, we embrace the transformative power of music to ignite creativity and foster connection. Let's embark on this harmonious adventure together!",
  );
  
  return (
    <div className="w-full min-h-screen relative z-20 flex flex-col">
      {/* Title section - fixed height */}
      <div className="w-full py-10 px-5 lg:px-20 flex-shrink-0">
        <h3 className="font-polysans font-light text-white text-[36px] uppercase">
          Our Artists
        </h3>
      </div>

      {/* Centered text block - takes remaining space and centers content */}
      <div className="lg:flex-1 w-full flex justify-center items-center px-5 lg:px-20">
        <div className="w-full max-w-4xl flex justify-center items-center py-10 px-10 lg:p-20 bg-[#0035B3]">
          <div className="flex justify-center items-center w-full lg:max-w-3xl">
            <p className="font-medium text-white text-[16px] lg:text-[20px] uppercase text-start lg:text-center z-30 leading-relaxed">
              {`"${aboutArtistText}"`}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom grid - uncomment when ready to use */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-20 pb-5 z-10 h-aut">
        {/* left artist */}
        <div
          className="relative flex flex-col space-y-3 group"
          onMouseEnter={() =>
            setAboutArtistText(
              "Music is the essence of our existence, a melody that resonates within every heart. At The Sound Haven, we embrace the transformative power of music to ignite creativity and foster connection. Let's embark on this harmonious adventure together!",
            )
          }
        >
          <Image
            src={dozyJan}
            alt="dozy jan"
            className="absolute bottom-45 transition-all opacity-0 translate-y-full duration-800 group-hover:opacity-100 group-hover:translate-y-0 z-0"
          />
          <div className="flex flex-row items-end space-x-5 h-full">
            <p className="font-polysans text-white font-medium lg:text-[212.557px] leading-[0.8] text-[69.854px]">
              01
            </p>
            <div className="flex flex-col space-y-1 pb-2">
              <p className="font-medium text-white text-[48px]">Dozy Jan</p>
              <p className="text-[#C7C7CC] text-[15px] lg:text-[24px]">
                Chisom Kanu
              </p>
            </div>
          </div>
        </div>

        {/* right artist */}
        <div className="relative flex flex-col space-y-3 group" onMouseEnter={() =>
          setAboutArtistText(
            "At The Sound Haven, we embrace the transformative power of music to ignite creativity and foster connection. Let's embark on this harmonious adventure together! Music is the essence of our existence, a melody that resonates within every heart.",
          )
        }>
          <Image
            src={cossyBrown}
            alt="cossy brown"
            className="absolute bottom-45 right-20 transition-all opacity-0 translate-y-full duration-800 group-hover:opacity-100 group-hover:translate-y-0 z-0"
          />
          <div className="flex justify-end items-end space-x-5 h-full">
            <p className="font-polysans text-white font-medium lg:text-[212.557px] leading-[0.8] text-[69.854px]">
              02
            </p>
            <div className="flex flex-col space-y-1 pb-2">
              <p className="font-medium text-white text-[48px]">
                Cossy Brown
              </p>
              <p className="text-[#C7C7CC] text-[15px] lg:text-[24px]">
                Funke Olabode
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurArtistRegular;