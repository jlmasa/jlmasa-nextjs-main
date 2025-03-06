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
import { Lens } from "@/components/magicui/lens";
import * as motion from "motion/react-client";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "./magicui/text-animate";
import { BlurFade } from "./magicui/blur-fade";
const About = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center lg:min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col items-center justify-center p-3 lg:p-20 ">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <Image
                src={face1}
                className="rounded-xl scale-75 lg:scale-100"
                alt="image"
              />
            </Lens>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-start px-14 lg:w-[47dvw]">
            <h1 className="lg:text-3xl md:text-2xl text-center">
              <TextAnimate animation="slideUp" by="word">
                I&apos;ve been coding for almost 8 years. I&apos;m currently a
                fullstack developer who likes on making responsive websites with
                awesome UI/UX. My preferred weapons of choices when coding are
                the following:
              </TextAnimate>
            </h1>
            <BlurFade delay={0.5} inView>
              <div className="flex flex-col items-center justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaReact className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-blue-500" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <RiNextjsLine className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11" />
                      </motion.div>
                    </div>

                    <h1 className="lg:text-2xl md:text-lg text-base">
                      <TextAnimate animation="slideUp" by="word">
                        ReactJS / NextJS
                      </TextAnimate>
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaPhp className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-violet-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaLaravel className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-red-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <RiNodejsFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-green-500" />
                      </motion.div>
                    </div>
                    <h1 className="lg:text-2xl md:text-lg text-base">
                      <TextAnimate animation="slideUp" by="word">
                        PHP / Laravel / NodeJS
                      </TextAnimate>
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <RiTailwindCssFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11  text-blue-500" />
                      </motion.div>
                    </div>
                    <h1 className="lg:text-2xl md:text-lg text-base">
                      <TextAnimate animation="slideUp" by="word">
                        TailwindCSS
                      </TextAnimate>
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <SiMysql className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-amber-600" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <TbBrandMongodb className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-11 w-11 text-green-600" />
                      </motion.div>
                    </div>
                    <h1 className="lg:text-2xl md:text-lg text-base">
                      <TextAnimate animation="slideUp" by="word">
                        MySQL / Monggo
                      </TextAnimate>
                    </h1>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
