import React from 'react';

const Card = ({ children, active, handleclick }) => {

    const classActive = active ? "border-blue-500 hover:border-blue-500 focus:border-blue-500" : '';

    return (
        <button onClick={handleclick} className={`text-left w-full px-4 md:px-6 cursor-pointer rounded-lg border-2 py-6 border-gray-100 hover:border-gray-300 focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 ${classActive}`}>
            <div className="w-full flex flex-wrap justify-between items-center">
                {children}
            </div>
        </button>
    );
}

export default Card;