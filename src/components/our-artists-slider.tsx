import cossyBrown from "../../public/images/artists/artist-slider/cossy-brown.svg";
import dozyJan from "../../public/images/artists/artist-slider/dozy-jan.svg";
import naomiBozimo from '../../public/images/artists/artist-slider/naomi-bozimo.svg';
import billPraise from '../../public/images/artists/artist-slider/bill-praise.svg';
import OurArtistSliderItem from "./our-artist-slider-item";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OurArtistsSlider = () => {
  const artists = [
    {
      fullname: "Chisom Kanu",
      stagename: "Dozy Jan",
      image: dozyJan,
      quote:
        "Music is the essence of our existence, a melody that resonates within every heart. At The Sound Haven, we embrace the transformative power of music to ignite creativity and foster connection. Let's embark on this harmonious adventure together!",
    },
    {
      fullname: "Folake Olabode",
      stagename: "Cossy Brown",
      image: cossyBrown,
      quote:
        "Music is the heartbeat of our lives, a rhythm that flows through every soul. we celebrate the enchanting influence of music to inspire innovation and build community. Join us on this melodic journey and let the music guide us!",
    },
    {
      fullname: "Naomi Bozimo",
      stagename: "Shleek",
      image: naomiBozimo,
      quote:
        "Shleek’s sound is a magnetic mix of Afrobeat, R&B, soul, and alté influences—crafted with introspective lyrics, hypnotic rhythms, and a smooth, unmistakable vocal style that sets him apart.",
    },
    {
      fullname: "Bill Praise",
      stagename: "Wariso Dappa",
      image: billPraise,
      quote:
        "Shleek’s sound is a magnetic mix of Afrobeat, R&B, soul, and alté influences—crafted with introspective lyrics, hypnotic rhythms, and a smooth, unmistakable vocal style that sets him apart.",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full py-10 lg:px-20 flex flex-col space-y-10">
        <h3 className="font-polysans font-light text-white text-[48px] uppercase px-5">
          Our Artists
        </h3>
        <div className="w-full flex-1">
          <Swiper spaceBetween={0} slidesPerView={1.2} className="h-full">
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
