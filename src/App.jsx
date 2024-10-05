import Hero from "./components/Hero.jsx";
import Workout from "./components/Workout.jsx";
import Generator from "./components/Generator.jsx";
import {useState} from "react";
import {generateWorkout} from "./utils/functions.js";

function App() {
    const [workout, setWorkout] = useState(null);

    const [poison, setPoison] = useState('individual');
    const [muscles, setMuscles] = useState([]);
    const [goal, setGoal] = useState('strength_power');

    function updateWorkout() {

        if (muscles.length < 1) {
            return;
        }

        let newWorkout = generateWorkout({poison, muscles, goal});
        console.log(newWorkout);
        setWorkout(newWorkout);
    }

    return (
        <main
            className={"min-h-screen flex flex-col bg-gradient-to-r from-slate-950 to-slate-900 text-white text-sm sm:text-base"}>
            <Hero/>
            <Generator poison={poison}
                       muscles={muscles}
                       goal={goal}
                       setPoison={setPoison}
                       setGoal={setGoal}
                       setMuscles={setMuscles}
                       updateWorkout={updateWorkout}
            />
            {(workout) && <Workout workout={workout}/>}
        </main>
    )
}

export default App
