import React from 'react'
import SectionWrapper from './SectionWrapper.jsx'
import ExerciseCard from './ExcerciseCard.jsx'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'WORKOUT', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}