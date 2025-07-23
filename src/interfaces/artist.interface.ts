import { StaticImageData } from "next/image";

interface ISocial {
  name: string;
  url: string;
}

export interface IArtist {
  name: string;
  bio: string;
  coverPhoto: StaticImageData | undefined;
  socials: ISocial[],
  slug: string;
}
