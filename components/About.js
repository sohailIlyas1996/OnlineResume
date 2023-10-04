// ./components/About.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/solid'; // Use solid version for Heroicons v2

function About({ toggleContactSection }) {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2'>
      <Image src={myimg} alt='error' className='rounded-full' />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Web Developer</h1>
        <p className="text-lg">
          Hi there! I'm a passionate web developer with expertise in creating modern and engaging web applications.
        </p>
        <p className="text-lg mt-2">
          My skills include front-end technologies like React.js, HTML, CSS, and back-end technologies like Node.js.
        </p>
        <div className='flex items-center justify-center'>
          <Link href="#contact-section">
            <ArrowDownIcon onClick={toggleContactSection} className='w-20 h-20 animate-pulse' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
