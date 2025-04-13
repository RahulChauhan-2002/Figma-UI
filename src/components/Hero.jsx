import React from 'react';

const Hero = () => {
  return (
    <div className="relative mb-28"> {/* 1. Make the container relative */}
      <div className="flex justify-between mt-24">
        <div className="flex flex-col gap-4 p-8">
          <h1 className="font-bold text-6xl">
            Lessons and insights <br /> from 8 years
          </h1>
          <p>Where to grow your business as photographer: site or social media?</p>
          <button className="w-20 h-8 rounded-sm bg-[#237D31] text-white flex items-center justify-center gap-2 cursor-pointer">
            Register
          </button>
        </div>

        <div className="flex justify-end">
          <img src="/assets/full_image.png" alt="Hero" />
        </div>
      </div>

      {/* 2. Add the bottom-centered image here */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
        <img src="/assets/Dot.png" alt="Bottom Center Image" />
      </div>
    </div>
  );
};

export default Hero;
