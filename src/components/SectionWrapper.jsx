import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title, id} = props
    return (
        <section id={id}
                 className={`min-h-screen flex flex-col gap-10 ${id === 'generate' ? 'bg-gradient-to-r from-gray-950 to-black' : 'bg-gradient-to-r from-gray-950 to-black'}`}>
            <div
                className={`py-10 flex flex-col gap-2 justify-center items-center p-4 ${id === 'generate' ? 'bg-white' : 'bg-black'}`}>
                <p className={`${id === 'generate' ? 'capitalize font-medium text-lg text-black' : 'capitalize font-medium text-lg text-white'}`}>{header}</p>
                <h2 className={`${id === 'generate' ? 'text-black font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl' : 'text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'}`}>{title[0]}
                    <span
                        className={`uppercase font-bold ${id === 'generate' ? 'text-purple-950' : 'text-red-800'} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}>
  {title[1]}
</span> {title[2]}</h2>
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 '>
                {children}
            </div>
        </section>
    )
}