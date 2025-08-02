"use client";

import Image from "next/image";
import ourArtistsMaze from "../../public/images/our-artists-maze.svg";
import OurArtistRegular from "./our-artist-regular";
import OurArtistsSlider from "./our-artists-slider";

const OurArtists = () => {

  return (
    <div className="min-h-screen w-full bg-[#0035B3] relative z-30">
      <div className="absolute inset-0 z-0">
        <Image
          src={ourArtistsMaze}
          alt="Contact Us Maze"
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile view - hidden on desktop */}
      <div className="block md:hidden">
        <OurArtistsSlider />
      </div>

      {/* Desktop view - hidden on mobile*/}
      <div className="hidden md:block">
        <OurArtistRegular />
      </div>
    </div>
  );
};

export default OurArtists;
