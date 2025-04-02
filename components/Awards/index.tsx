"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const awards = [
  {
    year: "2015",
    title: "Sony World Photography Awards",
    image: "https://img.freepik.com/free-photo/closeup-hands-checking-film-camera_53876-15922.jpg?t=st=1743402565~exp=1743406165~hmac=056e6bbb324c1939c8f93275bbf37d195052cfc9c0862f516d9fb7fddb47e33d&w=996",
    description:
      "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settles into a tranquil serenity.",
  },
  {
    year: "2017",
    title: "Travel Photographer Of The Year",
    image: "https://img.freepik.com/free-photo/woman-holiday-journey-travel-relaxation_53876-42668.jpg?t=st=1743402701~exp=1743406301~hmac=4a4eaee3a21c27092074d60d60f6e7f1ee328c0c493655930c9f2032ab338764&w=996",
    description:
      "A breathtaking journey through the world's most remote locations, capturing the essence of adventure and wanderlust.",
  },
  {
    year: "2022",
    title: "Magnum Photography Awards",
    image: "https://img.freepik.com/free-photo/ice-cream-waffle-with-candies_140725-6231.jpg?t=st=1743403655~exp=1743407255~hmac=062665e279648f13a1ca96d760f0a64062eaa3bafe73f9d5518f09f370650011&w=900",
    description:
      "Honoring the art of documentary photography, bringing compelling visual stories to the world.",
  },
  {
    year: "2023",
    title: "International Photography Awards",
    image: "https://img.freepik.com/free-photo/young-man-taking-selfie-his-friends-while-traveling-urban-together_1150-4598.jpg?t=st=1743403681~exp=1743407281~hmac=d9cb79b9bf70bc5925c9b7dac0789a4e56f17955d16f69ca5691f2a1d5919954&w=996",
    description:
      "Recognizing talent and innovation in photography, celebrating the finest visual narratives of the year.",
  },
];

export default function AwardsTimeline() {
  const [selectedAward, setSelectedAward] = useState(awards[0]);

  return (
    <section className="container mx-auto text-white ">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className="text-gray-400 text-sm">
        <p className="mb-2">(04)</p>
        <h3 className="text-lg font-medium">Award</h3>
        
      </div>

      
      <div className="">
        <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-500 leading-tight">
          <span className="font-medium text-white">Award</span> is a pixel that reflecting our ongoging     <span className="font-medium text-white"> dedication</span> most 
          <span className="font-medium text-white"> innovation</span> and excellence
        </h2>
     
      </div>
      </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8  text-white min-h-screen py-10">
      {/* Left Side */}
      <div className="space-y-4 lg:col-span-2 md:col-span-2">
        {awards.map((award) => (
          <div
            key={award.year}
            className={`p-5 flex items-center justify-between cursor-pointer rounded-lg transition-all duration-300 relative group border-b border-[#373833] ${
              selectedAward.year === award.year ? "bg-[#373833] text-white" : "bg-transparent hover:bg-gray-300 hover:text-gray-300"
            }`}
            onMouseEnter={() => setSelectedAward(award)}
          >
            <div>
              <h3 className="text-xl">{award.year}</h3>
              <p className="md:text-xl text-md md:hidden block group-hover:text-white text-gray-400 transform transition-transform duration-300">{award.title}</p>
            </div>
            <p className="text-2xl hidden md:block group-hover:text-white text-gray-400 transform transition-transform duration-300">{award.title}</p>
            <FaArrowRight className="group-hover:bg-white group-hover:text-black p-3 md:w-14 w-10 h-10 border md:h-14 rounded-full transform transition-transform duration-300 group-hover:rotate-[-50deg]  text-gray-400" />
          </div>
        ))}
      </div>
      
      {/* Right Side */}
      <div className="flex flex-col lg:col-span-1 md:col-span-2">
        <Image width={1000}
          height={400}
          src={selectedAward.image}
          alt={selectedAward.title}
          className="rounded-lg w-full lg:max-w-xl object-cover shadow-lg"
        />
        <h2 className="text-xl mt-6">{selectedAward.title}</h2>
        <p className="text-gray-400 mt-3 lg:max-w-lg">{selectedAward.description}</p>
      </div>
    </div>
    </section>
  );
}
