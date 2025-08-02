import Image, { StaticImageData } from "next/image";

interface IArtist {
  stagename: string;
  fullname: string;
  image: StaticImageData;
  quote: string;
}

interface OurArtistSliderItemProps {
  artist: IArtist;
  index: number;
}

const OurArtistSliderItem = ({ artist, index }: OurArtistSliderItemProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`flex border-[.5px] border-l-0 border-r-[.5px] border-white p-5 w-full min-h-full ${isOdd ? "flex-col-reverse" : "flex-col"}`}
    >
      <div className={`flex-1 ${isOdd ? 'mt-3': 'mb-3'}`}>
        <Image
          src={artist.image}
          alt={artist.fullname}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col space-y-3 flex-shrink-0">
        <div className="flex space-x-1 items-end">
          <p className="font-polysans text-white font-medium lg:text-[212.557px] leading-[0.8] text-[69.854px]">
            0{index + 1}
          </p>
          <div className="flex flex-col space-y-1">
            <p className="font-medium text-white text-[15px]">{artist.stagename}</p>
            <p className="text-[#C7C7CC] text-[10px]">{artist.fullname}</p>
          </div>
        </div>

        <p className="text-white text-[10px] uppercase leading-relaxed">
          {artist.quote}
        </p>
      </div>
    </div>
  );
};

export default OurArtistSliderItem;
