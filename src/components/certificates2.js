"use client";
import React from "react";
import Image from "next/image";
import cert1 from "../../public/certificate1.webp";
import cert2 from "../../public/certificate2.webp";
import Link from "next/link";
import * as motion from "motion/react-client"
import { Lens } from "./magicui/lens";
import { BoxReveal } from "./magicui/box-reveal";
const Certificates2 = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen py-10">
            <div className="flex flex-col items-center justify-center px-20">
              <BoxReveal BoxReveal boxColor={"#38bdf8/10"} duration={0.5}>
              <h1 className="text-3xl font-bold text-sky-400">
                PHILIPPINE CREATIVE IMAGING
              </h1>
              </BoxReveal>
              <BoxReveal BoxReveal boxColor={"#38bdf8/10"} duration={0.5}>
              <h1 className="lg:text-2xl text-xl py-5">
                Premiere Pro Essentials
              </h1></BoxReveal>
              <BoxReveal BoxReveal boxColor={"#38bdf8/10"} duration={0.5}>
              <h1 className="lg:text-2xl text-base lg:text-justify text-start py-10">
                This hands-on computer workshop will introduce you to digital
                video imaging and editing with Adobe Premiere. Throughout this
                intensive three-day course, you will learn the interface of
                Adobe Premiere and how to import a wide range of audio, video,
                graphics and animation files into your projects. See how to use
                non-linear editing to produce video for corporate, training, Web
                or other applications. Apply professional-quality special
                effects and transitions between video clips. Explore digital
                compositing, 2D animation and time-based special effects. At the
                end of the workshop, you will be able to assemble your own mini
                video presentation for class viewing.
              </h1></BoxReveal>
              
<motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            
        >
              <Link href="https://pcci.edu.ph/adobe-premiere-pro-essentials/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </Link>
        </motion.div>

            </div>
            <div className="flex flex-col items-center justify-center  dark:bg-transparent lg:px-0 md:px-20 px-14 pt-5">
                    <Lens
                        zoomFactor={2}
                        lensSize={150}
                        isStatic={false}
                        ariaLabel="Zoom Area"
                      ><Image
                src={cert2}
                className="rounded-xl shadow-2xl"
                alt="image"
              /></Lens>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates2;
