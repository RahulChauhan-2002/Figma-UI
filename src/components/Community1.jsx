import React from 'react';

const Community1 = () => {
  return (
    <div className="flex flex-col my-5 gap-12 px-4 md:px-8 py-8 md:py-12 m-4">

      {/* 🟩 Top Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-[80%] md:w-[85%] h-auto max-h-[500px] object-contain"
            src="/assets/Frame.png"
            alt="Community Illustration"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 p-2">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Lorem ipsum dolor sit amet consectetur
            <br />
            <span className="text-green-700">adipisicing elit. Harum, ratione?</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus
            iste quidem dolor quia in labore voluptates aut voluptate nostrum.
          </p>
          <button className="w-32 h-10 rounded-xl bg-[#237D31] text-white flex items-center justify-center gap-2 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* 🟦 Bottom Section (2 Side-by-Side Boxes) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-2 md:px-4">

        {/* Left Box */}
        <div className="flex flex-col gap-3 p-6 shadow-lg rounded-lg w-full md:w-1/2 bg-white text-center">
          <h2 className="text-2xl font-semibold leading-snug">
            Helping a local
            <br />
            <span className="text-green-700">business reinvent itself</span>
          </h2>
          <p className="text-gray-600">
            We reached here with our hard work and dedication.
          </p>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/assets/Counts.png" alt="Statistics" className="w-[80%] md:w-[70%] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Community1;
