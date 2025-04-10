import { createContext, useContext, ReactNode, useState } from 'react'

export interface LoanSpreadChanges {
  notifyDate: string;
  termMths: number;
  startDate: string;
  endDate: string;
  extensionFee: number;
  rateSpread: number;
  rateAdjustment: number;
  changeExtensionFee: number;
  utilized: "Y" | "N";
  adjRepaymentDate: string;
}

export interface InterestHedging {
  hedgeRate: number;
  startDate: string;
  endDate: string;
  floorRate: number;
  ceilingRate: number;
  swapFixed: number;
}

export interface DSCRTest {
  revenuePeriod: string;
  expensePeriod: string;
  requiredCoverage: number;
  requiredDebtYield: number;
  requiredLTV: number;
  amortizationYears: number;
  minimumInterestRate: number;
  forwardCurve: string;
  spread: number;
  testStartDate: string;
  testEndDate: string;
  passFail: string;
}

export interface Loan {
  lender: string;
  loanStartDate: string;
  monthsNote: number;
  reference: string;
  spreadOverReference: number;
  referenceHedgeBps: number;
  loanBalance: number;
  totalLoanCommitment: number;
  originationFee: number;
  prePaymentPenaltyPercent: number;
  prePaymentPenaltyAmount: number;
  fixedMonthlyAmort: "Y" | "N";
  monthlyAmortAmount: number;
  amortizingPrincipal: "Y" | "N";
  amortizationStartDate: string;
  amortizationTermMonths: number;
  amortizationRate: number;
  spreadChanges: LoanSpreadChanges[];
  interestHedging: InterestHedging;
  dscrTests: DSCRTest[];
  loanDebtServiceCoverageThrough: string;
}

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
  partnershipAbstract: string;
  preferredReturnCompoundPeriod: string;
  tier1Type: string;
  tier1FundingCap: number;
  tier2Type: string;
  tier2FundingCap: number;
  tier3Type: string;
  tier3FundingCap: number;
  tier4Type: string;
  tier4FundingCap: number;
  tier5Type: string;
  tier5FundingCap: number;
  tier6Type: string;
  tier6FundingCap: number;
  tier7Type: string;
  tier7FundingCap: number;
  tier8Type: string;
  tier8FundingCap: number;
  tier9Type: string;
  tier9FundingCap: number;
  tier10Type: string;
  tier10FundingCap: number;
  totalProjectCost: number;
  totalEquity: number;
  totalDebt: number;
  totalCoinvest: number;
  loans: Loan[];
  stabilizedOccupancy: number;
  propertyMinCash: number;
  propertyMaxCash: number;
  propertyMgmtFeePercent: number;
  propertyMgmtFeeMin: number;
  assetMgmtFeePercent: number;
  assetMgmtFeeMin: number;
  assetMgmtFeeStart: string;
  marketRentGrowth: number[];
  gainLossToLeaseGrowth: number[];
  downUnitLossGrowth: number[];
  miscOtherRentsGrowth: number[];
  recurringConcessionsGrowth: number[];
  concessionsGrowth: number[];
  vacancyLossGrowth: number[];
  nonRevenueUnitsGrowth: number[];
  badDebtGrowth: number[];
  badDebtRecoveryGrowth: number[];
  miscDirectIncomeGrowth: number[];
  otherIncResidentialGrowth: number[];
  expenseShoppingCommercialGrowth: number[];
  rentalOtherIncomeGrowth: number[];
  miscIncomeGrowth: number[];
  payrollBenefitsGrowth: number[];
  repairsMaintenanceGrowth: number[];
  outsideServicesGrowth: number[];
  makeReadyGrowth: number[];
  recreationalAmenitiesGrowth: number[];
  contractServicesGrowth: number[];
  corporateHousingGrowth: number[];
  guestSuiteGrowth: number[];
  foodServiceGrowth: number[];
  advertisingMarketingGrowth: number[];
  officeExpensesGrowth: number[];
  otherGeneralAdminGrowth: number[];
  generalAdminGrowth: number[];
  utilitiesGrowth: number[];
  propertyGrowth: number[];
  recoverableOpExpGrowth: number[];
  routineReplacementGrowth: number[];
  capitalRenovationGrowth: number[];
  otherNonOpExpGrowth: number[];
  otherExpensesGrowth: number[];
  partnershipOwnerGrowth: number[];
  debtServiceGroundLeaseGrowth: number[];
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
  setPartnershipAbstract: (value: string) => void;
  setPreferredReturnCompoundPeriod: (value: string) => void;
  setTier1Type: (value: string) => void;
  setTier1FundingCap: (value: number) => void;
  setTier2Type: (value: string) => void;
  setTier2FundingCap: (value: number) => void;
  setTier3Type: (value: string) => void;
  setTier3FundingCap: (value: number) => void;
  setTier4Type: (value: string) => void;
  setTier4FundingCap: (value: number) => void;
  setTier5Type: (value: string) => void;
  setTier5FundingCap: (value: number) => void;
  setTier6Type: (value: string) => void;
  setTier6FundingCap: (value: number) => void;
  setTier7Type: (value: string) => void;
  setTier7FundingCap: (value: number) => void;
  setTier8Type: (value: string) => void;
  setTier8FundingCap: (value: number) => void;
  setTier9Type: (value: string) => void;
  setTier9FundingCap: (value: number) => void;
  setTier10Type: (value: string) => void;
  setTier10FundingCap: (value: number) => void;
  setTotalProjectCost: (value: number) => void;
  setTotalEquity: (value: number) => void;
  setTotalDebt: (value: number) => void;
  setTotalCoinvest: (value: number) => void;
  setLoans: (loans: Loan[]) => void;
  setStabilizedOccupancy: (value: number) => void;
  setPropertyMinCash: (value: number) => void;
  setPropertyMaxCash: (value: number) => void;
  setPropertyMgmtFeePercent: (value: number) => void;
  setPropertyMgmtFeeMin: (value: number) => void;
  setAssetMgmtFeePercent: (value: number) => void;
  setAssetMgmtFeeMin: (value: number) => void;
  setAssetMgmtFeeStart: (value: string) => void;
  setMarketRentGrowth: (value: number[]) => void;
  setGainLossToLeaseGrowth: (value: number[]) => void;
  setDownUnitLossGrowth: (value: number[]) => void;
  setMiscOtherRentsGrowth: (value: number[]) => void;
  setRecurringConcessionsGrowth: (value: number[]) => void;
  setConcessionsGrowth: (value: number[]) => void;
  setVacancyLossGrowth: (value: number[]) => void;
  setNonRevenueUnitsGrowth: (value: number[]) => void;
  setBadDebtGrowth: (value: number[]) => void;
  setBadDebtRecoveryGrowth: (value: number[]) => void;
  setMiscDirectIncomeGrowth: (value: number[]) => void;
  setOtherIncResidentialGrowth: (value: number[]) => void;
  setExpenseShoppingCommercialGrowth: (value: number[]) => void;
  setRentalOtherIncomeGrowth: (value: number[]) => void;
  setMiscIncomeGrowth: (value: number[]) => void;
  setPayrollBenefitsGrowth: (value: number[]) => void;
  setRepairsMaintenanceGrowth: (value: number[]) => void;
  setOutsideServicesGrowth: (value: number[]) => void;
  setMakeReadyGrowth: (value: number[]) => void;
  setRecreationalAmenitiesGrowth: (value: number[]) => void;
  setContractServicesGrowth: (value: number[]) => void;
  setCorporateHousingGrowth: (value: number[]) => void;
  setGuestSuiteGrowth: (value: number[]) => void;
  setFoodServiceGrowth: (value: number[]) => void;
  setAdvertisingMarketingGrowth: (value: number[]) => void;
  setOfficeExpensesGrowth: (value: number[]) => void;
  setOtherGeneralAdminGrowth: (value: number[]) => void;
  setGeneralAdminGrowth: (value: number[]) => void;
  setUtilitiesGrowth: (value: number[]) => void;
  setPropertyGrowth: (value: number[]) => void;
  setRecoverableOpExpGrowth: (value: number[]) => void;
  setRoutineReplacementGrowth: (value: number[]) => void;
  setCapitalRenovationGrowth: (value: number[]) => void;
  setOtherNonOpExpGrowth: (value: number[]) => void;
  setOtherExpensesGrowth: (value: number[]) => void;
  setPartnershipOwnerGrowth: (value: number[]) => void;
  setDebtServiceGroundLeaseGrowth: (value: number[]) => void;
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

  // Partnership Structure states
  const [partnershipAbstract, setPartnershipAbstract] = useState('');
  const [preferredReturnCompoundPeriod, setPreferredReturnCompoundPeriod] = useState('Annually');
  // Funding Percentages states
  const [tier1Type, setTier1Type] = useState('Priority Capital');
  const [tier1FundingCap, setTier1FundingCap] = useState(0);
  const [tier2Type, setTier2Type] = useState('Initial Cost Overruns');
  const [tier2FundingCap, setTier2FundingCap] = useState(0);
  const [tier3Type, setTier3Type] = useState('Cost Overruns');
  const [tier3FundingCap, setTier3FundingCap] = useState(0);
  const [tier4Type, setTier4Type] = useState('Additional Capital');
  const [tier4FundingCap, setTier4FundingCap] = useState(0);
  const [tier5Type, setTier5Type] = useState('Cost Overruns 2');
  const [tier5FundingCap, setTier5FundingCap] = useState(0);
  const [tier6Type, setTier6Type] = useState('');
  const [tier6FundingCap, setTier6FundingCap] = useState(0);
  const [tier7Type, setTier7Type] = useState('');
  const [tier7FundingCap, setTier7FundingCap] = useState(0);
  const [tier8Type, setTier8Type] = useState('');
  const [tier8FundingCap, setTier8FundingCap] = useState(0);
  const [tier9Type, setTier9Type] = useState('');
  const [tier9FundingCap, setTier9FundingCap] = useState(0);
  const [tier10Type, setTier10Type] = useState('');
  const [tier10FundingCap, setTier10FundingCap] = useState(0);
  // Project Capitalization states
  const [totalProjectCost, setTotalProjectCost] = useState(0);
  const [totalEquity, setTotalEquity] = useState(0);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalCoinvest, setTotalCoinvest] = useState(0);

  // Income & Expenses states
  const [stabilizedOccupancy, setStabilizedOccupancy] = useState(95.00);
  const [propertyMinCash, setPropertyMinCash] = useState(500000);
  const [propertyMaxCash, setPropertyMaxCash] = useState(1700000);
  const [propertyMgmtFeePercent, setPropertyMgmtFeePercent] = useState(3.00);
  const [propertyMgmtFeeMin, setPropertyMgmtFeeMin] = useState(10000);
  const [assetMgmtFeePercent, setAssetMgmtFeePercent] = useState(3.00);
  const [assetMgmtFeeMin, setAssetMgmtFeeMin] = useState(10000);
  const [assetMgmtFeeStart, setAssetMgmtFeeStart] = useState('2026-07-31');

  // P&L Growth states
  const [marketRentGrowth, setMarketRentGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [gainLossToLeaseGrowth, setGainLossToLeaseGrowth] = useState<number[]>(Array(18).fill(1.00));
  const [downUnitLossGrowth, setDownUnitLossGrowth] = useState<number[]>(Array(18).fill(0.00));
  const [miscOtherRentsGrowth, setMiscOtherRentsGrowth] = useState<number[]>(Array(18).fill(0.15));
  const [recurringConcessionsGrowth, setRecurringConcessionsGrowth] = useState<number[]>(Array(18).fill(0.00));
  const [concessionsGrowth, setConcessionsGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [vacancyLossGrowth, setVacancyLossGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [nonRevenueUnitsGrowth, setNonRevenueUnitsGrowth] = useState<number[]>(Array(18).fill(0.25));
  const [badDebtGrowth, setBadDebtGrowth] = useState<number[]>(Array(18).fill(0.50));
  const [badDebtRecoveryGrowth, setBadDebtRecoveryGrowth] = useState<number[]>(Array(18).fill(0.00));
  const [miscDirectIncomeGrowth, setMiscDirectIncomeGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [otherIncResidentialGrowth, setOtherIncResidentialGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [expenseShoppingCommercialGrowth, setExpenseShoppingCommercialGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [rentalOtherIncomeGrowth, setRentalOtherIncomeGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [miscIncomeGrowth, setMiscIncomeGrowth] = useState<number[]>(Array(18).fill(3.00));
  const [payrollBenefitsGrowth, setPayrollBenefitsGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [repairsMaintenanceGrowth, setRepairsMaintenanceGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [outsideServicesGrowth, setOutsideServicesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [makeReadyGrowth, setMakeReadyGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [recreationalAmenitiesGrowth, setRecreationalAmenitiesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [contractServicesGrowth, setContractServicesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [corporateHousingGrowth, setCorporateHousingGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [guestSuiteGrowth, setGuestSuiteGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [foodServiceGrowth, setFoodServiceGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [advertisingMarketingGrowth, setAdvertisingMarketingGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [officeExpensesGrowth, setOfficeExpensesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [otherGeneralAdminGrowth, setOtherGeneralAdminGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [generalAdminGrowth, setGeneralAdminGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [utilitiesGrowth, setUtilitiesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [propertyGrowth, setPropertyGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [recoverableOpExpGrowth, setRecoverableOpExpGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [routineReplacementGrowth, setRoutineReplacementGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [capitalRenovationGrowth, setCapitalRenovationGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [otherNonOpExpGrowth, setOtherNonOpExpGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [otherExpensesGrowth, setOtherExpensesGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [partnershipOwnerGrowth, setPartnershipOwnerGrowth] = useState<number[]>(Array(18).fill(2.00));
  const [debtServiceGroundLeaseGrowth, setDebtServiceGroundLeaseGrowth] = useState<number[]>(Array(18).fill(2.00));

  const [loans, setLoans] = useState<Loan[]>([]);

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
        partnershipAbstract,
        preferredReturnCompoundPeriod,
        tier1Type,
        tier1FundingCap,
        tier2Type,
        tier2FundingCap,
        tier3Type,
        tier3FundingCap,
        tier4Type,
        tier4FundingCap,
        tier5Type,
        tier5FundingCap,
        tier6Type,
        tier6FundingCap,
        tier7Type,
        tier7FundingCap,
        tier8Type,
        tier8FundingCap,
        tier9Type,
        tier9FundingCap,
        tier10Type,
        tier10FundingCap,
        totalProjectCost,
        totalEquity,
        totalDebt,
        totalCoinvest,
        loans,
        stabilizedOccupancy,
        propertyMinCash,
        propertyMaxCash,
        propertyMgmtFeePercent,
        propertyMgmtFeeMin,
        assetMgmtFeePercent,
        assetMgmtFeeMin,
        assetMgmtFeeStart,
        marketRentGrowth,
        gainLossToLeaseGrowth,
        downUnitLossGrowth,
        miscOtherRentsGrowth,
        recurringConcessionsGrowth,
        concessionsGrowth,
        vacancyLossGrowth,
        nonRevenueUnitsGrowth,
        badDebtGrowth,
        badDebtRecoveryGrowth,
        miscDirectIncomeGrowth,
        otherIncResidentialGrowth,
        expenseShoppingCommercialGrowth,
        rentalOtherIncomeGrowth,
        miscIncomeGrowth,
        payrollBenefitsGrowth,
        repairsMaintenanceGrowth,
        outsideServicesGrowth,
        makeReadyGrowth,
        recreationalAmenitiesGrowth,
        contractServicesGrowth,
        corporateHousingGrowth,
        guestSuiteGrowth,
        foodServiceGrowth,
        advertisingMarketingGrowth,
        officeExpensesGrowth,
        otherGeneralAdminGrowth,
        generalAdminGrowth,
        utilitiesGrowth,
        propertyGrowth,
        recoverableOpExpGrowth,
        routineReplacementGrowth,
        capitalRenovationGrowth,
        otherNonOpExpGrowth,
        otherExpensesGrowth,
        partnershipOwnerGrowth,
        debtServiceGroundLeaseGrowth,
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
        setPartnershipAbstract,
        setPreferredReturnCompoundPeriod,
        setTier1Type,
        setTier1FundingCap,
        setTier2Type,
        setTier2FundingCap,
        setTier3Type,
        setTier3FundingCap,
        setTier4Type,
        setTier4FundingCap,
        setTier5Type,
        setTier5FundingCap,
        setTier6Type,
        setTier6FundingCap,
        setTier7Type,
        setTier7FundingCap,
        setTier8Type,
        setTier8FundingCap,
        setTier9Type,
        setTier9FundingCap,
        setTier10Type,
        setTier10FundingCap,
        setTotalProjectCost,
        setTotalEquity,
        setTotalDebt,
        setTotalCoinvest,
        setLoans,
        setStabilizedOccupancy,
        setPropertyMinCash,
        setPropertyMaxCash,
        setPropertyMgmtFeePercent,
        setPropertyMgmtFeeMin,
        setAssetMgmtFeePercent,
        setAssetMgmtFeeMin,
        setAssetMgmtFeeStart,
        setMarketRentGrowth,
        setGainLossToLeaseGrowth,
        setDownUnitLossGrowth,
        setMiscOtherRentsGrowth,
        setRecurringConcessionsGrowth,
        setConcessionsGrowth,
        setVacancyLossGrowth,
        setNonRevenueUnitsGrowth,
        setBadDebtGrowth,
        setBadDebtRecoveryGrowth,
        setMiscDirectIncomeGrowth,
        setOtherIncResidentialGrowth,
        setExpenseShoppingCommercialGrowth,
        setRentalOtherIncomeGrowth,
        setMiscIncomeGrowth,
        setPayrollBenefitsGrowth,
        setRepairsMaintenanceGrowth,
        setOutsideServicesGrowth,
        setMakeReadyGrowth,
        setRecreationalAmenitiesGrowth,
        setContractServicesGrowth,
        setCorporateHousingGrowth,
        setGuestSuiteGrowth,
        setFoodServiceGrowth,
        setAdvertisingMarketingGrowth,
        setOfficeExpensesGrowth,
        setOtherGeneralAdminGrowth,
        setGeneralAdminGrowth,
        setUtilitiesGrowth,
        setPropertyGrowth,
        setRecoverableOpExpGrowth,
        setRoutineReplacementGrowth,
        setCapitalRenovationGrowth,
        setOtherNonOpExpGrowth,
        setOtherExpensesGrowth,
        setPartnershipOwnerGrowth,
        setDebtServiceGroundLeaseGrowth,
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