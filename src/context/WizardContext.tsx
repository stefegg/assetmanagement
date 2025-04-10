import { createContext, useContext, ReactNode, useState } from 'react'

interface WizardContextType {
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
  
  ventureCloseDate: string;
  modelStartYear: string;
  landClose: string;
  constructionStart: string;
  firstUnits: string;
  lastUnits: string;
  lastUnitHedge: string;
  completion: string;
  completionHedge: string;
  stabilization: string;
  firstConstDraw: string;
  latestConstDraw: string;
  forecastAsOf: string;
  budgetStart: string;
  budgetEnd: string;
  actualsStart: string;
  actualsEnd: string;
  actualsDateAdjustment: string;
  adjustedActualsDate: string;
  monthsOfPreleasing: number;
  monthsToAbsorbPreleasing: number;
  numPreleaseUnits: number;
  avgUnitsAbsorbedPerMonth: number;
  percentRenewal: number;
  developmentPhaseEnd: string;
  monthsPostStabilization: number;
  investmentPhaseStartDate: string;
  investmentPhaseEndDate: string;
  commercialDevPhaseEnd: string;
  commercialInvPhaseEnd: string;
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
  setVentureCloseDate: (value: string) => void;
  setModelStartYear: (value: string) => void;
  setLandClose: (value: string) => void;
  setConstructionStart: (value: string) => void;
  setFirstUnits: (value: string) => void;
  setLastUnits: (value: string) => void;
  setLastUnitHedge: (value: string) => void;
  setCompletion: (value: string) => void;
  setCompletionHedge: (value: string) => void;
  setStabilization: (value: string) => void;
  setFirstConstDraw: (value: string) => void;
  setLatestConstDraw: (value: string) => void;
  setForecastAsOf: (value: string) => void;
  setBudgetStart: (value: string) => void;
  setBudgetEnd: (value: string) => void;
  setActualsStart: (value: string) => void;
  setActualsEnd: (value: string) => void;
  setActualsDateAdjustment: (value: string) => void;
  setAdjustedActualsDate: (value: string) => void;
  setMonthsOfPreleasing: (value: number) => void;
  setMonthsToAbsorbPreleasing: (value: number) => void;
  setNumPreleaseUnits: (value: number) => void;
  setAvgUnitsAbsorbedPerMonth: (value: number) => void;
  setPercentRenewal: (value: number) => void;
  setDevelopmentPhaseEnd: (value: string) => void;
  setMonthsPostStabilization: (value: number) => void;
  setInvestmentPhaseStartDate: (value: string) => void;
  setInvestmentPhaseEndDate: (value: string) => void;
  setCommercialDevPhaseEnd: (value: string) => void;
  setCommercialInvPhaseEnd: (value: string) => void;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: ReactNode }) {
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

  const [ventureCloseDate, setVentureCloseDate] = useState('');
  const [modelStartYear, setModelStartYear] = useState('');
  const [landClose, setLandClose] = useState('');
  const [constructionStart, setConstructionStart] = useState('');
  const [firstUnits, setFirstUnits] = useState('');
  const [lastUnits, setLastUnits] = useState('');
  const [lastUnitHedge, setLastUnitHedge] = useState('');
  const [completion, setCompletion] = useState('');
  const [completionHedge, setCompletionHedge] = useState('');
  const [stabilization, setStabilization] = useState('');
  const [firstConstDraw, setFirstConstDraw] = useState('');
  const [latestConstDraw, setLatestConstDraw] = useState('');
  const [forecastAsOf, setForecastAsOf] = useState('');
  const [budgetStart, setBudgetStart] = useState('');
  const [budgetEnd, setBudgetEnd] = useState('');
  const [actualsStart, setActualsStart] = useState('');
  const [actualsEnd, setActualsEnd] = useState('');
  const [actualsDateAdjustment, setActualsDateAdjustment] = useState('');
  const [adjustedActualsDate, setAdjustedActualsDate] = useState('');
  const [monthsOfPreleasing, setMonthsOfPreleasing] = useState(0);
  const [monthsToAbsorbPreleasing, setMonthsToAbsorbPreleasing] = useState(0);
  const [numPreleaseUnits, setNumPreleaseUnits] = useState(0);
  const [avgUnitsAbsorbedPerMonth, setAvgUnitsAbsorbedPerMonth] = useState(0);
  const [percentRenewal, setPercentRenewal] = useState(0);
  const [developmentPhaseEnd, setDevelopmentPhaseEnd] = useState('');
  const [monthsPostStabilization, setMonthsPostStabilization] = useState(0);
  const [investmentPhaseStartDate, setInvestmentPhaseStartDate] = useState('');
  const [investmentPhaseEndDate, setInvestmentPhaseEndDate] = useState('');
  const [commercialDevPhaseEnd, setCommercialDevPhaseEnd] = useState('');
  const [commercialInvPhaseEnd, setCommercialInvPhaseEnd] = useState('');

  return (
    <WizardContext.Provider
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
        ventureCloseDate,
        modelStartYear,
        landClose,
        constructionStart,
        firstUnits,
        lastUnits,
        lastUnitHedge,
        completion,
        completionHedge,
        stabilization,
        firstConstDraw,
        latestConstDraw,
        forecastAsOf,
        budgetStart,
        budgetEnd,
        actualsStart,
        actualsEnd,
        actualsDateAdjustment,
        adjustedActualsDate,
        monthsOfPreleasing,
        monthsToAbsorbPreleasing,
        numPreleaseUnits,
        avgUnitsAbsorbedPerMonth,
        percentRenewal,
        developmentPhaseEnd,
        monthsPostStabilization,
        investmentPhaseStartDate,
        investmentPhaseEndDate,
        commercialDevPhaseEnd,
        commercialInvPhaseEnd,
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
        setVentureCloseDate,
        setModelStartYear,
        setLandClose,
        setConstructionStart,
        setFirstUnits,
        setLastUnits,
        setLastUnitHedge,
        setCompletion,
        setCompletionHedge,
        setStabilization,
        setFirstConstDraw,
        setLatestConstDraw,
        setForecastAsOf,
        setBudgetStart,
        setBudgetEnd,
        setActualsStart,
        setActualsEnd,
        setActualsDateAdjustment,
        setAdjustedActualsDate,
        setMonthsOfPreleasing,
        setMonthsToAbsorbPreleasing,
        setNumPreleaseUnits,
        setAvgUnitsAbsorbedPerMonth,
        setPercentRenewal,
        setDevelopmentPhaseEnd,
        setMonthsPostStabilization,
        setInvestmentPhaseStartDate,
        setInvestmentPhaseEndDate,
        setCommercialDevPhaseEnd,
        setCommercialInvPhaseEnd,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
} 