import React from 'react';
import SectionWrapper from "./SectionWrapper.jsx";
import ExcerciseCard from "./ExcerciseCard.jsx";

const Workout = (props) => {
    const {workout} = props
    return (
        <SectionWrapper header={"Welcome to"} title={["the", "HUNGER", "games"]}>
            <div className={"flex flex-col gap-4"}>
                {workout.map((excercise, i) => {
                    return (
                        <ExcerciseCard key={i} excercise={excercise} index={i}/>
                    )
                })}
            </div>
        </SectionWrapper>
    );
};

export default Workout;