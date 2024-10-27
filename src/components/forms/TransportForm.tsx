import React from 'react';
import { Car } from 'lucide-react';
import type { TransportData } from '../../types';

interface TransportFormProps {
  data: TransportData;
  onChange: (data: TransportData) => void;
}

const TransportForm: React.FC<TransportFormProps> = ({ data, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <Car className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Transport Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-gray-700">Primary Vehicle Type</span>
          <select
            value={data.vehicleType}
            onChange={(e) => onChange({ ...data, vehicleType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="Car">Car</option>
            <option value="Electric Car">Electric Car</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Public Transport">Public Transport</option>
            <option value="Bicycle">Bicycle</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Daily Distance (km)</span>
          <input
            type="number"
            min="0"
            value={data.distanceTravelled}
            onChange={(e) => onChange({ ...data, distanceTravelled: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Flights per Year</span>
          <input
            type="number"
            min="0"
            value={data.flightsPerYear}
            onChange={(e) => onChange({ ...data, flightsPerYear: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="inline-flex items-center mt-6">
          <input
            type="checkbox"
            checked={data.offsetFlights}
            onChange={(e) => onChange({ ...data, offsetFlights: e.target.checked })}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <span className="ml-2 text-gray-700">Do you offset your flights?</span>
        </label>
      </div>
    </div>
  );
};

export default TransportForm;