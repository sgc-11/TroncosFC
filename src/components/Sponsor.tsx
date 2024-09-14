// src/components/Sponsor.tsx
import React, { useState } from 'react';

interface SponsorProps {
    name: string;
    entryDate: Date;
    logoPath: string; // Path to the logo
    description: string;
}

const Sponsor: React.FC<SponsorProps> = ({ name, entryDate, logoPath, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const formattedDate = `${entryDate.getFullYear()} ${entryDate.getMonth() < 6 ? 'I' : 'II'}`;

    return (
        <div
            className={`bg-white rounded-lg shadow-md p-4 w-10/12 max-w-2xl transition-transform duration-300 ${
                isExpanded ? 'transform-none' : 'hover:transform hover:scale-105'
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex flex-col items-center space-y-4 cursor-pointer">
                <img
                    src={logoPath} // Use the passed logoPath prop
                    alt={name}
                    className="w-40 h-40 object-cover rounded-full" // Make the logo larger
                />
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className="text-gray-500">{formattedDate}</p>
                </div>
            </div>
            {isExpanded && (
                <p className="mt-4 text-gray-700 text-center">{description}</p>
            )}
        </div>
    );
};

export default Sponsor;
