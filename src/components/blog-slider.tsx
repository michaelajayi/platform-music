"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import BlogPostSliderItem from "./blog-post-slider-item";
import { posts, blogSwiperBreakpoints } from "@/app/utils/constants";

import "swiper/css";
import "swiper/css/free-mode";

const BlogSlider = () => {
  return (
    <Swiper
      // spaceBetween={10}
      // slidesPerView={3.2}
      breakpoints={blogSwiperBreakpoints}
      className="h-full"
    >
      {posts.map((post, index) => (
        <SwiperSlide
          key={index}
          className="h-full px-3 py-5"
          style={{
            height: "auto",
            display: "flex",
          }}
        >
          <BlogPostSliderItem post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;
