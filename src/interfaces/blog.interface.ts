import { StaticImageData } from "next/image";

export interface IPost {
  id: number;
  title: string;
  image: StaticImageData;
  content: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  image: StaticImageData;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string
  },
  publishedAt: string;
  readTime: number;
  tags: string[],
  category: string;
}

export interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
