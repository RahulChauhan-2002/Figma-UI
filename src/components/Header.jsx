import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';


const Header =()=>{
    return (
        <div className='max-w-7xl mx-auto bg-white '>
            <div className='flex justify-between items-center p-4'>
                <div className='flex'>
                    <img src="/assets/Icon.png" alt="Icon" />
                    <img src="/assets/Nexcent.png" alt="" />
                </div>
                <div>
                    <div className='flex justify-between items-center gap-6'>
                        <ul className='flex gap-4 cursor-pointer'>
                            <Link to="/"> <li>Home</li></Link>
                            <Link to="/Client"> <li>Features</li></Link>
                            <Link to="/Community"><li>Community</li></Link>
                            <Link to="/Community1"><li>Blog</li></Link>
                        </ul>
                        <div className='items-center'>
                            <button className="w-46 h-12 rounded-xl bg-[#237D31] text-white flex items-center justify-center gap-2 cursor-pointer">
                            Register Now 
                            <ArrowRight className="w-4 h-4 text-white" />
                            </button>     
                       </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
export default Header;