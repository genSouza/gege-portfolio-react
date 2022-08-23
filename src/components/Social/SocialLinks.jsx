import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/genilton-silva-de-souza/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/genSouza",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:genilton.souza26@gmnail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/genilton-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center justify-between w-40 px-4 h-14 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
