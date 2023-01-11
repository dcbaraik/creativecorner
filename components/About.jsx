import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto bgc md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who We Are ?</h2>
          <p className='py-2 text-gray-600'>
          Creative Corner is a professional software development company based in India that endeavour on highly proficient, timely delivered, and cost-effective software and website development services. We are highly experienced in offering offshore software development and project management. Some of our services include Strategic Technology Consulting, System Integration & Software Development, Enterprise Resource Planning (ERP), Client server application, E-commerce software development, Content management development, E-governance software, Web application development, E- Commerce development, Database application development.
          </p>
          <h4 className=''>Our Vision</h4>
          <p className='py-2 text-gray-600'>
          As a company we aspire to become one of the top boutique global technology consulting firms – born and nurtured from India, solving tough and pressing global problems by the use of modern technologies. At NetTantra our focus is on making the world a more decentralised, democratic and sustainable place through use of technology. We partner with organisations as well as individuals from around the globe in making a dent in the world we live in by creating solutions that eventually contribute to making lives easier.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Contact us
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
