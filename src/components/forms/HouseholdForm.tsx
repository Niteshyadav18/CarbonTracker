import React from 'react';
import { Home } from 'lucide-react';
import type { HouseholdData } from '../../types';

interface HouseholdFormProps {
  data: HouseholdData;
  onChange: (data: HouseholdData) => void;
}

const HouseholdForm: React.FC<HouseholdFormProps> = ({ data, onChange }) => {
  const handleItemChange = (item: keyof HouseholdData['itemsBought']) => {
    onChange({
      ...data,
      itemsBought: {
        ...data.itemsBought,
        [item]: !data.itemsBought[item],
      },
    });
  };

  const handleEnergyChange = (improvement: keyof HouseholdData['energyImprovements']) => {
    onChange({
      ...data,
      energyImprovements: {
        ...data.energyImprovements,
        [improvement]: !data.energyImprovements[improvement],
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <Home className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Household Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-gray-700">Number of People</span>
          <input
            type="number"
            min="1"
            value={data.numberOfPeople}
            onChange={(e) => onChange({ ...data, numberOfPeople: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Housing Type</span>
          <select
            value={data.housingType}
            onChange={(e) => onChange({ ...data, housingType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="Stand Alone">Stand Alone House</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">House Size (sq ft)</span>
          <input
            type="number"
            min="0"
            value={data.sizeOfHouse}
            onChange={(e) => onChange({ ...data, sizeOfHouse: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Monthly Electricity Usage (kWh)</span>
          <input
            type="number"
            min="0"
            value={data.electricityConsumption}
            onChange={(e) => onChange({ ...data, electricityConsumption: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Recent Purchases</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(data.itemsBought).map(([item, checked]) => (
            <label key={item} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleItemChange(item as keyof HouseholdData['itemsBought'])}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              <span className="ml-2 text-gray-700 capitalize">
                {item.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Energy Improvements</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.energyImprovements).map(([improvement, checked]) => (
            <label key={improvement} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleEnergyChange(improvement as keyof HouseholdData['energyImprovements'])}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              <span className="ml-2 text-gray-700 capitalize">
                {improvement.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseholdForm;