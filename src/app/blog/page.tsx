import Image from "next/image";
import blogMaze from "../../../public/images/blog-maze.svg";
import HeaderBlog from "@/components/header-blog";
import BlogCarousel from "@/components/blog-carousel";
import VideoGrid from "@/components/video-grid";
import arrowRightWhite from "../../../public/icons/arrow-right-white.svg";

const Blog = () => {
  return (
    <section className="relative w-full min-h-screen bg-black py-10 pt-[80px]">
      {/* maze */}
      <div className="absolute inset-0 z-0">
        <Image src={blogMaze} alt="Maze" fill objectFit="cover" />
      </div>

      {/* main content */}
      <div className="relative flex flex-col space-y-12 lg:space-y-20 h-full flex-grow mt-5 lg:mt-10 z-10">
        <div className="flex flex-col space-y-20 w-full">
          <HeaderBlog />
        </div>
        <div className="w-full h-full my-20 z-10">
          <BlogCarousel />
        </div>
        <div className="w-full h-full px-5 lg:px-20 flex flex-col justify-center items-center space-y-10 mb-10 lg:mb-[8rem] z-10">
          <VideoGrid />
          <button className="flex space-x-2 items-center px-5 py-3 bg-[#058AE3] rounded-[8px] cursor-pointer">
            <p className="text-white text-[20px]">See More</p>
            <Image src={arrowRightWhite} alt="arrow right white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
