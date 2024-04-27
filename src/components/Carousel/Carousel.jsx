import React, { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { News } from '../JS/Carousel';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalNews = News.length;
    const next = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalNews);
    };
    const prev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalNews) % totalNews);
    };
  return (
    
    <div className='flex flex-row h-svh w-full justify-between my-12 items-center bg-black'>
      <div className='flex-grow flex items-center justify-center h-full'>
        <GoChevronLeft color='white' size={60} onClick={prev} className="z-10 cursor-pointer"  />
        <div
          className='h-full w-full bg-cover bg-center flex items-end '
          style={{ backgroundImage: `url(${News[currentIndex].img})` }}
        >
          <div className="text-white p-4 bg-black bg-opacity-60 w-full flex justify-center">
            <h2 className="font-bold">{News[currentIndex].description}</h2>
          </div>
        </div>
      </div>
        <GoChevronRight color='white' size={60} onClick={next} className="z-10 cursor-pointer" />

    </div>
  )
}
