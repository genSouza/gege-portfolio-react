import React from "react";
import HeroImage from "../../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-white mt-20 sm:mt-0">
          <h2 className="text-4xl">
            Hi everyone, my name is Genilton Souza and i'm a software engineer .
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            I`m a Full-Stack web developer with 10 years of experience, worked
            in several projects using the following technology stacks: .Net
            Core, Node.js, Express, Nest.js, Vue.js 2, Vue Material, Nuxt.js,
            Angular 8+, Angular Material, React, HTML 5, CSS 3, Less/Sass Mysql,
            Oracle 11g, PostgreSQL, MongoDB
          </p>
          <div>
            <button className="flex items-center px-6 py-3 my-2 rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="GeGe profile"
            className="w-2/3 mx-auto rounded-2xl md:w-full mb-2 sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
