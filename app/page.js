// ./app/page.js
"use client";
import myimg from '../public/Images/pic.jpeg';
import React, { useState } from 'react';
import Contact from '@/components/Contact';
import VideoPlayer from '@/components/videoplayer';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

function Page() {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showSohailIlyasSection, setShowSohailIlyasSection] = useState(true);
  const [showContactSection, setShowContactSection] = useState(false);

  const toggleAboutSection = () => {
    setShowAboutSection(!showAboutSection);
    setShowSohailIlyasSection(false);
    setShowContactSection(false);
  };

  const toggleSohailIlyasSection = () => {
    setShowSohailIlyasSection(!showSohailIlyasSection);
    setShowAboutSection(false);
    setShowContactSection(false);
  };

  const toggleContactSection = () => {
    setShowContactSection(!showContactSection);
    setShowAboutSection(false);
    setShowSohailIlyasSection(false);
  };

  return (
    <div className="w-full relative">
      <VideoPlayer className="h-screen w-screen object-cover" />

      {/* Sohail Ilyas section */}
      {showSohailIlyasSection && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white transition-opacity">
          <h1 className={`text-4xl sm:text-6xl lg:text-8xl font-bold mb-2 animate-pulse ${showAboutSection ? 'opacity-0' : 'opacity-100'}`}>Sohail Ilyas</h1>
          <p className={`text-xl sm:text-3xl lg:text-4xl animate-pulse ${showAboutSection ? 'opacity-0' : 'opacity-100'}`}>I am a software engineer</p>

          <div className='flex items-center justify-center'>
            <ArrowDownIcon onClick={() => toggleAboutSection()} className='w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-pulse cursor-pointer' />
          </div>
        </div>
      )}

      {/* About section */}
      {showAboutSection && (
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2'>
          <Image src={myimg} alt='error' className='rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64' />
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">Web Developer</h1>
            <p className="text-lg sm:text-xl">
              Hi there! I'm a passionate web developer with expertise in creating modern and engaging web applications.
            </p>
            <p className="text-lg mt-2 sm:text-xl">
              My skills include front-end technologies like React.js, HTML, CSS, and back-end technologies like Node.js.
            </p>
            <p className="text-lg mt-2 sm:text-xl">
              In addition to my work in software development, I have a deep passion for:
            </p>
            <ul className="text-lg sm:text-xl list-disc list-inside mt-2">
              <li>Continuous learning and exploring new technologies.</li>
              <li>Building creative and user-friendly interfaces.</li>
              <li>Contributing to open-source projects and the developer community.</li>
            </ul>
            <p className="text-lg mt-4 sm:text-xl">
              Outside of coding, I enjoy spending my time on:
            </p>
            <ul className="text-lg sm:text-xl list-disc list-inside mt-2">
              <li>Reading books and articles on technology and self-improvement.</li>
              <li>Engaging in outdoor activities like hiking and cycling.</li>
              <li>Exploring new places and experiencing different cultures.</li>
            </ul>
            <div className='flex items-center justify-center'>
              <ScrollLink
                to="contact-section"
                smooth={true}
                duration={1000}  
              >
                <ArrowDownIcon onClick={() => toggleContactSection()} className='w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-pulse' />
              </ScrollLink>
            </div>
          </div>
        </div>
      )}

      {/* Contact section */}
      {showContactSection && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-2/3 lg:w-1/3'>
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Page;
