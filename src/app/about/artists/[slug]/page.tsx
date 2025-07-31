"use client";

import { artists } from "@/app/data/artists";
import ArtistSocialIcons from "@/components/artist-social-icons";
import { IArtist } from "@/interfaces/artist.interface";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import maze from "../../../../../public/images/contact-us-maze.svg";
import ArtistAlbums from "@/components/artist-albums";
import Divider from "@/components/divider";

const Artist = () => {
  const pathname = usePathname();
  const [artist, setArtist] = useState<IArtist>({
    name: "",
    slug: "",
    bio: "",
    coverPhoto: undefined,
    banner: undefined,
    bioImage: undefined,
    socials: [],
  });

  useEffect(() => {
    const who = pathname.split("/").pop();
    const artist = artists.find((artist) => artist.slug === who);

    if (!artist) return redirect("/about");
    setArtist(artist);
  }, [pathname]);

  return (
    <section className="bg-black flex flex-col z-10 items-start">
      {/* artist header */}
      <div className="w-full h-full">
        <div className="w-full h-[531px] relative">
          {/* artist header bg */}
          <div className="flex absolute inset-0 -z-5]">
            {artist?.banner && (
              <Image
                src={artist?.banner}
                alt={artist.name}
                className="object-cover w-full h-full pointer-events-none select-none"
              />
            )}
          </div>
           <div className="absolute inset-0 bg-black/20 z-0 backdrop-blur-[1px]"></div>
          {/* artist header content */}
          <div className="z-10 w-full h-full">
            <div className="absolute w-full h-full inset-0 flex flex-col justify-end">
              <div className="flex flex-col space-y-5 items-center justify-center py-10 cursor-pointer">
                <p className="text-white text-5xl">{artist?.name}</p>
                <div className="flex space-x-5 items-center">
                  <ArtistSocialIcons socials={artist?.socials} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full  bg-black pt-10">
          <div className="absolute inset-0 z-0">
            <Image src={maze} alt="Contact Us Maze" fill objectFit="cover" />
          </div>
          {/* Artist socials */}
          <div className="relative z-10 flex flex-col justify-center items-center py-20">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-20 gap-10">
              {/* left */}
              <div className="w-full flex flex-col space-y-5">
                <h3 className="text-white text-[64px] font-polysans font-light capitalize">
                  {artist.name}
                </h3>
                <p className="font-medium text-[20px] leading-[30px] uppercase text-[#999] pr-20 selection:bg-[#e60d0d] selection:text-white">
                  {artist.bio}
                </p>
                <ArtistSocialIcons socials={artist?.socials} />
              </div>
              {/* right */}
              <div>
                {artist?.bioImage && (
                  <Image src={artist?.bioImage} alt={artist.name} className="select-none pointer-events-none" />
                )}
              </div>
            </div>
          </div>
          {/* Albums */}
          <div className="relative z-10">
            <ArtistAlbums albums={artist.albums} />
          </div>
          <div className="pt-[10rem]">
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
