import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Team from './Pages/Team';
import Merch from './Pages/Merch';
import Sponsors from './Pages/Sponsors';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app bg-gray-100 min-h-screen">
                {/* Header Section */}
                <header className="bg-white shadow-md p-4">
                    <Header />
                </header>

                {/* Main Content with Routes */}
                <div className="container mx-auto py-8">
                    <Routes>
                        {/* Default route for the homepage */}
                        <Route path="/" element={<MainContent />} />
                        {/* Routes for other pages */}
                        <Route path="/team" element={<Team />} />
                        <Route path="/merch" element={<Merch />} />
                        <Route path="/sponsors" element={<Sponsors />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
