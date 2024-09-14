// src/components/FirstTeam.tsx
import React, { useState } from 'react';
import PlayerList from './PlayerList';
import { Player } from '../interfaces/Player';

// Sample player data
const goalkeepers: Player[] = [
    {
        fullName: "Alex Keeper",
        alias: "The Guardian",
        birth: "April 15, 1990",
        program: "Sports Science",
        description: "Alex is known for his agility and ability to anticipate the opponent's moves. A natural leader on the field.",
        photo: "src/assets/TerStegen.png",
    },
    {
        fullName: "Sam Blocker",
        alias: "The Wall",
        birth: "March 12, 1992",
        program: "Physical Education",
        description: "Sam's reflexes and towering presence make him one of the top goalkeepers in the league.",
        photo: "src/assets/Kepa.png",
    },
];

const defenders: Player[] = [
    {
        fullName: "Danny Defense",
        alias: "The Shield",
        birth: "June 22, 1988",
        program: "Psychology",
        description: "Danny's strong tactical understanding and quick thinking keep the backline solid.",
        photo: "src/assets/araujo.png",
    },
    {
        fullName: "Jamie Tackle",
        alias: "The Hammer",
        birth: "September 19, 1990",
        program: "Law",
        description: "Jamie is feared by forwards for his timely tackles and no-nonsense defending.",
        photo: "src/assets/rudiger.png",
    },
];

const midfielders: Player[] = [
    {
        fullName: "Mia Midfield",
        alias: "The Conductor",
        birth: "October 10, 1995",
        program: "Business Management",
        description: "Mia is the heart of the team, orchestrating plays and maintaining control of the game.",
        photo: "src/assets/kross.png",
    },
    {
        fullName: "Lana Playmaker",
        alias: "The Architect",
        birth: "August 8, 1994",
        program: "Economics",
        description: "Lana's vision and passing ability make her a key player in setting up attacks.",
        photo: "src/assets/Pedri.png",
    },
];

const attackers: Player[] = [
    {
        fullName: "Victor Striker",
        alias: "The Arrow",
        birth: "January 30, 1993",
        program: "Marketing",
        description: "Victor is known for his blistering pace and clinical finishing, a constant threat to any defense.",
        photo: "src/assets/Neymar.png",
    },
    {
        fullName: "Leo Goal",
        alias: "The Magician",
        birth: "December 12, 1991",
        program: "Sports Psychology",
        description: "Leo's dribbling and finishing are second to none, leaving defenders in the dust.",
        photo: "src/assets/messi.png",
    },
];

const FirstTeam: React.FC = () => {
    const [openPlayer, setOpenPlayer] = useState<Player | null>(null);

    const handleOpenModal = (player: Player) => {
        setOpenPlayer(player);
    };

    const handleCloseModal = () => {
        setOpenPlayer(null);
    };

    return (
        <div className="team-page bg-white text-black min-h-screen">
            <div className="text-center my-8">
                <h1 className="text-5xl font-extrabold relative inline-block py-4 px-8 border-4 border-red-500 bg-white rounded-lg shadow-lg">
                    First Team
                    <span className="absolute -inset-1.5 border-2 border-yellow-400 rounded-lg blur-md"></span>
                </h1>
            </div>

            {/* Goalkeepers */}
            <PlayerList
                title="Goalkeepers"
                players={goalkeepers}
                openPlayer={openPlayer}
                onOpenModal={handleOpenModal}
                onCloseModal={handleCloseModal}
            />

            {/* Defenders */}
            <PlayerList
                title="Defenders"
                players={defenders}
                openPlayer={openPlayer}
                onOpenModal={handleOpenModal}
                onCloseModal={handleCloseModal}
            />

            {/* Midfielders */}
            <PlayerList
                title="Midfielders"
                players={midfielders}
                openPlayer={openPlayer}
                onOpenModal={handleOpenModal}
                onCloseModal={handleCloseModal}
            />

            {/* Attackers */}
            <PlayerList
                title="Attackers"
                players={attackers}
                openPlayer={openPlayer}
                onOpenModal={handleOpenModal}
                onCloseModal={handleCloseModal}
            />
        </div>
    );
};

export default FirstTeam;
