export interface HouseholdData {
  numberOfPeople: number;
  housingType: string;
  sizeOfHouse: number;
  numberOfBedrooms: number;
  itemsBought: {
    laptop: boolean;
    tv: boolean;
    washingMachine: boolean;
    fridge: boolean;
    ac: boolean;
    mobilePhone: boolean;
  };
  electricityConsumption: number;
  energyImprovements: {
    solarPanel: boolean;
    solarWaterHeater: boolean;
    otherCleanEnergy: boolean;
    energySavingBulbs: boolean;
  };
}

export interface TransportData {
  vehicleType: string;
  distanceTravelled: number;
  flightsPerYear: number;
  offsetFlights: boolean;
}

export interface LifestyleData {
  diet: string;
  eatingOut: number;
  clothesFootwear: number;
  healthBeauty: number;
  phoneInternet: number;
  responsibleCompanies: string;
}

export interface FootprintResults {
  totalFootprint: number;
  breakdown: {
    housing: number;
    electricity: number;
    appliances: number;
    transport: number;
    flights: number;
    diet: number;
  };
  recommendations: Array<{
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
  }>;
}