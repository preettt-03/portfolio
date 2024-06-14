import React from 'react'; 

const About = () => {
  return (
    
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  py-12"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className='text-3xl font-bold'>
Hey! I'm Preet Patel
      </p>

      <p className="text-xl mt-8">
      I am currently pursuing MCA from International Institute Of Professional Studies(IIPS), 
      DAVV Indore. I am a good Listner and a Great Learner. I've always had a passion for Learning new things , 
      and I've been lucky enough to turn that passion into a career. Whether it's designing websites, writing code, or crafting digital experiences, 
      I love every aspect of what I do. What drives me is the opportunity to create something meaningful. I believe that good design isn't just about making things look pretty; it's about solving problems and making people's lives easier. 
      That's why I'm constantly learning and honing my skills, so I can deliver the best possible results for my clients and users. Outside of work, you'll usually find me ,Whether it's hiking in the great outdoors, playing Cricket, or getting lost in a good book, 
      I'm always up for an adventure and much more.... What sets me apart is my dedication to excellence. I'm not satisfied with just meeting expectations; I want to exceed them. That means paying attention to the details,
       thinking critically about every decision, and never settling for anything less than my best. But enough about me I want to hear from you! Whether you have a project in mind or just want to chat, don't hesitate to get in touch. I'm always excited to meet new people and explore new opportunities. Thanks for taking the time to learn a little bit about me. Thank you!
      </p>

      <br />

      {/* <p className="text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        pariatur, vel similique sint, nobis aspernatur ut praesentium
        explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
        quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
        Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
        magni quo! Eum cupiditate debitis labore.
      </p> */}
    </div>
  </div>
  )
}

export default About;