'use client';
import { MdArrowOutward } from "react-icons/md";
import React from 'react';
import Link from "next/link";


const Contact = () => {
  return (
    <section className="container mx-auto bg-primary-brown text-white px-5 py-9 rounded-xl">
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-center justify-between'>
      <div className="text-gray-400 text-sm lg:col-span-2 md:col-span-1">
        <p className="mb-2">(05)</p>
        <h3 className="text-lg font-medium">Contact</h3>

        <h2 className="text-xl lg:text-5xl text-gray-500 leading-tight mt-4">
        Lets   <span className="font-medium text-white">Discuse</span> your vision  
        <div className="flex items-center">
       <button className="lg:text-xl text-lg mt-6 px-6 py-2 border border-white rounded-full flex items-center gap-2 bg-white text-black hover:text-white hover:bg-transparent transition duration-300">
          Lets Talk
        </button>
        <Link href="#" className="rounded-full mt-6 font-semibold p-3 shadow-lg overflow-hidden text-black 
             bg-white transition-all duration-500 ease-in-out flex items-center gap-2 group">
                  <MdArrowOutward size={25} />
                  </Link>
                  <span className="font-medium text-white ms-3"> with us</span> 
       </div>
          
        </h2>
      </div>
      
      <div className="lg:col-span-1  md:text-end">
     <div className="lg:max-w-[420] text-gray-300">
     <div>
                <p className="">456 Oak Avenue,</p>
                <p className="">Cityville, MA 56789,</p>
                <p className="">United States</p>
                <p className="">+1 (555) 125-4567</p>
                <p className="">mk@hello.com</p>
              </div>
     </div>
      </div>
      </div>

      <footer className="md:mt-12 border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="">
              <h2 className="text-2xl font-bold text-white">MK Photography</h2>
            </div>

            <div className="hidden gap-8 lg:block">
  <div className="flex gap-5 text-gray-200">
    <Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link>
    <Link href="/projects" className="hover:text-white transition-colors duration-200">Project</Link>
    <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
    <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms & Condition</Link>
  </div>
</div>
            <div className="">
            <p className="text-sm text-gray-200 md:mt-0 mt-4">©mk 2025. All Rights Reserved</p>
          </div>
          </div>

          
        </footer>
    </section>
  );
};

export default Contact;