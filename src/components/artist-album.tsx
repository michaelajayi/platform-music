import { IArtistAlbum } from '@/interfaces/artist.interface';
import Image from 'next/image';

interface IArtistAlbumProp {
  album: IArtistAlbum
}

const ArtistAlbum = ({ album }: IArtistAlbumProp) => {
  return (
      <div
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
  )
}

export default ArtistAlbum;