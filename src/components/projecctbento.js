import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import project1 from "../../public/project1.webp";
import project2 from "../../public/project2.webp";
import project3 from "../../public/project3.webp";
import project4 from "../../public/project4.webp";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";

import { FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiHeroku, SiKotlin, SiMongodb, SiReact } from "react-icons/si";
import { Laptop } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";

const features = [
  {
    Icon: Laptop,
    name: (
      <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent ">
        <strong>
          <h1 className="text-xl py-5">
            CASA PADRID ONLINE RESERVATION SYSTEM
          </h1>
        </strong>
      </div>
    ),
    description: (
      <div className="flex flex-col items-start justify-center w-full pt-10">
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaPhp className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl">PHP</h1>
          </div>
        </div>
      </div>
    ),
    background: (
      <Image src={project1} className=" absolute opacity-80" alt="image" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Laptop,
    name: (
      <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent ">
        <strong>
          <h1 className="text-xl py-5">
            CAMPUS MINISTRY SERVICES WEB APPLICATION
          </h1>
        </strong>
      </div>
    ),
    description: (
      <div className="flex flex-col items-start justify-center w-full pt-10">
        <div className="grid grid-cols-4 gap-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <SiReact className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl">ReactJS</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaNodeJs className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-2xl">NodeJS</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <SiMongodb className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-2xl">MongoDB</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <SiHeroku className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl">Heroku</h1>
          </div>
        </div>
      </div>
    ),

    background: (
      <Image src={project2} className=" absolute opacity-80" alt="image" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: MobileIcon,
    name: (
      <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent ">
        <strong>
          <h1 className="text-xl py-5">
            CAMPUS MINISTRY SERVICES MOBILE APPLICATION
          </h1>
        </strong>
      </div>
    ),
    description: (
      <div className="flex flex-col items-start justify-center w-full pt-10">
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaJava className="w-8 h-8 text-blue-500" />
            </div>

            <h1 className="text-2xl">Java</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <SiKotlin className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-2xl">Kotlin</h1>
          </div>
        </div>
      </div>
    ),

    background: (
      <Image src={project3} className=" absolute opacity-80" alt="image" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Laptop,
    name: (
      <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent ">
        <strong>
          <h1 className="text-xl py-5">NETFLIX CLONE</h1>
        </strong>
      </div>
    ),
    description: (
      <div className="flex flex-col items-start justify-center w-full pt-10">
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaReact className="w-8 h-8 text-blue-500" />
            </div>

            <h1 className="text-2xl">ReactJS</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <IoLogoFirebase className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-2xl">Firebase</h1>
          </div>
        </div>
      </div>
    ),

    background: (
      <Image src={project4} className=" absolute opacity-80" alt="image" />
    ),
    className: "col-span-3 lg:col-span-1",
  },
];

export function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-2 lg:h-screen p-10">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
