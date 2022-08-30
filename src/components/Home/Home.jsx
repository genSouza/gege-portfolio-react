import React from "react";
import HeroImage from "../../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full mt-20 text-white sm:mt-0">
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
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="GeGe profile"
            className="w-2/3 mx-auto mb-2 rounded-2xl md:w-full sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
