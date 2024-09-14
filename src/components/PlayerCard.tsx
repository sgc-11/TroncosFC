// src/components/Player.tsx
import React from 'react';
import { Player } from '../interfaces/Player';

interface PlayerProps {
    player: Player;
    isOpen: boolean;
    onOpenModal: (player: Player) => void;
    onCloseModal: () => void;
}

const PlayerCard: React.FC<PlayerProps> = ({ player, isOpen, onOpenModal, onCloseModal }) => {
    const handleClick = () => {
        if (isOpen) {
            onCloseModal();
        } else {
            onOpenModal(player);
        }
    };

    return (
        <div
            className={`relative cursor-pointer transition-all transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl border-2 border-red-500 rounded-lg p-4 bg-gradient-to-r from-red-400 to-red-600 text-white ${
                isOpen ? "" : "hover:from-red-600 hover:to-red-800"
            }`}
            onClick={handleClick}
        >
            {/* Player Image */}
            {!isOpen && (
                <img
                    src={player.photo}
                    alt={player.fullName}
                    className="w-full h-80 object-cover rounded-lg mb-4"
                />
            )}

            {/* Default view with player alias */}
            {!isOpen && (
                <div className="text-center">
                    <p className="text-xl font-bold">{player.alias}</p>
                </div>
            )}

            {/* Expanded view when isOpen is true */}
            {isOpen && (
                <div className="flex flex-col items-center p-6 rounded-lg shadow-2xl">
                    <button
                        onClick={handleClick}
                        className="absolute top-4 right-4 text-black text-3xl hover:text-red-600 focus:outline-none"
                    >
                        &times;
                    </button>
                    <h2 className="text-2xl font-bold mb-4">{player.alias}</h2>
                    <img
                        src={player.photo}
                        alt={player.fullName}
                        className="w-full h-full max-h-screen object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-200 text-center mb-2"><strong>Birth:</strong> {player.birth}</p>
                    <p className="text-gray-200 text-center mb-2"><strong>Program:</strong> {player.program}</p>
                    <p className="text-gray-200 text-center">{player.description}</p>
                </div>
            )}
        </div>
    );
};

export default PlayerCard;
