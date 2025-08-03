import Image from 'next/image';
import navPrev from "../../public/icons/nav-prev.svg";
import navNext from "../../public/icons/nav-next.svg";

const BlogSliderNavButtons = () => {
  return (
    <div className="w-full h-full flex justify-center lg:justify-end items-center px-20 py-5 lg:py-10 space-x-20">
      <button className="blog-prev-btn cursor-pointer hover:opacity-70 transition-opacity swiper-button-disabled">
        <Image
          src={navPrev}
          alt="Previous"
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
      </button>
      <button className="blog-next-btn cursor-pointer hover:opacity-70 transition-opacity">
        <Image
          src={navNext}
          alt="Next"
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
      </button>
    </div>
  )
}

export default BlogSliderNavButtons;