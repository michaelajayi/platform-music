import { StaticImageData } from "next/image";

export interface IPost {
  id: number;
  title: string;
  image: StaticImageData;
  content: string;
}
