// src/components/MainContent.tsx
import React from 'react';
import MainContainer from './TeamNextMatch';
import Home from './Home';
import Standings from './Standings';

const MainContent: React.FC = () => {
    return (
        <main className="container mx-auto py-8">
            <MainContainer /> {/* MainContainer for next match */}
            <Home /> {/* Home component */}
            <Standings /> {/* Standings component */}
        </main>
    );
};

export default MainContent;
