import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-full border-[2px] bg-black border-purple-950 border-solid purpleShadow duration-300'>
            <p>{text}</p>
        </button>
    )
}