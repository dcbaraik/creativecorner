import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
  return (
    <><Carousel variant='dark'>
      <Carousel.Item interval={1000}>
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='hc'>
              <p className='uppercase text-sm tracking-widest text-gray-600'>
                LET&#39;S BUILD SOMETHING WITH CREATIVE CORNER
              </p>
              <h1 className='py-4 text-gray-700'>
                Our<span className='text-[#5651e5]'> Services</span>
              </h1>
              <h1 className='py-2 text-gray-700'>Web Application</h1>
              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                Delivering on-demand Web applications developement Service for clients by leveraging the latest technologies.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='hc'>
              <p className='uppercase text-sm tracking-widest text-gray-600'>
                LET&#39;S BUILD SOMETHING WITH CREATIVE CORNER
              </p>
              <h1 className='py-4 text-gray-700'>
                Our<span className='text-[#5651e5]'> Services</span>
              </h1>
              <h1 className='py-2 text-gray-700'>Graphics Designing</h1>
              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                Delivering on-demand Graphics Design  Service for startups and enterprise clients by leveraging the latest technologies.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='hc'>
              <p className='uppercase text-sm tracking-widest text-gray-600'>
                LET&#39;S BUILD SOMETHING WITH CREATIVE CORNER
              </p>
              <h1 className='py-4 text-gray-700'>
                Our<span className='text-[#5651e5]'> Services</span>
              </h1>
              <h1 className='py-2 text-gray-700'>Products Designing</h1>
              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                Delivering on-demand Products Design Service for startups and enterprise clients by leveraging the latest technologies.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='hc'>
              <p className='uppercase text-sm tracking-widest text-gray-600'>
                LET&#39;S BUILD SOMETHING WITH CREATIVE CORNER
              </p>
              <h1 className='py-4 text-gray-700'>
                Our<span className='text-[#5651e5]'> Services</span>
              </h1>
              <h1 className='py-2 text-gray-700'>Digital Marketing</h1>
              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                Delivering on-demand Digital Marketing Services for startups and enterprise clients by leveraging the latest technologies.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Main;
