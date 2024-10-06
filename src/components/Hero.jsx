import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[1000px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p className={"text-gray-800 text-2xl"}>Welcome to</p>
                <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800'>Jeet<span className='text-black'>Fit</span></h1>
            </div>
            <p className='text-lg md:text-xl font-light text-gray-900'>I hereby acknowledgement that I may become <span className='text-purple-700 font-semibold italic '>unbelievably healthy</span> and accept all risks of becoming the local <span className='text-purple-700 font-semibold italic'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}