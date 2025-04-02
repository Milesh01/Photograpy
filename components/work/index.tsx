'use client';
import { MdArrowOutward } from "react-icons/md";
import React from 'react';
import Link from "next/link";
import CardSlider from "./cards";


const Work = () => {
  return (
    <section className="container mx-auto  text-white py-20">
      <div className='grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-10 items-center'>
      <div className="text-gray-400 text-sm lg:col-span-1 md:col-span-2">
        <p className="mb-2">(03)</p>
        <h3 className="text-lg font-medium">Work</h3>

        <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-500 leading-tight mt-4">
          <span className="font-medium text-white">Photography</span> is driven by a deep passion for  
          <span className="font-medium text-white"> capturing life</span> most 
          <span className="font-medium text-white"> precious moments</span> with artistry and a touch of magic
        </h2>
        
      </div>
      
      <div className="flex justify-end lg:col-span-1 md:col-span-2">
     <div>
     <p className="text-md leading-relaxed lg:max-w-[420] text-gray-400">
          We ardently strive to encapsulate life most precious moments, weaving a tapestry of artistry and a hint of enchanting magic, with the timeless essence of the human experience.
        </p>
       <div className="flex items-center">
       <button className="mt-6 px-6 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300">
          Learn More 
        </button>
        <Link href="#" className="rounded-full mt-6 font-semibold p-3 shadow-lg overflow-hidden text-black 
             bg-white transition-all duration-500 ease-in-out flex items-center gap-2 group">
                  <MdArrowOutward size={25} />
                  </Link>
       </div>
     </div>
      </div>
      </div>
     
     <CardSlider/>
    </section>
  );
};

export default Work;