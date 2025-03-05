"use client";
import { useState } from "react";
import Landing from "@/components/landing";
import About from "@/components/about";
import Education from "@/components/education";
import School from "@/components/school";
import Certificates from "@/components/certificates";
import Projects from "@/components/projects";
import ParticlesBackground from "@/components/particlesBackground";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between">
        <ParticlesBackground />
        <div className="h-screen overflow-y-scroll min-w-screen snap-y snap-mandatory overflow-x-hidden">
          <div className="snap-start relative">
            <nav className="px-20 lg:px-11 py-5 h-3 mb-12 flex justify-between relative">
              <h1 className="font-burtons text-xl z-50 dark:text-gray-200">
                John Masa
              </h1>
              <ThemeSwitcher />
            </nav>
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
            <Certificates />
          </div>
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
      </main>
    </div>
  );
}
