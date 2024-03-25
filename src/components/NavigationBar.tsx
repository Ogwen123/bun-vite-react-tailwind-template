import React from 'react'

const NavigationBar = () => {
    return (
        <div className='flex items-center px-[20px] h-[10vh] bg-bgdark text-xl'>
            <div className='bg-gradient-to-r from-main to-[#f57c00] text-transparent bg-clip-text text-5xl h-full flex items-center'>Ogwen.eu.org</div>
            <a href="http://github.com/Ogwen123" target='_blank'>
                Github
            </a>
        </div>
    )
}

export default NavigationBar