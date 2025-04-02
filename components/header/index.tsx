"use client";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaRegSnowflake } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const toggleMobileDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileDropdown(!mobileDropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-50 pt-10">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 items-center">
            <div className="flex items-center md:pl-7 ml-4">
              <FaRegSnowflake className="md:text-lg text-xs" /> &nbsp;
              <span className="uppercase md:text-lg text-xs font-medium">
                MK Photography
              </span>
            </div>

            <div className="">
              <nav className="lg:bg-white/50 lg:backdrop-blur-md lg:shadow-md w-auto md:px-6 px-0 py-4 rounded-full flex items-center justify-between md:transform">
                {/* Desktop Navigation */}
                <div className="hidden pl-5 lg:flex items-center space-x-6">
                  <div
                    className="relative group"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <a
                      href="#"
                      className="text-[#02312F] font-bold hover:text-green-800 flex items-center space-x-1"
                    >
                      Pages
                      <IoIosArrowDown
                        size={20}
                        className="transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    </a>

                    {/* Desktop Dropdown */}
                    {showDropdown && (
                      <div className="z-10 absolute top-8 left-0 w-[650px] bg-white shadow-lg p-5 grid grid-cols-3 gap-4 rounded-md transition-all duration-300">
                        {/* Dropdown content */}
                      </div>
                    )}
                  </div>

                  <Link
                    href="#"
                    className="text-[#02312F] font-bold hover:text-green-800"
                  >
                    Works
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#02312F] font-bold hover:text-green-800"
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end text-end w-full lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="relative w-10 h-10 flex items-center justify-center"
                  >
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      className="relative w-6 h-5"
                    >
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "0%", rotate: 0 },
                          open: { top: "50%", rotate: 45 },
                        }}
                      />
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "50%", opacity: 1 },
                          open: { top: "50%", opacity: 0 },
                        }}
                      />
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "100%", rotate: 0 },
                          open: { top: "50%", rotate: -45 },
                        }}
                      />
                    </motion.div>
                  </button>
                </div>
              </nav>
            </div>

            {/* CTA Buttons */}
            <div className="lg:block hidden">
              <div className="group relative w-auto text-end flex justify-end">
                <Link
                  href="#"
                  className="relative rounded-full font-semibold px-6 py-4 shadow-lg overflow-hidden text-black bg-white transition-all duration-500 ease-in-out flex items-center gap-2 group"
                >
                  <span className="absolute inset-0 bg-primary-brown transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center gap-2 uppercase group-hover:text-white">
                    Back A Call
                  </span>
                </Link>
                <Link
                  href="#"
                  className="relative rounded-full font-semibold p-4 shadow-lg overflow-hidden text-black bg-white transition-all duration-500 ease-in-out flex items-center gap-2 group"
                >
                  <MdArrowOutward size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={closeMenu}
            />

            <motion.div
              className="relative h-full w-4/5 max-w-sm bg-white shadow-xl z-30"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.3,
              }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center text-black">
                    <FaRegSnowflake className="text-lg" />
                    <span className="uppercase ml-2">MK Photography</span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <FaTimes size={24} className="text-gray-700" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <nav className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <button
                        onClick={toggleMobileDropdown}
                        className="flex items-center justify-between w-full text-gray-800 hover:text-green-700 text-lg font-semibold"
                      >
                        <span>All Pages</span>
                        <IoIosArrowDown
                          size={20}
                          className={`transform transition-transform duration-200 ${
                            mobileDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-3 space-y-3 overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-2">
                              <Link href="/" className="block text-gray-700 hover:text-green-700" onClick={closeMenu}>
                                Homepage
                              </Link>
                              <Link href="/services" className="block text-gray-700 hover:text-green-700" onClick={closeMenu}>
                                Services
                              </Link>
                              <Link href="/about-us" className="block text-gray-700 hover:text-green-700" onClick={closeMenu}>
                                About
                              </Link>
                              <Link href="/projects" className="block text-gray-700 hover:text-green-700" onClick={closeMenu}>
                                Projects
                              </Link>
                              <Link href="/project-details" className="block text-gray-700 hover:text-green-700" onClick={closeMenu}>
                                Project Details
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link href="#" className="block text-gray-800 hover:text-green-700 text-lg font-semibold py-2" onClick={closeMenu}>
                      Works
                    </Link>
                    <Link href="/contact" className="block text-gray-800 hover:text-green-700 text-lg font-semibold py-2" onClick={closeMenu}>
                      Contact
                    </Link>
                  </nav>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="#"
                    className="block w-full text-center bg-[#02312F] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-800 transition-colors"
                    onClick={closeMenu}
                  >
                    Book A Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}