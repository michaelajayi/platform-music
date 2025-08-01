import { artists } from "@/app/data/artists";
import Image from "next/image";
import Link from "next/link";
import Scroller from "./scroller";

const Artists = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
      {artists.map((artist, index) => (
        <div key={index} className="relative overflow-hidden group">
          <div>
            {artist?.coverPhoto && (
              <Image
                src={artist.coverPhoto}
                alt={artist.name}
                className="w-full h-full object-cover transition-all duration-[1500ms] ease-out grayscale group-hover:grayscale-0"
              />
            )}
            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none transition-all duration-[1500ms] ease-out group-hover:bg-black/20">
              <p className="text-white font-medium text-[18px] lg:text-[24px] leading-[125%] absolute bottom-5 lg:bottom-10 left-5">
                {artist.name}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center transition-all translate-y-full group-hover:translate-y-0 duration-[1000ms] ease-out">
            <Link href={`/about/artists/${artist.slug}`}>
              <Scroller />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artists;
