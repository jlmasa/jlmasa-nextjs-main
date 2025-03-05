"use client";
import Image from "next/image";
import React from "react";
import face1 from "../../public/picture1.jpg";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiNodejsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
const About = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center lg:min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col items-center justify-center p-3 lg:p-20 ">
            <Image
              src={face1}
              className="rounded-xl scale-75 lg:scale-100"
              alt="image"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center px-14 lg:w-[47dvw]">
            <h1 className="lg:text-3xl md:text-2xl text-center">
              I&apos;ve been coding for almost 8 years. I&apos;m currently a
              fullstack developer who likes on making responsive websites with
              awesome UI/UX.
            </h1>
            <h1 className="lg:text-3xl md:text-2xl py-5 text-center">
              My preferred weapons of choices when coding are the following:
            </h1>
            <div className="flex flex-col items-center justify-center w-full pt-10">
              <div className="grid grid-cols-2 gap-14">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <FaReact className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-blue-500" />
                    <RiNextjsLine className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11" />
                  </div>

                  <h1 className="lg:text-2xl md:text-lg text-base">
                    ReactJS / NextJS
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <FaPhp className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-violet-500" />
                    <FaLaravel className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-red-500" />
                    <RiNodejsFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-green-500" />
                  </div>
                  <h1 className="lg:text-2xl md:text-lg text-base">
                    PHP / Laravel / NodeJS
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <RiTailwindCssFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11  text-blue-500" />
                  </div>
                  <h1 className="lg:text-2xl md:text-lg text-base">
                    TailwindCSS
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <SiMysql className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-amber-600" />
                    <TbBrandMongodb className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-green-600" />
                  </div>
                  <h1 className="lg:text-2xl md:text-lg text-base">
                    MySQL / Monggo
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
