"use client";
import { useState, useEffect } from "react";
import Landing from "@/components/landing";
import About from "@/components/about";
import Education from "@/components/education";
import School from "@/components/school";
import Certificates1 from "@/components/certificates1";
import Certificates2 from "@/components/certificates2";
import Projects from "@/components/projects";
import ParticlesBackground from "@/components/particlesBackground";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

import { useScroll, useSpring, useTransform } from "motion/react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { Clock } from "@/components/clock";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <main className="flex flex-col items-center justify-between relative overflow-hidden">
        <Link href="#landing">
          <button
            className={`fixed bottom-0 right-0 bg-gray-700 rounded-s-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2`}
          >
            BACK TO TOP
            <ArrowUp className="inline-block h-4 w-4" />
          </button>
        </Link>

        {/* <ParticlesBackground /> */}
        <FlickeringGrid
          className="absolute inset-0 -z-50 size-screen opacity-50"
          squareSize={6}
          gridGap={8}
          color="#60A5FA"
          maxOpacity={0.2}
          flickerChance={0.1}
          height={0}
          width={0}
        />

        <nav className="px-10 lg:px-11 py-5 fixed top-0 flex justify-between w-screen z-50">
          <Clock />
          <ThemeSwitcher />
        </nav>

        <div className="h-[98vh] overflow-y-scroll min-w-screen snap-y snap-mandatory overflow-x-hidden">
          <div className="snap-start relative" id="landing">
            <div>
              <Landing />
            </div>
            <div className="snap-start relative">
              <About />
            </div>
            <div className="snap-start relative">
              <Education />
            </div>
            <div className="snap-start relative">
              <School />
            </div>
            <div className="snap-start relative">
              <Certificates1 />
            </div>
            <div className="snap-start relative">
              <Certificates2 />
            </div>
            {/* <motion.div className="progress" style={{ scaleX }} /> */}
            <div className="snap-start relative">
              <Projects />
              <footer>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2024{" "}
                  <a
                    href="https://www.linkedin.com/in/johnmasa/"
                    className="hover:underline"
                  >
                    John Lorenz Eldon R Masa
                  </a>
                  . All Rights Reserved.
                </span>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
