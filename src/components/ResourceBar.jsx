import React from 'react'
import { FaLinkedin } from "react-icons/fa";


const ResourceBar = () => {
  return (
    <div className='flex flex-row gap-16 justify-center my-10 py-10 bg-sage w-full'>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg' >
            <a className='flex flex-row items-center gap-1 p-2 rounded-lg  ' href='www.linkedin.com' >
                < FaLinkedin color='#FFFFFF' size={40}/>
                <div className='flex flex-col bg-inherit text-whiteBF'>
                    <h1>
                        LinkedIn
                    </h1>
                    <span>
                        Lorem ipsulum
                    </span>
                </div>
            </a>
            
        </div>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg' >
            <a className='flex flex-row items-center gap-1 p-2 rounded-lg ' href='www.linkedin.com'>
                < FaLinkedin color='#FFFFFF' size={40}/>
                <div className='flex flex-col bg-inherit text-whiteBF'>
                    <h1>
                        LinkedIn
                    </h1>
                    <span>
                        Lorem ipsulum
                    </span>
                </div>
            </a>
            
        </div>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg' >
            <a className='flex flex-row items-center gap-1 p-2 rounded-lg ' href='www.linkedin.com'>
                < FaLinkedin color='#FFFFFF' size={40}/>
                <div className='flex flex-col bg-inherit text-whiteBF'>
                    <h1>
                        LinkedIn
                    </h1>
                    <span>
                        Lorem ipsulum
                    </span>
                </div>
            </a>
            
        </div>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg' >
            <a className='flex flex-row items-center gap-1 p-2 rounded-lg ' href='www.linkedin.com'>
                < FaLinkedin color='#FFFFFF' size={40}/>
                <div className='flex flex-col bg-inherit text-whiteBF'>
                    <h1>
                        LinkedIn
                    </h1>
                    <span>
                        Lorem ipsulum
                    </span>
                </div>
            </a>
            
        </div>
    </div>
  )
}

export default ResourceBar