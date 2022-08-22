import React from "react";
import HeroImage from "../../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;

const Home = () => {
  return (
    <Element
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full text-white">
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
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="GeGe profile"
            className="w-2/3 mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;