"use client";
import React from "react";
import project1 from "../../public/project1.webp";
import project2 from "../../public/project2.webp";
import project3 from "../../public/project3.webp";
import project4 from "../../public/project4.webp";
import Image from "next/image";
import { FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiHeroku, SiKotlin, SiMongodb, SiReact } from "react-icons/si";

const Projects = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <strong>
          <h1 className="text-green-500 text-3xl pt-5">PROJECTS</h1>
        </strong>
        <div className="flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-start justify-center px-20">
              <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center">
                <strong>
                  <h1 className="text-3xl py-5">
                    CAMPUS MINISTRY SERVICES WEB APPLICATION
                  </h1>
                </strong>
              </div>
              <h1 className="text-2xl lg:text-justify text-start py-5">
                A software that handles all the evaluation process through a
                digital approach.
              </h1>
              <div className="flex flex-col items-start justify-center w-full pt-10">
                <div className="grid grid-cols-4 gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <SiReact className="w-14 h-14 text-blue-400" />
                    </div>
                    <h1 className="text-2xl">ReactJS</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <FaNodeJs className="w-14 h-14 text-green-400" />
                    </div>
                    <h1 className="text-2xl">NodeJS</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <SiMongodb className="w-14 h-14 text-green-400" />
                    </div>
                    <h1 className="text-2xl">MongoDB</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <SiHeroku className="w-14 h-14 text-blue-400" />
                    </div>
                    <h1 className="text-2xl">Heroku</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-14">
              <Image src={project2} className="rounded-xl" alt="image" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-center justify-center p-14">
              <Image src={project1} className="rounded-xl" alt="image" />
            </div>
            <div className="flex flex-col items-start justify-center px-20">
              <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center">
                <strong>
                  <h1 className="text-3xl py-5">
                    CASA PADRID ONLINE RESERVATION SYSTEM
                  </h1>
                </strong>
              </div>
              <h1 className="text-2xl lg:text-justify text-start py-5">
                Software that handles orders for catering services.
              </h1>
              <div className="flex flex-col items-start justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <FaPhp className="w-14 h-14 text-blue-400" />
                    </div>
                    <h1 className="text-2xl">PHP</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-start justify-center px-20">
              <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center">
                <strong>
                  <h1 className="text-3xl py-5">
                    CAMPUS MINISTRY SERVICES MOBILE APPLICATION
                  </h1>
                </strong>
              </div>
              <h1 className="text-2xl lg:text-justify text-start py-5">
                A software that send requests and evaluation forms.
              </h1>
              <div className="flex flex-col items-start justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <FaJava className="w-14 h-14 text-blue-500" />
                    </div>

                    <h1 className="text-2xl">Java</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <SiKotlin className="w-14 h-14 text-purple-400" />
                    </div>
                    <h1 className="text-2xl">Kotlin</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-14">
              <Image src={project3} className="rounded-xl" alt="image" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-center justify-center p-14">
              <Image src={project4} className="rounded-xl" alt="image" />
            </div>
            <div className="flex flex-col items-start justify-center px-20">
              <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center">
                <strong>
                  <h1 className="text-3xl py-5">NETFLIX CLONE</h1>
                </strong>
              </div>

              <h1 className="text-2xl lg:text-justify text-start py-5">
                A clone of famous web application netflix.
              </h1>
              <div className="flex flex-col items-start justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <FaReact className="w-14 h-14 text-blue-500" />
                    </div>

                    <h1 className="text-2xl">ReactJS</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <IoLogoFirebase className="w-14 h-14 text-amber-400" />
                    </div>
                    <h1 className="text-2xl">Firebase</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
