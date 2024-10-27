import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import HouseholdForm from './components/forms/HouseholdForm';
import TransportForm from './components/forms/TransportForm';
import LifestyleForm from './components/forms/LifestyleForm';
import Results from './components/results/Results';
import { generateRecommendations } from './components/recommendations/RecommendationEngine';
import  type { HouseholdData, TransportData, LifestyleData, FootprintResults } from './types';
import { calculateFootprint } from './utils/calculations';


// Calculator component extracted to its own component for better organization
const Calculations = () => {
  const [household, setHousehold] = useState<HouseholdData>({
    numberOfPeople: 1,
    housingType: 'Stand Alone',
    sizeOfHouse: 600,
    numberOfBedrooms: 1,
    itemsBought: {
      laptop: false,
      tv: false,
      washingMachine: false,
      fridge: false,
      ac: false,
      mobilePhone: false,
    },
    electricityConsumption: 20,
    energyImprovements: {
      solarPanel: false,
      solarWaterHeater: false,
      otherCleanEnergy: false,
      energySavingBulbs: false,
    },
  });

  const [transport, setTransport] = useState<TransportData>({
    vehicleType: 'Car',
    distanceTravelled: 15,
    flightsPerYear: 0,
    offsetFlights: false,
  });

  const [lifestyle, setLifestyle] = useState<LifestyleData>({
    diet: 'Meat Heavy',
    eatingOut: 0,
    clothesFootwear: 0,
    healthBeauty: 0,
    phoneInternet: 0,
    responsibleCompanies: 'Sometimes',
  });

  const [results, setResults] = useState<FootprintResults | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(true);

  const handleCalculate = () => {
    const footprintData = calculateFootprint(household, transport, lifestyle);
    const recommendations = generateRecommendations(
      household,
      transport,
      lifestyle,
      footprintData.breakdown
    );

    setResults({
      ...footprintData,
      recommendations,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Carbon Footprint Calculator
        </h1>

        <div className="space-y-8">
          <HouseholdForm data={household} onChange={setHousehold} />
          <TransportForm data={transport} onChange={setTransport} />
          <LifestyleForm data={lifestyle} onChange={setLifestyle} />

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Calculate Carbon Footprint
          </button>

          {results && (
            <Results 
              results={results} 
              showRecommendations={showRecommendations} 
              setShowRecommendations={setShowRecommendations} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Main App component with routing
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/calculations" element={<Calculations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;