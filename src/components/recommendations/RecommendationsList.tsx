import React from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import RecommendationCard from './RecommendationCard';
import type { Recommendation } from './RecommendationEngine';

interface RecommendationsListProps {
  recommendations: Recommendation[];
  showRecommendations: boolean;
  setShowRecommendations: (show: boolean) => void;
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({
  recommendations,
  showRecommendations,
  setShowRecommendations,
}) => {
  const totalPotentialSavings = recommendations.reduce(
    (acc, rec) => ({
      co2: acc.co2 + rec.savings.co2,
      cost: acc.cost + rec.savings.cost,
    }),
    { co2: 0, cost: 0 }
  );

  return (
    <div className="border-t pt-6">
      <button
        onClick={() => setShowRecommendations(!showRecommendations)}
        className="flex items-center justify-between w-full px-6 py-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600" />
          <div>
            <span className="font-semibold text-blue-800 block">Personalized Recommendations</span>
            <span className="text-sm text-blue-600">
              Potential savings: {totalPotentialSavings.co2.toFixed(1)} tonnes CO₂e & ${totalPotentialSavings.cost}/year
            </span>
          </div>
        </div>
        {showRecommendations ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </button>

      {showRecommendations && (
        <div className="mt-6 space-y-4">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard key={index} recommendation={recommendation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;