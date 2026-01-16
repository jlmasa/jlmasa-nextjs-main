"use client";
import React from "react";
import Image from "next/image";
import cert1 from "../../public/certificate1.webp";
import cert2 from "../../public/certificate2.webp";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Lens } from "./magicui/lens";
import { BoxReveal } from "./magicui/box-reveal";

const Certificates1 = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen py-10">
            <div className="flex flex-col items-center justify-center  dark:bg-transparent lg:px-0 md:px-20 px-14 ">
              <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <Image
                  src={cert1}
                  className="rounded-xl shadow-2xl"
                  alt="image"
                />
              </Lens>
            </div>

            <div className="flex flex-col items-center justify-center px-20">
              <h1 className="text-3xl font-bold text-amber-400 py-5">
                HARVARD UNIVERSITY
              </h1>
              <h1 className="lg:text-2xl text-xl py-5">
                CS50 : Introduction to Computer Science
              </h1>
              <BoxReveal BoxReveal boxColor={"#fbbf24/10"} duration={0.3}>
                <h1 className="lg:text-2xl text-base lg:text-justify text-start">
                  This is CS50, Harvard University&apos;s introduction to the
                  intellectual enterprises of computer science and the art of
                  programming, for concentrators and non-concentrators alike,
                  with or without prior programming experience. (More than half
                  of CS50 students have never taken CS before!) This course
                  teaches you how to solve problems, both with and without code,
                  with an emphasis on correctness, design, and style. Topics
                  include computational thinking, abstraction, algorithms, data
                  structures, and computer science more generally.
                </h1>
              </BoxReveal>
              <BoxReveal BoxReveal boxColor={"#fbbf24/10"} duration={0.3}>
                <h1 className="lg:text-2xl text-base lg:text-justify text-start py-10">
                  Students who earn a satisfactory score on 9 problem sets
                  (i.e., programming assignments) and a final project are
                  eligible for a certificate. This is a self-paced course–you
                  may take CS50x on your own schedule.
                </h1>
              </BoxReveal>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Link href="https://pll.harvard.edu/course/cs50-introduction-computer-science">
                  <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates1;
