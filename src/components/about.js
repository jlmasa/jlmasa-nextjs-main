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
import { AnimatedSpan, Terminal } from "./magicui/terminal";
const About = () => {
  return (
    <section className="h-screen pt-12">
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
                className="rounded-xl w-60 lg:w-[700px]"
                alt="image"
              />
            </Lens>
          </div>
          <div className="flex flex-col items-center lg:items-center justify-center px-5  w-full">
            <TextAnimate animation="slideUp" by="word" className="pb-10 px-12">
              I&apos;ve been coding for almost 8 years. I&apos;m currently a
              fullstack developer who likes on making responsive websites with
              awesome UI/UX.
            </TextAnimate>
            <Terminal className="w-80 h-auto lg:w-screen">
              <TypingAnimation className="text-md lg:text-lg">
                &gt; Preferred weapons of development
              </TypingAnimation>

              <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ NodeJS.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ ReactJs.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ NextJS</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Express </span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Prisma ORM</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ MySQL</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Android Studio</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ MonggoDB</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Firebase.</span>
              </AnimatedSpan>
            </Terminal>
          </div>

          {/* <div className="flex flex-col items-center lg:items-start justify-center px-14 lg:w-[47dvw]">
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
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaReact className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-blue-500" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <RiNextjsLine className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8" />
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
                        <FaPhp className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-violet-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <FaLaravel className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-red-500" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <RiNodejsFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-green-500" />
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
                        <RiTailwindCssFill className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8  text-blue-500" />
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
                        <SiMysql className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-amber-600" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <TbBrandMongodb className="lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 text-green-600" />
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
