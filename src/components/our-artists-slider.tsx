import { Swiper, SwiperSlide } from "swiper/react";
import OurArtistSliderItem from "./our-artist-slider-item";

// import required modules
import { FreeMode } from 'swiper/modules';

import { artists } from "@/app/utils/constants";
import "swiper/css";
import 'swiper/css/free-mode';

const OurArtistsSlider = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full py-10 lg:px-20 flex flex-col space-y-12">
        <h3 className="font-polysans font-light text-white text-[48px] uppercase px-5">
          Our Artists
        </h3>
        <div className="w-full flex-1">
          <Swiper
            spaceBetween={0}
            slidesPerView={1.2}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="h-full"
          >
            {artists.map((artist, index) => (
              <SwiperSlide
                key={index}
                className="h-full"
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <OurArtistSliderItem artist={artist} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurArtistsSlider;
