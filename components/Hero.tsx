import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
  return (
    <>
   <div className="mx-auto overflow-hidden">
  <Carousel>
    <CarouselContent>
      <CarouselItem className="relative">
        <img src="/bg3.jpg" alt="Episode 1" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-white lg:text-4xl font-bold mb-2 sm:text-xs" >Episode 1: The Awakening</h2>
            <p className="text-white lg:text-lg sm:text-xs">
              Dive into the thrilling world of adventure as the story unfolds with unexpected twists.
            </p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem className="relative">
        <img src="/bg2.jpg" alt="Episode 2" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-white lg:text-4xl font-bold mb-2 sm:text-xs">Episode 2: The Encounter</h2>
            <p className="text-white lg:text-lg sm:text-xs">
              Witness the heroes face new challenges as alliances are formed and enemies revealed.
            </p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem className="relative">
        <img src="/bg4.jpg" alt="Episode 3" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-white lg:text-4xl sm:text-xs font-bold mb-2">Episode 3: The Final Stand</h2>
            <p className="text-white  lg:text-lg sm:text-xs ">
              The climax of the season brings intense battles and shocking revelations.
            </p>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-opacity-75  rounded-full shadow-lg transition duration-300" />
    <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2 cursor-pointerbg-opacity-75  rounded-full shadow-lg transition duration-300" />
  </Carousel>
</div>





    </>
  )
}

export default Hero