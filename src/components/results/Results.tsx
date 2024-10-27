import React from 'react';
import type { FootprintResults } from '../../types';
import RecommendationsList from '../recommendations/RecommendationsList';

interface ResultsProps {
  results: FootprintResults;
  showRecommendations: boolean;
  setShowRecommendations: (show: boolean) => void;
}

const Results: React.FC<ResultsProps> = ({ 
  results,
  showRecommendations,
  setShowRecommendations,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Your Annual Carbon Footprint
        </h2>
        
        <div className="text-center mb-8">
          <span className="text-4xl font-bold text-green-600">
            {results.totalFootprint.toFixed(2)}
          </span>
          <span className="text-xl text-gray-600 ml-2">tonnes CO₂e</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(results.breakdown).map(([category, value]) => (
            <div key={category} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 capitalize mb-1">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className="text-lg font-semibold text-green-600">
                {value.toFixed(2)} <span className="text-sm">tonnes</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <RecommendationsList
        recommendations={results.recommendations}
        showRecommendations={showRecommendations}
        setShowRecommendations={setShowRecommendations}
      />
    </div>
  );
};

export default Results;