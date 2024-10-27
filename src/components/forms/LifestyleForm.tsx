import React from 'react';
import { Utensils } from 'lucide-react';
import type { LifestyleData } from '../../types';

interface LifestyleFormProps {
  data: LifestyleData;
  onChange: (data: LifestyleData) => void;
}

const LifestyleForm: React.FC<LifestyleFormProps> = ({ data, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Lifestyle Choices</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-gray-700">Diet Type</span>
          <select
            value={data.diet}
            onChange={(e) => onChange({ ...data, diet: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="Meat Heavy">Meat Heavy</option>
            <option value="Average">Average</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Monthly Eating Out Budget ($)</span>
          <input
            type="number"
            min="0"
            value={data.eatingOut}
            onChange={(e) => onChange({ ...data, eatingOut: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Monthly Clothes & Footwear ($)</span>
          <input
            type="number"
            min="0"
            value={data.clothesFootwear}
            onChange={(e) => onChange({ ...data, clothesFootwear: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Monthly Health & Beauty ($)</span>
          <input
            type="number"
            min="0"
            value={data.healthBeauty}
            onChange={(e) => onChange({ ...data, healthBeauty: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Monthly Phone & Internet ($)</span>
          <input
            type="number"
            min="0"
            value={data.phoneInternet}
            onChange={(e) => onChange({ ...data, phoneInternet: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Support Responsible Companies</span>
          <select
            value={data.responsibleCompanies}
            onChange={(e) => onChange({ ...data, responsibleCompanies: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="Always">Always</option>
            <option value="Often">Often</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Never">Never</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default LifestyleForm;