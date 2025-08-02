"use client";

import { artists } from "@/app/data/artists";
import Image from "next/image";
import Scroller from "./scroller";
import { useState } from "react";

const Artists = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTap = (index: number) => {
    // Toggle scroller visibility on mobile
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
      {artists.map((artist, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="relative overflow-hidden group aspect-[4/5]"
          >
            {/* Clickable Image Area */}
            <div 
              // href={`/about/artists/${artist.slug}`}
              className="block h-full w-full relative"
              onClick={(e) => {
                // If scroller is visible, allow normal navigation
                if (!isActive) {
                  e.preventDefault();
                  handleTap(index);
                }
              }}
            >
              {artist?.coverPhoto && (
                <Image
                  src={artist.coverPhoto}
                  alt={artist.name}
                  fill
                  className={`object-cover transition-all duration-800 ${
                    isActive ? "grayscale-0" : "grayscale"
                  } ease-out md:group-hover:grayscale-0`}
                  priority={index < 3}
                />
              )}
              <div className={`absolute inset-0 transition-all ${
                isActive ? "bg-black/30" : "bg-black/20"
              } duration-800 ease-out md:group-hover:bg-black/20`}>
                <p className="text-white font-medium text-[18px] lg:text-[24px] leading-[125%] absolute bottom-5 lg:bottom-10 left-5">
                  {artist.name}
                </p>
              </div>
            </div>

            {/* Scroller */}
            <div className={`absolute inset-0 flex justify-center items-center transition-all duration-800 ease-out ${
              isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } md:translate-y-full md:group-hover:translate-y-0 md:group-hover:opacity-100 scale-[.85] lg:scale-[1]`}>
              <div
                // href={`/about/artists/${artist.slug}`}
                className="h-full w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Scroller url={`about/artists/${artist.slug}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Artists;