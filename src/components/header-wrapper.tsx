import Header from "./header";
import OurArtists from "./our-artists";

const HeaderWrapper = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-[#0035B3]">
      {/* fixed header that covers the viewport */}
      <Header />

      {/* content that starts right after the viewport */}
      <div className="relative z-30 pt-[100vh]">
        <OurArtists />
      </div>
    </div>
  );
};

export default HeaderWrapper;
