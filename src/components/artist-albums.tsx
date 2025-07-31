import { IArtistAlbum } from "@/interfaces/artist.interface";
import Divider from "./divider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArtistAlbum from "./artist-album";
import { swiperBreakpoints } from "@/app/utils/constants";

interface IArtistAlbumProps {
  albums: IArtistAlbum[];
}

const ArtistAlbums = ({ albums }: IArtistAlbumProps) => {
  return (
    <div className="w-full z-20">
      <Divider />
      <div className="w-full px-5 lg:px-20 py-10 flex flex-col space-y-5">
        <h3 className="font-polysans font-light text-white uppercase text-[40px]">
          Music
        </h3>
        <div className="relative w-full z-20">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2} // mobile shows 1 full + 20% of next
            grabCursor={true}
            breakpoints={swiperBreakpoints}
          >
            {albums && albums.map((album, index) => (
              <SwiperSlide key={index}>
                <ArtistAlbum album={album} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ArtistAlbums;
