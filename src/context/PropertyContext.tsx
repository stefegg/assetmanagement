import { createContext, useContext, ReactNode, useState } from 'react'

interface PropertyContextType {
  propertyName: string;
  address: string;
  city: string;
  state: string;
  isr: string;
  submarket: string;
  productType: string;
  goDataId: string;
  yardiCode1: string;
  yardiCode2: string;
  marketRateUnits: number;
  affordableUnits: number;
  totalNRSF: number;
  grossLandArea: number;
  netLandArea: number;
  investmentVehicle: string;
  setPropertyName: (value: string) => void;
  setAddress: (value: string) => void;
  setCity: (value: string) => void;
  setState: (value: string) => void;
  setIsr: (value: string) => void;
  setSubmarket: (value: string) => void;
  setProductType: (value: string) => void;
  setGoDataId: (value: string) => void;
  setYardiCode1: (value: string) => void;
  setYardiCode2: (value: string) => void;
  setMarketRateUnits: (value: number) => void;
  setAffordableUnits: (value: number) => void;
  setTotalNRSF: (value: number) => void;
  setGrossLandArea: (value: number) => void;
  setNetLandArea: (value: number) => void;
  setInvestmentVehicle: (value: string) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isr, setIsr] = useState('');
  const [submarket, setSubmarket] = useState('');
  const [productType, setProductType] = useState('');
  const [goDataId, setGoDataId] = useState('');
  const [yardiCode1, setYardiCode1] = useState('');
  const [yardiCode2, setYardiCode2] = useState('');
  const [marketRateUnits, setMarketRateUnits] = useState(0);
  const [affordableUnits, setAffordableUnits] = useState(0);
  const [totalNRSF, setTotalNRSF] = useState(0);
  const [grossLandArea, setGrossLandArea] = useState(0);
  const [netLandArea, setNetLandArea] = useState(0);
  const [investmentVehicle, setInvestmentVehicle] = useState('');

  return (
    <PropertyContext.Provider
      value={{
        propertyName,
        address,
        city,
        state,
        isr,
        submarket,
        productType,
        goDataId,
        yardiCode1,
        yardiCode2,
        marketRateUnits,
        affordableUnits,
        totalNRSF,
        grossLandArea,
        netLandArea,
        investmentVehicle,
        setPropertyName,
        setAddress,
        setCity,
        setState,
        setIsr,
        setSubmarket,
        setProductType,
        setGoDataId,
        setYardiCode1,
        setYardiCode2,
        setMarketRateUnits,
        setAffordableUnits,
        setTotalNRSF,
        setGrossLandArea,
        setNetLandArea,
        setInvestmentVehicle,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
} 