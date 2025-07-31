import { StaticImageData } from "next/image";

export type SocialPlatform = 
'facebook'
|'twitter' 
| 'instagram' 
| 'tiktok' 
| 'youtube'
| 'spotify'

export interface ISocial {
  name: string;
  url: string;
}

export interface IArtistAlbum {
  title: string;
  albumArt: string;
  artists: string;
}

export interface IArtist {
  name: string;
  bio: string;
  coverPhoto: StaticImageData | undefined;
  banner: StaticImageData | undefined;
  bioImage: StaticImageData | undefined;
  socials: ISocial[],
  albums: IArtistAlbum[];
  slug: string;
}
