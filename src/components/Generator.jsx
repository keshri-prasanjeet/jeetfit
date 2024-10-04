import React, {useState} from 'react';
import SectionWrapper from "./SectionWrapper.jsx";
import {WORKOUTS} from "../utils/swoldier.js";

function Header(props){
    const {title, index, description} = props;
    return(
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

const Generator = () => {

    let [showModal, setShowModal] = useState(false);

    function toggleModal(){
        setShowModal(!showModal);
    }

    return (
        <SectionWrapper header={"Plan your fast"} title={["It's", "Fast" ,"o'clock"]}>
            <Header index={'01'} title={'Pick your poison'} description={'Select the fast you wish to experience'}></Header>
            <div className={"grid grid-cols-2 gap-4 sm:grid-cols-4"}>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button key={typeIndex} className={"bg-slate-950 border border-blue-400 " +
                            "py-3 rounded-lg duration-200 hover:border-blue-600"}>
                            <p className={"capitalize"}>{type.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on Targets'} description={'Select the brainpower stronger than the gods'}></Header>
            <div className={"bg-slate-950 border border-solid border-blue-400 rounded-lg duration-200 hover:border-blue-600 flex flex-col"}>
                <button onClick={() => {

                }} className={"relative flex items-center justify-center p-3 "}>
                    <p>Select Muscle groups</p>
                    <i className={"fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"}></i>
                </button>
                {showModal && (
                    <div>
                        modal
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Generator;