import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import {SCHEMES, WORKOUTS} from '../utils/swoldier'
import Button from './Button'

function Header(props) {
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-2xl sm:text-3xl md:text-5xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
    const [showModal, setShowModal] = useState(false)

    // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'HUGE', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }}
                                className={'bg-black border-2 duration-300 px-4 hover:border-white hover:bg-white hover:text-black py-3 rounded-full ' + (type === poison ? ' border-white bg-white text-black' : ' border-purple-800')}
                                key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."}/>
            <div className='bg-black border border-solid border-purple-700 rounded-md flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className="text-xl">
                        {muscles.length === 0 ? (
                            'Select muscle groups'
                        ) : (
                            muscles.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-purple-700 text-white rounded-full px-3 py-1 m-1">
                {muscle}
            </span>
                            ))
                        )}
                    </p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>

                <div
                    className={`transition-all duration-300 ease-in-out ${showModal ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup);
                                }}
                                        key={muscleGroupIndex}
                                        className={`hover:text-black hover:bg-white duration-200 ${(muscles.includes(muscleGroup) ? 'text-white bg-purple-950' : '')}`}>
                                    <p className='uppercase text-lg p-0.8'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }}
                                className={'bg-black border-2 duration-300 px-4 hover:border-white hover:bg-white hover:text-black py-3 rounded-full  ' + (scheme === goal ? ' border-white bg-white text-black' : ' border-purple-800')}
                                key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>

    )
}