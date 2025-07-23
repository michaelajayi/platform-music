"use client";

import { useEffect, useState } from "react";
import { artists } from "@/app/data/artists";
import { redirect, usePathname } from "next/navigation";
import { IArtist } from "@/interfaces/artist.interface";
import Link from "next/link";
import Image from "next/image";

const Artist = () => {
  const pathname = usePathname();
  console.log(pathname.split("/").pop());
  const [artist, setArtist] = useState<IArtist>({
    name: "",
    slug: "",
    bio: "",
    coverPhoto: undefined,
    socials: [],
  });

  useEffect(() => {
    const who = pathname.split("/").pop();
    const artist = artists.find((artist) => artist.slug === who);

    if (!artist) return redirect("/about");
    setArtist(artist);
  }, [pathname]);

  return (
    <section className="bg-black p-5 flex flex-col space-y-5 z-10 items-start">
      <Image src={artist?.coverPhoto || ""} alt={artist?.name} className="h-50 w-50 rounded-full aspect-square mt-[8rem]" />
      <p className="text-white text-5xl">Hi, {artist?.name}</p>
      <Link href="/about" className="bg-tomato-red px-5 py-2 flex justify-center items-center text-white text-[20px]">Go back</Link>
    </section>
  );
};

export default Artist;
