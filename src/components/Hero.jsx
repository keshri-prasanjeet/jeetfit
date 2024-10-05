import React from 'react';
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <div className={"min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4"}>
            <div className={"flex flex-col gap-4"}>
                <p className={"text-lg"}>GET FIT FAST</p>
                <h1 className={"italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}>by <span
                    className={"text-blue-400"}> fasting</span></h1>
            </div>
            <p className={"text-xl font-light"}>Fasting has been natural for humans for <span
                className={"text-blue-400 font-medium"}>eons</span>, our body and mind needs some time off food for <span className={"text-blue-400 font-medium"}>health and rejuvenation</span>. Let us get fit for a <span className={"text-blue-400 font-medium"}>healthier life</span> and <span className={"text-blue-400 font-medium"}>lose some stubborn fat</span> along the way.</p>
            <Button text={"let's begin"}/>
        </div>
    );
};

export default Hero;