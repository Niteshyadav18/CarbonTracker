import { HouseholdData, TransportData, LifestyleData } from '../../types';
import { Home, Car, Utensils, Leaf, Zap, Droplets, Sun, Wind } from 'lucide-react';

export type Recommendation = {
  category: string;
  icon: any;
  title: string;
  actions: string[];
  impact: string;
  priority: 'high' | 'medium' | 'low';
  savings: {
    co2: number;
    cost: number;
  };
};

export const generateRecommendations = (
  household: HouseholdData,
  transport: TransportData,
  lifestyle: LifestyleData,
  footprint: {
    housing: number;
    electricity: number;
    appliances: number;
    transport: number;
    flights: number;
    diet: number;
  }
): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  // Housing recommendations
  if (footprint.housing > 2) {
    recommendations.push({
      category: 'Housing',
      icon: Home,
      title: 'Smart Home Energy Optimization',
      actions: [
        'Install a smart home energy monitoring system',
        'Upgrade to triple-pane windows',
        'Add smart thermostats in each room',
        'Implement zone heating/cooling',
      ],
      impact: 'Reduce home energy emissions by up to 40%',
      priority: 'high',
      savings: {
        co2: footprint.housing * 0.4,
        cost: 800,
      },
    });
  }

  if (household.electricityConsumption > 30) {
    recommendations.push({
      category: 'Energy',
      icon: Zap,
      title: 'Renewable Energy Integration',
      actions: [
        'Install solar panels with battery storage',
        'Join a community solar program',
        'Switch to a renewable energy provider',
        'Install a home wind turbine if suitable',
      ],
      impact: 'Eliminate up to 90% of electricity emissions',
      priority: 'high',
      savings: {
        co2: footprint.electricity * 0.9,
        cost: 1200,
      },
    });
  }

  // Water and resource management
  if (household.housingType === 'Stand Alone') {
    recommendations.push({
      category: 'Water',
      icon: Droplets,
      title: 'Water Conservation System',
      actions: [
        'Install a rainwater harvesting system',
        'Implement greywater recycling',
        'Install water-efficient fixtures',
        'Create a drought-resistant garden',
      ],
      impact: 'Reduce water-related emissions by 60%',
      priority: 'medium',
      savings: {
        co2: 0.5,
        cost: 400,
      },
    });
  }

  // Transport recommendations
  if (transport.vehicleType === 'Car' && transport.distanceTravelled > 10) {
    recommendations.push({
      category: 'Transport',
      icon: Car,
      title: 'Smart Mobility Solutions',
      actions: [
        'Switch to an electric vehicle with home charging',
        'Join a local car-sharing program',
        'Use bike-sharing for short trips',
        'Install an EV charging station at home',
      ],
      impact: 'Reduce transport emissions by up to 85%',
      priority: 'high',
      savings: {
        co2: footprint.transport * 0.85,
        cost: 1500,
      },
    });
  }

  // Lifestyle and diet
  if (lifestyle.diet === 'Meat Heavy') {
    recommendations.push({
      category: 'Diet',
      icon: Utensils,
      title: 'Sustainable Food Choices',
      actions: [
        'Start a home vegetable garden',
        'Join a local food co-op',
        'Subscribe to a plant-based meal service',
        'Compost food waste',
      ],
      impact: 'Reduce dietary emissions by up to 70%',
      priority: 'medium',
      savings: {
        co2: footprint.diet * 0.7,
        cost: 600,
      },
    });
  }

  // Renewable energy
  if (!household.energyImprovements.solarPanel) {
    recommendations.push({
      category: 'Energy',
      icon: Sun,
      title: 'Renewable Energy Generation',
      actions: [
        'Install solar panels with smart inverter',
        'Add battery storage system',
        'Implement solar water heating',
        'Create a solar-powered charging station',
      ],
      impact: 'Generate clean energy and reduce emissions by 95%',
      priority: 'high',
      savings: {
        co2: footprint.electricity * 0.95,
        cost: 2000,
      },
    });
  }

  // Community initiatives
  recommendations.push({
    category: 'Community',
    icon: Leaf,
    title: 'Community Environmental Impact',
    actions: [
      'Start a neighborhood composting program',
      'Organize community clean energy workshops',
      'Create a local food sharing network',
      'Initiate a community garden project',
    ],
    impact: 'Create collective impact and reduce community emissions',
    priority: 'medium',
    savings: {
      co2: 1.5,
      cost: 300,
    },
  });

  // Sort recommendations by priority and potential impact
  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
};