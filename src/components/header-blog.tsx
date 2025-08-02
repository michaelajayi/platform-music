import headerSmall from "../../public/images/blog/header-small.jpg";
import headerRightImg from "../../public/images/blog/header-right-img.jpg";
import Image from "next/image";

const HeaderBlog = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:border-t-[.5px] lg:border-b-[.5px] border-b-[.5px] lg:border-b-none border-[#999]">
      {/* left side */}
      <div className="flex flex-col justify-center space-y-5 border-r-[.5px] lg:border-[#999] px-5 py-10 lg:p-20 mt-5 lg:mt-0">
        <div className="flex flex-col w-full lg:pr-20">
          <h3 className="font-polysans font-light text-white text-[42px] lg:text-[64px] uppercase">
            Blog Post
          </h3>
          <p className="font-polysans font-light text-white text-[42px] lg:text-[64px] uppercase self-end lg:pr-10">
            Our Latest{" "}
          </p>
          <p className="font-polysans font-light text-white text-[42px] lg:text-[64px] uppercase">
            Publications
          </p>
        </div>
        <div className="w-full flex lg:justify-end">
          <p className="font-medium text-[#999] text-[14px] lg:text-[20px] lg:leading-[30px] uppercase w-full lg:w-[60%]">
            The Platform Music: Where Every Note Tells a Story, and Every Beat
            Inspires a Movement!
          </p>
        </div>
        <Image src={headerSmall} alt="header small img" priority />
      </div>
      {/* right side */}
      <div className="hidden lg:flex w-full h-full justify-center items-center p-10">
        <Image
          src={headerRightImg}
          alt="header right img"
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderBlog;