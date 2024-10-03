import Hero from "./components/Hero.jsx";
import Workout from "./components/Workout.jsx";
import Generator from "./components/Generator.jsx";

function App() {

    return (
        <main className={"min-h-screen flex flex-col bg-gradient-to-r from-slate-950 to-slate-900 text-white text-sm sm:text-base"}>
            <Hero/>
            <Workout/>
            <Generator/>
        </main>
    )
}

export default App
