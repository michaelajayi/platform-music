import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ text }: { text: string }) => {
  return (
    <Marquee speed={200}>
      <p className="text-white font-light text-[48px] md:text-[123.548px] uppercase cursor-grab font-polysans">
        {text}
      </p>
    </Marquee>
  );
};

export default MarqueeComponent;