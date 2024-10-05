import React from 'react';

const Button = (props) => {

    // eslint-disable-next-line react/prop-types
    const {text, func} = props;

    return (
        <button
            onClick={func}
            className={"px-8 py-4 mx-auto rounded-full border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-300"}>
            <p>{text}</p>
        </button>
    );
};

export default Button;