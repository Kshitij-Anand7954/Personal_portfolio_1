import React from "react";
import profilePic from "../assets/profilePic.png"
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})
    

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-16 text-6xl font-thin tracking-tight lg-mt-16
            lg-text-8xl">
                Kshitij Anand</motion.h1>
                <motion.span 
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                
                className="bg-gradient-to-r from-pink-300 via-slate-500 
                to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                className="my-2 mx-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                <a href="./Resume.pdf" download="Resume.pdf">
                  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Resume
                  </button>
                </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}
                src={profilePic}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
