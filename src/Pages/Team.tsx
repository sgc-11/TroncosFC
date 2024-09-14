// src/Pages/Team.tsx
import React from 'react';
import FirstTeam from '../components/FirstTeam';  // Import the newly created component

const Team: React.FC = () => {
    return (
        <div>
            <FirstTeam />  {/* Render the FirstTeam component here */}
        </div>
    );
};

export default Team;
