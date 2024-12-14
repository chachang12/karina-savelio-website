import React from 'react'
import kalogo from '../assets/ka-logo.png'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col w-[200px]'>
            <img src={kalogo} className='w-[50px]'/>   
        </div>

        <div className='flex gap-8 justify-center items-center'>
            <a href='/about' className='hover:text-mintGreen'>
                About
            </a>
            <a href='/about' className='hover:text-mintGreen'>
                Services
            </a>
            <a href='/about' className='hover:text-mintGreen'>
                Services
            </a>
            <a href='/about' className='hover:text-mintGreen'>
                References
            </a>
        </div>

        <div className='w-[200px] flex justify-end'>
            <a href='/contact' className='px-4 py-2 outline outline-1 outline-sage rounded-full text-sage'>
                Contact
            </a>
        </div>

        
    </div>
  )
}

export default Navbar