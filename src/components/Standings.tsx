// src/components/Standings.tsx
import React from 'react';

interface TeamData {
    name: string;
    g: number;   // Games played
    w: number;   // Wins
    d: number;   // Draws
    l: number;   // Losses
    gs: number;  // Goals scored
    gr: number;  // Goals received
}

const teams: TeamData[] = [
    { name: 'TIKITAKA', g: 3, w: 3, d: 0, l: 0, gs: 18, gr: 4 },
    { name: 'SELECCION MASIA', g: 4, w: 3, d: 0, l: 1, gs: 18, gr: 10 },
    { name: 'BLAUGRANA', g: 4, w: 3, d: 0, l: 1, gs: 15, gr: 10 },
    { name: 'FUMANCHARRIA', g: 3, w: 2, d: 0, l: 1, gs: 13, gr: 4 },
    { name: 'TRONCOS FC', g: 4, w: 2, d: 0, l: 2, gs: 7, gr: 12 },
    { name: 'SIN NOMBRE', g: 3, w: 1, d: 1, l: 1, gs: 7, gr: 11 },
    { name: 'EMPLEA2', g: 4, w: 1, d: 1, l: 2, gs: 6, gr: 11 },
    { name: 'ORION', g: 5, w: 1, d: 0, l: 4, gs: 5, gr: 18 },
    { name: 'BRAZUCAS', g: 4, w: 0, d: 0, l: 4, gs: 4, gr: 13 },
];

// Calculate Goal Difference
const calculateGD = (gs: number, gr: number) => gs - gr;

// Calculate Points
const calculatePts = (w: number, d: number) => w * 3 + d;

// Sort teams by points (desc), then by goal difference (desc)
const sortedTeams = teams
    .map((team) => ({
        ...team,
        gd: calculateGD(team.gs, team.gr),  // Adding goal difference
        pts: calculatePts(team.w, team.d),  // Adding points
    }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd); // Sort by points, then by goal difference

const Standings: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-center text-3xl font-bold mb-6">STANDINGS</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                <thead className="bg-gray-100">
                <tr>
                    <th className="p-4 border-b border-gray-300 text-left">GROUP A</th>
                    <th className="p-4 border-b border-gray-300 text-left">TOTAL</th>
                </tr>
                <tr>
                    <th className="p-2 border-b border-gray-300">POS</th>
                    <th className="p-2 border-b border-gray-300">NAME</th>
                    <th className="p-2 border-b border-gray-300">G</th>
                    <th className="p-2 border-b border-gray-300">W</th>
                    <th className="p-2 border-b border-gray-300">D</th>
                    <th className="p-2 border-b border-gray-300">L</th>
                    <th className="p-2 border-b border-gray-300">GS</th>
                    <th className="p-2 border-b border-gray-300">GR</th>
                    <th className="p-2 border-b border-gray-300">GD</th>
                    <th className="p-2 border-b border-gray-300">Pts</th>
                </tr>
                </thead>
                <tbody>
                {sortedTeams.map((team, index) => (
                    <tr key={team.name} className={team.name === 'TRONCOS FC' ? 'bg-red-100' : ''}>
                        <td className="p-2 border-b border-gray-300 text-center">{index + 1}</td>
                        <td className="p-2 border-b border-gray-300">{team.name}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.g}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.w}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.d}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.l}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.gs}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.gr}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.gd}</td>
                        <td className="p-2 border-b border-gray-300 text-center">{team.pts}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;
