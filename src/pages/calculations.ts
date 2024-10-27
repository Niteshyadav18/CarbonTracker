import type { HouseholdData, TransportData, LifestyleData } from '../types';

export const calculateFootprint = (
  household: HouseholdData,
  transport: TransportData,
  lifestyle: LifestyleData
) => {
  // Housing footprint calculation
  const housingFootprint = household.sizeOfHouse * 0.0645 * household.numberOfPeople;
  
  // Electricity footprint
  let electricityFootprint = household.electricityConsumption * 12 * 0.92; // kWh to CO2e
  if (household.energyImprovements.solarPanel) electricityFootprint *= 0.4;
  if (household.energyImprovements.energySavingBulbs) electricityFootprint *= 0.8;

  // Appliances footprint
  const applianceEmissions = {
    laptop: 0.1,
    tv: 0.15,
    washingMachine: 0.25,
    fridge: 0.3,
    ac: 0.5,
    mobilePhone: 0.08,
  };
  
  const appliancesFootprint = Object.entries(household.itemsBought)
    .reduce((total, [item, owned]) => {
      return total + (owned ? applianceEmissions[item as keyof typeof applianceEmissions] : 0);
    }, 0);

  // Transport footprint
  const vehicleEmissions = {
    Car: 0.404,
    'Electric Car': 0.081,
    Hybrid: 0.202,
    Motorcycle: 0.203,
    'Public Transport': 0.14,
    Bicycle: 0,
  };
  
  const transportFootprint = 
    transport.distanceTravelled * 
    365 * 
    vehicleEmissions[transport.vehicleType as keyof typeof vehicleEmissions];

  // Flight footprint
  const flightFootprint = transport.flightsPerYear * (transport.offsetFlights ? 0.5 : 1) * 0.9;

  // Diet footprint
  const dietEmissions = {
    'Meat Heavy': 3.3,
    'Average': 2.5,
    'Vegetarian': 1.7,
    'Vegan': 1.5,
  };
  
  const dietFootprint = dietEmissions[lifestyle.diet as keyof typeof dietEmissions] * 365;

  // Calculate total footprint
  const totalFootprint = (
    housingFootprint +
    electricityFootprint +
    appliancesFootprint +
    transportFootprint +
    flightFootprint +
    dietFootprint
  ) / 1000; // Convert to tonnes

  return {
    totalFootprint,
    breakdown: {
      housing: housingFootprint / 1000,
      electricity: electricityFootprint / 1000,
      appliances: appliancesFootprint,
      transport: transportFootprint / 1000,
      flights: flightFootprint,
      diet: dietFootprint / 1000,
    },
  };
};