import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import quizGame from "../assets/portfolio/quizGame.png";
import navbar from "../assets/portfolio/navbar.jpg";
import myPortfolio from "../assets/portfolio/myPortfolio.png";
import budgetTracker from "../assets/portfolio/budgetTracker.png";
import todoList from "../assets/portfolio/todoList.png";


const Portfolio = () => {

    const portfolios = [
        {
          id: 1,
          src: arrayDestruct,
          demoLink: "https://www.instagram.com/preettt_03/",
          codeLink: "https://www.youtube.com/channel/UCN5zQMMi_jszpj12rs9uxLw",
        },
        {
          id: 2,
          src: myPortfolio,
          demoLink: "https://example.com/demo2",
          codeLink: "https://example.com/code2",
        },
        {
          id: 3,
          src: navbar,
          demoLink: "https://example.com/demo2",
          codeLink: "https://example.com/code2",
        },
        {
          id: 4,
          src: budgetTracker,
          demoLink: "https://example.com/demo2",
          codeLink: "https://example.com/code2",
        },
        {
          id: 5,
          src: quizGame,
          demoLink: "https://example.com/demo2",
          codeLink: "https://example.com/code2",
        },
        {
          id: 6,
          src: todoList,
          demoLink: "https://example.com/demo2",
          codeLink: "https://example.com/code2",
        },
      ];
      const handleDemoClick = (demoLink) => {
        window.open(demoLink, '_blank'); 
      };
    
      const handleCodeClick = (codeLink) => {
        window.open(codeLink, '_blank'); 
      };

  return (

    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-20 portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                 onClick={() => handleDemoClick(demoLink)}

                >
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                 onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Portfolio;