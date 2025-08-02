import { IPost } from "@/interfaces/blog.interface";
import Image from "next/image";
import Link from "next/link";

interface IPostSliderProps {
  post: IPost;
}

const BlogPostSliderItem = ({ post }: IPostSliderProps) => {
  return (
    <div className="w-full h-full relative">
      {/*content*/}
      <div className="w-full lg:min-h-[499px]">
        <Image
          src={post.image}
          alt="post image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-5 w-full h-full flex space-y-2  px-5 py-5 items-end">
        <Link
          href={`blog/${post.id}`}
          className="font-medium text-white text-[24px] leading-normal lg:leading-[30px] z-30"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
};

export default BlogPostSliderItem;
