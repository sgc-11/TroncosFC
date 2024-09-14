// src/components/TeamPhoto.tsx
import React from 'react';

interface TeamPhotoProps {
    src: string;
    title: string;
    text: string;
}

const TeamPhoto: React.FC<TeamPhotoProps> = ({ src, title, text }) => {
    return (
        <div className="relative">
            <img src={src} alt={title} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TeamPhoto;
