"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import BlogPostSliderItem from "./blog-post-slider-item";
import { musicPosts, blogSwiperBreakpoints } from "@/app/utils/constants";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const BlogSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperInstance) {
      const updateButtonStates = () => {
        // Update button classes
        const prevBtn = document.querySelector(".blog-prev-btn");
        const nextBtn = document.querySelector(".blog-next-btn");
        
        if (prevBtn) {
          if (swiperInstance.isBeginning) {
            prevBtn.classList.add("swiper-button-disabled");
          } else {
            prevBtn.classList.remove("swiper-button-disabled");
          }
        }
        
        if (nextBtn) {
          if (swiperInstance.isEnd) {
            nextBtn.classList.add("swiper-button-disabled");
          } else {
            nextBtn.classList.remove("swiper-button-disabled");
          }
        }
      };

      // Initial state
      updateButtonStates();

      // Listen for slide changes
      swiperInstance.on("slideChange", updateButtonStates);
      swiperInstance.on("reachBeginning", updateButtonStates);
      swiperInstance.on("reachEnd", updateButtonStates);

      return () => {
        swiperInstance.off("slideChange", updateButtonStates);
        swiperInstance.off("reachBeginning", updateButtonStates);
        swiperInstance.off("reachEnd", updateButtonStates);
      };
    }
  }, [swiperInstance]);

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".blog-prev-btn",
        nextEl: ".blog-next-btn",
      }}
      breakpoints={blogSwiperBreakpoints}
      className="h-full"
      onSwiper={setSwiperInstance}
    >
      {musicPosts.map((post, index) => (
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