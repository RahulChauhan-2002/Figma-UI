import React from 'react';

const Design = () => {
  return (
    <div className="flex flex-col my-5 md:flex-row items-center gap-8 px-4 md:px-12 py-8 md:py-12 bg-white">

      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/design-image.png"
          alt="Design Main"
          className="w-[50%] max-w-md object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        
        {/* Main Text */}
        <p className="text-gray-700 text-justify leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas ipsa nemo harum a neque? Adipisci vitae nam nesciunt sunt laboriosam inventore fugiat perferendis cumque? Iusto expedita autem nulla dolorum ullam dicta dolores corrupti inventore! Doloribus fugiat eligendi rem eaque eos. Ad dolores temporibus sed quod a laborum quas! Qui.
        </p>

        {/* Author Section */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-black">Tim Smith</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquid.
          </p>
        </div>

        {/* Frame Image */}
        <div>
          <img
            src="/assets/Frame-design.png"
            alt="Companies"
            className="w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
