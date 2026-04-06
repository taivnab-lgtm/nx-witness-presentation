export interface SectorConfig {
  id: string;
  name: string;
  totalMarket: number;
  adoptionRate: number; // percentage (e.g., 15 for 15%)
  price: number;
  color: string;
}

export interface SlideProps {
  isActive: boolean;
  data?: SectorConfig[];
}

export interface MarketData {
  sector: string;
  totalMarket: number;
  adoption: number;
  units: number;
  iconName: string;
}

export interface FinancialData {
  name: string;
  revenue: number;
  fill: string;
}
