// @flow strict

import { personalData } from "../../../../../utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
          I'm Kishan Thakur, a Frontend Developer with over 2 years of experience in crafting user-friendly websites. My expertise includes HTML, CSS, JavaScript, and ReactJS, and I'm always eager to explore new technologies. I pride myself on my detail-oriented approach and commitment to quality. My experience ranges from creating a Lead management Web Application for a client to automating web testing processes, honing my technical skills and emphasizing the importance of teamwork and communication.

          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Kishan Thakur"
            className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;