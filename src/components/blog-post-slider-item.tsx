import { IBlogPost } from "@/interfaces/blog.interface";
import Image from "next/image";
import Link from "next/link";

interface IPostSliderProps {
  post: IBlogPost;
}

const BlogPostSliderItem = ({ post }: IPostSliderProps) => {
  return (
    <div className="w-full h-full relative">
      {/*content*/}
      <div className="w-full lg:min-h-[499px] h-[400px] relative">
        <Image
          src={post.image}
          alt="post image"
          className="w-full h-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10 z-0 backdrop-blur-[5px] [-webkit-backdrop-filter:blur(5px)] supports-backdrop-blur:bg-black/10"></div>
      </div>
      <div className="absolute bottom-1 lg:bottom-5 w-full h-full flex space-y-2  px-5 py-5 items-end">
        <Link
          href={`blog/${post.slug}`}
          className="font-medium text-white text-[24px] leading-normal lg:leading-[30px] z-30"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
};

export default BlogPostSliderItem;
