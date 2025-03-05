"use client";
import React from "react";
import Image from "next/image";
import cert1 from "../../public/certificate1.webp";
import cert2 from "../../public/certificate2.webp";
import Link from "next/link";
const Certificates = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <strong>
          <h1 className="text-green-500 text-3xl pt-5">CERTIFICATES</h1>
        </strong>

        <div className="flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen py-10">
            <div className="flex flex-col items-center justify-center  dark:bg-transparent lg:px-0 md:px-20 px-14 ">
              <Image
                src={cert1}
                className="rounded-xl shadow-2xl"
                alt="image"
              />
            </div>
            <div className="flex flex-col items-center justify-center px-20">
              <h1 className="text-3xl font-bold text-amber-400 py-5">
                HARVARD UNIVERSITY
              </h1>
              <h1 className="lg:text-2xl text-xl py-5">
                CS50 : Introduction to Computer Science
              </h1>
              <h1 className="lg:text-2xl text-base lg:text-justify text-start">
                This is CS50, Harvard University&apos;s introduction to the
                intellectual enterprises of computer science and the art of
                programming, for concentrators and non-concentrators alike, with
                or without prior programming experience. (More than half of CS50
                students have never taken CS before!) This course teaches you
                how to solve problems, both with and without code, with an
                emphasis on correctness, design, and style. Topics include
                computational thinking, abstraction, algorithms, data
                structures, and computer science more generally.
              </h1>
              <h1 className="lg:text-2xl text-base lg:text-justify text-start py-10">
                Students who earn a satisfactory score on 9 problem sets (i.e.,
                programming assignments) and a final project are eligible for a
                certificate. This is a self-paced course–you may take CS50x on
                your own schedule.
              </h1>
              <Link href="https://pll.harvard.edu/course/cs50-introduction-computer-science">
                <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen py-10">
            <div className="flex flex-col items-center justify-center px-20">
              <h1 className="text-3xl font-bold text-sky-400">
                PHILIPPINE CREATIVE IMAGING
              </h1>
              <h1 className="lg:text-2xl text-xl py-5">
                Premiere Pro Essentials
              </h1>
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
              </h1>

              <Link href="https://pcci.edu.ph/adobe-premiere-pro-essentials/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center  dark:bg-transparent lg:px-0 md:px-20 px-14 pt-5">
              <Image
                src={cert2}
                className="rounded-xl shadow-2xl"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
