import Image from "next/image";
import contactUsMaze from "../../../public/images/contact-us-maze.svg";
import envelope from "../../../public/icons/envelope.svg";
import phone from "../../../public/icons/phone.svg";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: envelope,
      label: "Email",
      value: "info@theplatformmusic.com",
    },
    {
      icon: phone,
      label: "Phone",
      value: "+234 812 345 6789",
    },
  ];
  return (
    <section className="relative w-full min-h-screen h-full  bg-black py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={contactUsMaze}
          alt="Contact Us Maze"
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 flex flex-col space-y-8 lg:space-y-20 px-5 lg:px-20 h-full flex-grow py-[7rem] lg:py-0 justify-center items-center lg:mt-0">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <h3 className="text-white uppercase font-polysans font-light text-[24px] lg:text-[36px] text-center">
            Contact Us
          </h3>
          <p className="text-white/50 text-[16px] lg:text-[20px] font-medium">
            Our team will be in touch with you soon
          </p>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 gap-10 lg:gap-0 mt-10">
          <div className="flex flex-col space-y-5">
            <p className="text-white text-[18px] lg:text-[24px] lg:max-w-[22ch] mx-auto md:mx-0">
              7B, Alhaja Kudirat Adenekan Street, Ajao Estate, Isolo, Lagos.
            </p>
            <div className="flex flex-col space-y-3">
              {contactInfo.map((contact, index) => (
                <div className="flex space-x-3 items-center" key={index}>
                  <div className="p-1 bg-[#E60D0D]/20 rounded-full aspect-square">
                    <Image src={contact.icon} alt={contact.label} />
                  </div>
                  <p className="text-[#999] text-[14px] lg:text-[16px] font-medium">
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-8 bg-white rounded-[10px] px-5 lg:px-8 py-10">
            <p className="text-[#0035B3] text-[18px] lg:text-[24px] font-bold">
              Send us a message
            </p>
            <form className="flex flex-col space-y-5 z-10">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  className="bg-black/3 p-3 rounded-[8px] border-[.5px] border-[#EBEDF0] text-[#999] font-light outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-black/3 p-3 rounded-[8px] border-[.5px] border-[#EBEDF0] text-[#999] font-light outline-none"
                />
              </div>
              <div className="w-full">
                <textarea
                  rows={5}
                  name="email"
                  placeholder="Write your message"
                  className="bg-black/3 p-3 rounded-[8px] border-[.5px] border-[#EBEDF0] text-[#999] font-light outline-none w-full"
                />
              </div>
              <button className="w-full flex justify-center items-center text-white text-center text-[16px] font-medium bg-tomato-red rounded-[8px] p-3 cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
