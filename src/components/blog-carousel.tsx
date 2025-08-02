import BlogSlider from "./blog-slider";

const BlogCarousel = () => {
  return (
    <div className="w-full h-full border-t-[.5px] border-b-[.5px] border-[#999]">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3  flex flex-col space-y-20 justify-start border-r-[.5px] border-[#999]">
          <div className="py-10 lg:py-20 px-5 lg:px-20 w-full h-full flex flex-col justify-between">
            <div className="flex flex-col space-y-5">
              <p className="font-polysans font-light text-white text-[64px] leading-[.8]">
                May 12”
              </p>
              <p className="font-medium text-[#999] text-[16px] uppercase">
                Every
              </p>
            </div>
            <div className="w-full flex">
              <p className="cursor-pointer font-medium text-white text-[16px] text-start pb-1 flex justify-start border-b-[.5px] border-[#999]">
                View all posts...
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 flex justify-center items-center h-full w-full">
          <BlogSlider />
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
