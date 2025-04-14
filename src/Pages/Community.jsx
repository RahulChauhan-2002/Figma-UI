import React from 'react';

const Community = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-snug">
          Manage your entire community
          <br />
          <span className="pl-6">in a single system</span>
        </h1>
        <p className="mt-2 text-gray-600">Who is Nexcent suitable for?</p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-12 pb-10">
        {/* Card 1 */}
        <div className="p-6 shadow-2xl flex flex-col items-center text-center max-w-xs">
          <img src="/assets/community-image1.png" alt="Membership Organisations" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Membership<br />Organisations</h2>
          <p>
            Our membership management software provides full automation of<br />
            membership renewals and payment
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 shadow-2xl flex flex-col items-center text-center max-w-xs">
          <img src="/assets/community-image2.png" alt="National Associations" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">National<br />Associations</h2>
          <p>
            Our membership management software provides full automation of<br />
            membership renewals and payment
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 shadow-2xl flex flex-col items-center text-center max-w-xs">
          <img src="/assets/community-image3.png" alt="Clubs and Groups" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Clubs And<br />Groups</h2>
          <p>
            Our membership management software provides full automation of<br />
            membership renewals and payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
