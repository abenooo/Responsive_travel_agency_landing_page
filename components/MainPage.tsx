import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Eth from '../public/images/3.jpg'
// import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div>
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
              Explore Ethiopia
            </h1>
            <p className="text-base text-gray-500 md:text-xl">
              Traveling is one of the best way to enhance personal growth. It
              enables you to do things different from your daily routine
              activities
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              <button className=" h-14  cursor-pointer rounded-xl  bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
                Book Now !
              </button>
              <button className="h-14 cursor-pointer rounded-xl  border border-violet-600 px-8 font-semibold text-violet-600 hover:bg-violet-900 hover:text-white hover:shadow-xl">
                Get a Price
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={Eth}
              width={500}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        {/* <Trending /> */}
      </div>
    </>
  )
}

export default MainPage
