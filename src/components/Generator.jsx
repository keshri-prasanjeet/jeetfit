import React, {useState} from 'react';
import SectionWrapper from "./SectionWrapper.jsx";
import {SCHEMES, WORKOUTS} from "../utils/swoldier.js";
import Button from "./Button.jsx";

function Header(props) {
    
    const {title, index, description} = props;
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex items-center justify-center gap-2"}>
                <p className={"text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400"}>{index}</p>
                <h4 className={"text-xl sm:text-2xl md:text-3xl"}>
                    {title}</h4>
            </div>
            <p className={'text-sm sm:text-base mx-auto'}>
                {description}</p>
        </div>
    )
}

const Generator = (props) => {

    
    const{goal, setGoal, muscles, setMuscles, poison, setPoison, updateWorkout} = props;

    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup){

        //unselecting the muscle by again clicking
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return;
        }

        if(muscles.length > 2){
            return;
        }
        if(poison !== 'individual'){
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }

        setMuscles([...muscles, muscleGroup]);
        if(muscles.length === 2) setShowModal(false);
    }

    return (
        <SectionWrapper header={"Plan your fast"} title={["It's", "Fast", "o'clock"]}>
            <Header index={'01'} title={'Pick your poison'} description={'Select the fast you wish to experience'}></Header>
            <div className={"grid grid-cols-2 gap-4 sm:grid-cols-4"}>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setPoison(type)
                            setMuscles([])
                        }} key={typeIndex}
                                className={"bg-slate-950 border-2 border-blue-400  px-8 py-3 rounded-lg duration-200 hover:border-green-300 " + (type === poison ? 'border-blue-600 bg-white text-black duration-500' : 'border-blue-400')}>
                            <p className={"capitalize"}>{type.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on Targets'} description={'Select the brainpower stronger than the gods'}></Header>
            <div className={"bg-slate-950 border border-solid border-blue-400 rounded-lg duration-200 hover:border-blue-600 flex flex-col"}>
                <button onClick={() => {
                    toggleModal()
                }} className={"relative flex items-center justify-center p-3 "}>
                    <p className={"capitalize"}>{muscles.length === 0 ? 'Select Muscle groups' : muscles.join(' ')}</p>
                    <i className={"fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"}></i>
                </button>
                {showModal && (
                    <div className={"flex flex-col px-3"}>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map(
                            (muscleGroup, muscleGroupIndex) => {
                                return (
                                    <button key={muscleGroupIndex} className={"hover:text-blue-400 duration-200 " +
                                        
                                        (muscles.includes(muscleGroup) ? 'text-green-400 hover:text-green-400' : '')
                                    } onClick={() => {
                                        updateMuscles(muscleGroup)
                                    }}>
                                        <p className={"uppercase"}>
                                            {muscleGroup}
                                        </p>
                                    </button>
                                )
                            })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Pick your poison'} description={'Select your ultimate objective'}></Header>
            <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} key={schemeIndex}
                                className={"bg-slate-950 border border-blue-400 px-8 py-3 rounded-lg duration-200 hover:border-green-300 " + (scheme === goal ? 'border-blue-600 bg-white text-black duration-500' : 'border-blue-400')}>
                            <p className={"capitalize"}>{scheme.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}/>
        </SectionWrapper>
    );
};

export default Generator;