// src/pages/Home.tsx
import React from 'react';
import PhotoSlider from '../components/PhotoSlider';
import TeamPhoto1 from '../assets/currentteam.jpeg'; // Import images if needed
import TeamPhoto2 from '../assets/feintacta.jpeg';
import TeamPhoto3 from '../assets/oldteam.jpeg';
import TeamPhoto4 from '../assets/titular.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
    const photos = [
        { src: TeamPhoto1, title: "Today's team", text: 'We love Troncos' },
        { src: TeamPhoto2, title: 'Con la fe intacta', text: 'What a beautiful kit' },
        { src: TeamPhoto3, title: 'Old team', text: 'Once upon a time' },
        { src: TeamPhoto4, title: 'Titular', text: 'The real pre-game' },
    ];

    return (
        <div className="home-container">
            <header className="bg-white shadow-md p-4">
                {/* Include header here if it will be specific to Home */}
            </header>
            <main className="container mx-auto py-8">
                <PhotoSlider photos={photos} />
                {/* Other components */}
            </main>
        </div>
    );
};

export default Home;
