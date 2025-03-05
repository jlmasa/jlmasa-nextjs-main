"use client";
import React from "react";
import face1 from "../../public/gradpic.webp";
import Image from "next/image";
const Education = () => {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center px-20">
          <strong>
            <h1 className="text-4xl py-2 text-green-400">WHO AM I</h1>
          </strong>

          <h1 className="lg:text-5xl md:text-2xl text-lg font-bold pt-10">
            I&apos;m John Lorenz Eldon R. Masa
          </h1>

          <h1 className="lg:text-2xl text-base py-5 lg:w-[60vw] w-[80vw] text-center">
            A graduate of Bachelor of Science in Information Technology. And
            ever since I first got my own computer unit at the age of 8, I was
            able to Enjoy a lot of things and It came to a point where I ask
            myself how does a computer works? How does a computer understand our
            inputs and that is where I decided to pursue this path of
            Technology.
          </h1>

          <h1 className="lg:text-2xl text-base py-5 lg:w-[60vw] w-[80vw] text-center">
            I&apos;m Also a former Member of the student body back in my college
            years. Where I was Elected As Public Relations Officer back in 2016
            for a year mainly focus on being the voice of the students. I was
            also Elected As Vice President of the Student body back in 2017 for
            a year focus on creating events for the students to enjoy their stay
            during their college years.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Education;
