import React from 'react';
import type { Recommendation } from './RecommendationEngine';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const Icon = recommendation.icon;
  const priorityColors = {
    high: 'bg-red-50 text-red-700',
    medium: 'bg-yellow-50 text-yellow-700',
    low: 'bg-green-50 text-green-700',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-blue-600" />
          <h3 className="font-semibold text-gray-800 text-lg">{recommendation.title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[recommendation.priority]}`}>
          {recommendation.priority}
        </span>
      </div>

      <ul className="ml-8 list-disc text-gray-600 space-y-2">
        {recommendation.actions.map((action, i) => (
          <li key={i}>{action}</li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm">
          <div className="text-green-600">
            <span className="font-semibold">CO₂ Savings:</span>
            <span className="ml-2">{recommendation.savings.co2.toFixed(2)} tonnes/year</span>
          </div>
          <div className="text-blue-600">
            <span className="font-semibold">Est. Cost Savings:</span>
            <span className="ml-2">${recommendation.savings.cost}/year</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 font-medium">
          Impact: {recommendation.impact}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;