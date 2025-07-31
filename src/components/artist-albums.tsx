import { IArtistAlbum } from "@/interfaces/artist.interface";
import Divider from "./divider";
import Image from "next/image";

interface IArtistAlbumProps {
  albums: IArtistAlbum[];
}

const ArtistAlbums = ({ albums }: IArtistAlbumProps) => {
  return (
    <div className="w-full">
      <Divider />
      <div className="w-full px-20 py-10 flex flex-col space-y-5">
        <h3 className="font-polysans font-light text-white uppercase text-[40px]">
          Music
        </h3>
        <div className="w-full flex justify-between space-x-5 items-center">
          {albums &&
            albums.map((album, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col space-y-5"
              >
                <Image
                  src={album.albumArt}
                  alt={album.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="flex flex-col space-y-1">
                  <p className="font-polysans font-light text-white text-[20px] leading-[30px]">
                    {album.artists}
                  </p>
                  <p className="font-polysans font-light text-[#999] text-[14px]">
                    {album.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistAlbums;
