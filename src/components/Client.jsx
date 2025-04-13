import React from 'react';

const Client=()=>{
    return (
        <div className="flex flex-col items-center justify-center gap-5 mb-24">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl">Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className="flex flex-wrap justify-center gap-24">
                <img src="/assets/clientLogo.png" alt=""  />
                <img src="/assets/client-image1.png" alt="" />
                <img src="/assets/client-image2.png" alt="" />
                <img src="/assets/client-image3.png" alt="" />
                <img src="/assets/client-image4.png" alt="" />
                <img src="/assets/client-image5.png" alt="" />
                <img src="/assets/client-image6.png" alt=""/>
            </div>
        </div>

    )
}

export default Client