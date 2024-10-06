import React from 'react';

const KeshriXLabsLogo = () => {
    return (
        <div className="absolute top-2 left-2">
            <img
                src="/KeshriXLabs_expanded_logo.png" // Correct path from public folder
                alt="KeshriXLabs logo"
                className="w-32 h-auto sm:w-40 md:w-54 lg:w-64"
            />
        </div>
    );
};

export default KeshriXLabsLogo;