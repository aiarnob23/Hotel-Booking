
import Image from "next/image";

import banner from "@/public/banner/banner.png";
import BannerHeaders from "./Headers";

export default function Banner() {
  return (
    <div className="relative h-[400px] flex items-center justify-center text-center text-white p-8">
      <Image
        src={banner}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute rounded-lg opacity-80 inset-0 z-0"
      />
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black rounded-lg opacity-30"></div>
      <div className="relative z-10">
       <BannerHeaders/>
      </div>
    </div>
  );
}
