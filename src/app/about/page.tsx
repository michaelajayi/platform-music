import Image from "next/image";
import maze from "../../../public/images/contact-us-maze.svg";

import Artists from "@/components/artists";
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
          <Artists />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
