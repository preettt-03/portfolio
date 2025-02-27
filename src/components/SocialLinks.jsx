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
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/preettt03",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/preettt-03",
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:preetpatel9977@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/resume.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ];

      
  return (
    <div>
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:hidden flex justify-center space-x-6 bg-gray-900 p-4">
        {links.map(({ id, child, href, download }) => (
          <a
            key={id}
            href={href}
            className="flex flex-col items-center text-white hover:text-gray-400"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        ))}
      </div>
    </div>
    
  )
}

export default SocialLinks;