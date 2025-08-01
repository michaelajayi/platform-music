import Image from "next/image";
import maze from "../../../public/images/contact-us-maze.svg";
import { artists } from "../data/artists";

import Link from "next/link";
import { missionStatement } from "../utils/constants";

const AboutUs = () => {

  return (
    <section className="relative w-full min-h-screen  bg-black py-10">
      <div className="absolute inset-0 z-0">
        <Image src={maze} alt="Maze" fill objectFit="cover" />
      </div>
      <div className="relative z-10 flex flex-col space-y-12 lg:space-y-20 px-5 lg:px-20  h-full flex-grow py-[6rem] mt-5 lg:mt-10">
        <div className="w-full flex flex-col space-y-5">
          <h3 className="text-white uppercase font-polysans font-light text-[36px] lg:text-[64px]">
            Our Mission
          </h3>
          <p className="text-[#999] text-[14px] lg:text-[20px] font-medium uppercase lg:leading-[150%] max-w-5xl leading-loose">
           {missionStatement}
          </p>
        </div>
        <div className="w-full flex flex-col space-y-5 z-20">
          <h3 className="text-white uppercase font-polysans font-light text-[36px] lg:text-[64px]">
            Our Artists
          </h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
            {artists.map((artist, index) => (
              <div key={index} className="relative overflow-hidden group">
                <Link href={`/about/artists/${artist.slug}`}>
                  <Image
                    src={artist.coverPhoto}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-[1500ms] ease-out grayscale group-hover:grayscale-0 focus:grayscale-0"
                  />
                  <div className="inset-0 bg-black/20 pointer-events-none transition-all duration-[1500ms] ease-out group-hover:bg-black/10">
                    <p className="text-white font-medium text-[18px] lg:text-[24px] leading-[125%] absolute bottom-5 lg:bottom-10 left-5">
                      {artist.name}
                    </p>
                  </div>
                </Link>
                {/* <div className="w-full h-[5px] bg-red-600" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
