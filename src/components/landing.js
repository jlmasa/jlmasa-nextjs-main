"use client";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { AuroraText } from "./magicui/aurora-text";
import { TextAnimate } from "./magicui/text-animate";
import { MorphingText } from "./magicui/morphing-text";
import { HyperText } from "./magicui/hyper-text";

const texts = ["Frontend", "Backend", "Database", "Mobile App", "Fullstack"];
const Landing = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl pb-5">Hello!</h1>
        <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text pb-10 text-center px-10">
          <h1 className="lg:text-8xl md:text-5xl text-4xl">
            <HyperText>I am JL Masa,</HyperText>
          </h1>
          <h1 className="lg:text-8xl md:text-5xl text-4xl">
            <AuroraText className="w-full">
              <MorphingText texts={texts} />
            </AuroraText>
          </h1>
          <h1 className="lg:text-8xl md:text-5xl text-4xl">
            <AuroraText>Developer.</AuroraText>
          </h1>
        </div>
        <h1 className="lg:text-4xl md:text-3xl px-16 lg:px-20 md:px-9 lg:w-screen dark:text-gray-300  text-black pb-10 text-center">
          I am located in Laguna/makati and i like to build amazing UI/UX
          experience for people. Currently, I&apos;m more focus on developing
          systems and technologies that will make life easier for people as a
          fullstack developer.
        </h1>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="https://www.linkedin.com/in/johnmasa/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Do you want to work with me?
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
