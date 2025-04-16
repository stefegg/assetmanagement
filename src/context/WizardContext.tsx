'use client'

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

export interface WizardContextType {
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
  
  // Tax Properties
  propertyTaxesInArrears: boolean;
  propertyTaxesPaymentMonths: string[];
  otherTaxesInArrears: boolean;
  otherTaxesPaymentMonths: string[];
  assessedPercentage: number[];
  cumulativeProjectCosts: number[];
  taxableValue: number[];
  assessmentOverride: number[];
  taxRateGrowth: number[];
  taxRate: number[];
  taxBillGrowth: number[];
  taxBillOverride: number[];
  taxes: number[];
  taxesGrowthRate: number[];
  monthlyAccrual: number[];
  propertyTaxPaymentsOverride: { [key: string]: { [month: number]: number } };
  otherTaxPaymentsOverride: { [key: string]: { [month: number]: number } };
  egi: number[];
  taxRateEGI: number[];
  otherTaxes: number[];

  // Insurance - Property
  totalInsurableValue: number;
  propertyInsuranceCostPer100: number;
  boilerMachineryCostPer100: number;
  propertyInsuranceGrowthRate: number[];
  propertyInsuranceAnnualPayment: number[];
  insurancePerUnit: number[];
  
  // Insurance - Casualty
  generalLiabilityExcessUmbrella: number;
  pollution: number;
  propertyRelatedPercentage: number;
  casualtyInsuranceGrowthRate: number[];
  casualtyInsuranceAnnualPayment: number[];

  // Insurance Monthly Details
  insuranceMonthlyDetails1: { [year: number]: { [month: number]: number } };
  insuranceMonthlyDetails2: { [year: number]: { [month: number]: number } };
  
  // Ground Lease
  groundLeasePaymentMonths: string[];
  groundLeaseGrowthRate: number[];
  groundLeaseAnnualPayment: number[];
  groundLeaseMonthlyAccrual: number[];
  groundLeaseMonthlyDetails1: { [year: number]: { [month: number]: number } };
  groundLeaseMonthlyDetails2: { [year: number]: { [month: number]: number } };
  stepUpMonth: string;
  
  // Commercial Assumptions
  generalVacancy: number
  commercialTenants: Array<{
    name: string
    nrsf: number
    nnnRate: number
    annualLeaseEsc: number
    leaseStart: string
    freeRentMonths: number
    camRate: number
    annualCamEsc: number
    tiPerSf: number
    tiConstructionTime: number
    lcPercentage: number
    lcTerm: number
  }>

  // Valuation Assumptions
  capRates: {
    residential: {
      month: number
      year: number
      baseRate: number
      hedgePercent: number
      hedgeBps: number
      totalHedge: number
      appliedCapRate: number
    }[]
    commercial: {
      spotCapRateDate: string
      spotCapRate: number
    }
  }
  capRateAdjustmentGroundLease: {
    bps: number
    percent: number
  }

  // Valuation Assessment
  valuationAssessment: {
    adjustResidentialValue: boolean;
    buyersAssessedPercent: number;
    treatmentOfTaxAbatement: string;
    residentialNOI: {
      totalRevenue: string;
      marketRent: string;
      vacancy: string;
      concessions: string;
      badDebt: string;
      expenses: string;
      taxes: string;
      normalizeVacancy: number;
      normalizeConcessions: number;
      normalizeBadDebt: number;
    };
    commercialNOI: {
      noi: string;
    };
    sellingCosts: {
      transferTaxTotal: number;
      transferTaxPaidBySeller: number;
      titleAndEscrow: number;
    };
    brokerCommission: {
      tier1: {
        cap: number;
        percentOfValue: number;
        devPhase: number;
        invPhase: number;
      };
      tier2: {
        cap: number;
        percentOfValue: number;
        devPhase: number;
        invPhase: number;
      };
    };
    dispositionFees: {
      greystar: number;
      other: number;
    };
  }

  // Setters
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
  
  // Tax Setters
  setPropertyTaxesInArrears: (value: boolean) => void;
  setPropertyTaxesPaymentMonths: (value: string[]) => void;
  setOtherTaxesInArrears: (value: boolean) => void;
  setOtherTaxesPaymentMonths: (value: string[]) => void;
  setAssessedPercentage: (value: number[]) => void;
  setAssessmentOverride: (value: number[]) => void;
  setTaxRateGrowth: (value: number[]) => void;
  setTaxBillGrowth: (value: number[]) => void;
  setTaxBillOverride: (value: number[]) => void;

  // Additional Tax Setters
  setPropertyTaxPaymentsOverride: (value: { [key: string]: { [month: number]: number } }) => void;
  setOtherTaxPaymentsOverride: (value: { [key: string]: { [month: number]: number } }) => void;
  setEgi: (value: number[]) => void;
  setTaxRateEGI: (value: number[]) => void;
  setOtherTaxes: (value: number[]) => void;

  // Insurance - Property
  setTotalInsurableValue: (value: number) => void;
  setPropertyInsuranceCostPer100: (value: number) => void;
  setBoilerMachineryCostPer100: (value: number) => void;
  setPropertyInsuranceGrowthRate: (values: number[]) => void;
  setPropertyInsuranceAnnualPayment: (values: number[]) => void;
  setInsurancePerUnit: (values: number[]) => void;
  
  // Insurance - Casualty
  setGeneralLiabilityExcessUmbrella: (value: number) => void;
  setPollution: (value: number) => void;
  setPropertyRelatedPercentage: (value: number) => void;
  setCasualtyInsuranceGrowthRate: (values: number[]) => void;
  setCasualtyInsuranceAnnualPayment: (values: number[]) => void;

  // Insurance Monthly Details setters
  setInsuranceMonthlyDetails1: (details: { [year: number]: { [month: number]: number } }) => void;
  setInsuranceMonthlyDetails2: (details: { [year: number]: { [month: number]: number } }) => void;

  // Ground Lease setters
  setGroundLeasePaymentMonths: (value: string[]) => void;
  setGroundLeaseGrowthRate: (values: number[]) => void;
  setGroundLeaseAnnualPayment: (values: number[]) => void;
  setGroundLeaseMonthlyAccrual: (values: number[]) => void;
  setGroundLeaseMonthlyDetails1: (details: { [year: number]: { [month: number]: number } }) => void;
  setGroundLeaseMonthlyDetails2: (details: { [year: number]: { [month: number]: number } }) => void;
  setStepUpMonth: (month: string) => void;

  // Commercial Assumptions
  setGeneralVacancy: (value: number) => void
  setCommercialTenants: (tenants: Array<{
    name: string
    nrsf: number
    nnnRate: number
    annualLeaseEsc: number
    leaseStart: string
    freeRentMonths: number
    camRate: number
    annualCamEsc: number
    tiPerSf: number
    tiConstructionTime: number
    lcPercentage: number
    lcTerm: number
  }>) => void

  // Valuation Assumptions
  setCapRates: (rates: {
    residential: {
      month: number
      year: number
      baseRate: number
      hedgePercent: number
      hedgeBps: number
      totalHedge: number
      appliedCapRate: number
    }[]
    commercial: {
      spotCapRateDate: string
      spotCapRate: number
    }
  }) => void
  setCapRateAdjustmentGroundLease: (adjustment: {
    bps: number
    percent: number
  }) => void

  // Valuation Assessment
  setValuationAssessment: (valuationAssessment: {
    adjustResidentialValue: boolean;
    buyersAssessedPercent: number;
    treatmentOfTaxAbatement: string;
    residentialNOI: {
      totalRevenue: string;
      marketRent: string;
      vacancy: string;
      concessions: string;
      badDebt: string;
      expenses: string;
      taxes: string;
      normalizeVacancy: number;
      normalizeConcessions: number;
      normalizeBadDebt: number;
    };
    commercialNOI: {
      noi: string;
    };
    sellingCosts: {
      transferTaxTotal: number;
      transferTaxPaidBySeller: number;
      titleAndEscrow: number;
    };
    brokerCommission: {
      tier1: {
        cap: number;
        percentOfValue: number;
        devPhase: number;
        invPhase: number;
      };
      tier2: {
        cap: number;
        percentOfValue: number;
        devPhase: number;
        invPhase: number;
      };
    };
    dispositionFees: {
      greystar: number;
      other: number;
    };
  }) => void
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

  // Tax States
  const [propertyTaxesInArrears, setPropertyTaxesInArrears] = useState(false);
  const [propertyTaxesPaymentMonths, setPropertyTaxesPaymentMonths] = useState<string[]>(['Apr', 'None', 'None', 'None']);
  const [otherTaxesInArrears, setOtherTaxesInArrears] = useState(false);
  const [otherTaxesPaymentMonths, setOtherTaxesPaymentMonths] = useState<string[]>(['Apr', 'None', 'None', 'None']);
  const [assessedPercentage, setAssessedPercentage] = useState<number[]>(Array(16).fill(85));
  const [cumulativeProjectCosts] = useState<number[]>(Array(16).fill(0));
  const [taxableValue] = useState<number[]>(Array(16).fill(0));
  const [assessmentOverride, setAssessmentOverride] = useState<number[]>(Array(16).fill(0));
  const [taxRateGrowth, setTaxRateGrowth] = useState<number[]>(Array(16).fill(0));
  const [taxRate] = useState<number[]>(Array(16).fill(0));
  const [taxBillGrowth, setTaxBillGrowth] = useState<number[]>(Array(16).fill(0));
  const [taxBillOverride, setTaxBillOverride] = useState<number[]>(Array(16).fill(0));
  const [taxes] = useState<number[]>(Array(16).fill(0));
  const [taxesGrowthRate] = useState<number[]>(Array(16).fill(0));
  const [monthlyAccrual] = useState<number[]>(Array(16).fill(0));

  // Additional Tax States
  const [propertyTaxPaymentsOverride, setPropertyTaxPaymentsOverride] = useState<{ [key: string]: { [month: number]: number } }>({});
  const [otherTaxPaymentsOverride, setOtherTaxPaymentsOverride] = useState<{ [key: string]: { [month: number]: number } }>({});
  const [egi, setEgi] = useState<number[]>(Array(16).fill(0));
  const [taxRateEGI, setTaxRateEGI] = useState<number[]>(Array(16).fill(0));
  const [otherTaxes, setOtherTaxes] = useState<number[]>(Array(16).fill(0));

  // Insurance - Property
  const [totalInsurableValue, setTotalInsurableValue] = useState<number>(0);
  const [propertyInsuranceCostPer100, setPropertyInsuranceCostPer100] = useState<number>(0);
  const [boilerMachineryCostPer100, setBoilerMachineryCostPer100] = useState<number>(0);
  const [propertyInsuranceGrowthRate, setPropertyInsuranceGrowthRate] = useState<number[]>(Array(16).fill(0));
  const [propertyInsuranceAnnualPayment, setPropertyInsuranceAnnualPayment] = useState<number[]>(Array(16).fill(0));
  const [insurancePerUnit, setInsurancePerUnit] = useState<number[]>(Array(16).fill(0));
  
  // Insurance - Casualty
  const [generalLiabilityExcessUmbrella, setGeneralLiabilityExcessUmbrella] = useState<number>(0);
  const [pollution, setPollution] = useState<number>(0);
  const [propertyRelatedPercentage, setPropertyRelatedPercentage] = useState<number>(0);
  const [casualtyInsuranceGrowthRate, setCasualtyInsuranceGrowthRate] = useState<number[]>(Array(16).fill(0));
  const [casualtyInsuranceAnnualPayment, setCasualtyInsuranceAnnualPayment] = useState<number[]>(Array(16).fill(0));

  // Insurance Monthly Details
  const [insuranceMonthlyDetails1, setInsuranceMonthlyDetails1] = useState<{ [year: number]: { [month: number]: number } }>({});
  const [insuranceMonthlyDetails2, setInsuranceMonthlyDetails2] = useState<{ [year: number]: { [month: number]: number } }>({});

  // Ground Lease
  const [groundLeasePaymentMonths, setGroundLeasePaymentMonths] = useState<string[]>(['Jan', 'Apr', 'Jul', 'Oct']);
  const [groundLeaseGrowthRate, setGroundLeaseGrowthRate] = useState<number[]>(Array(16).fill(0));
  const [groundLeaseAnnualPayment, setGroundLeaseAnnualPayment] = useState<number[]>(Array(16).fill(0));
  const [groundLeaseMonthlyAccrual, setGroundLeaseMonthlyAccrual] = useState<number[]>(Array(16).fill(0));
  const [groundLeaseMonthlyDetails1, setGroundLeaseMonthlyDetails1] = useState<{ [year: number]: { [month: number]: number } }>({});
  const [groundLeaseMonthlyDetails2, setGroundLeaseMonthlyDetails2] = useState<{ [year: number]: { [month: number]: number } }>({});
  const [stepUpMonth, setStepUpMonth] = useState<string>('Mar');

  // Commercial Assumptions
  const [generalVacancy, setGeneralVacancy] = useState(0);
  const [commercialTenants, setCommercialTenants] = useState<Array<{
    name: string
    nrsf: number
    nnnRate: number
    annualLeaseEsc: number
    leaseStart: string
    freeRentMonths: number
    camRate: number
    annualCamEsc: number
    tiPerSf: number
    tiConstructionTime: number
    lcPercentage: number
    lcTerm: number
  }>>([]);

  // Valuation Assumptions
  const [capRates, setCapRates] = useState<{
    residential: {
      month: number
      year: number
      baseRate: number
      hedgePercent: number
      hedgeBps: number
      totalHedge: number
      appliedCapRate: number
    }[]
    commercial: {
      spotCapRateDate: string
      spotCapRate: number
    }
  }>({ residential: [], commercial: { spotCapRateDate: '', spotCapRate: 0 } });
  const [capRateAdjustmentGroundLease, setCapRateAdjustmentGroundLease] = useState<{ bps: number; percent: number }>({ bps: 0, percent: 0 });

  // Valuation Assessment
  const [valuationAssessment, setValuationAssessment] = useState({
    adjustResidentialValue: false,
    buyersAssessedPercent: 85,
    treatmentOfTaxAbatement: 'Not Capitalized',
    residentialNOI: {
      totalRevenue: 'F12',
      marketRent: 'F12',
      vacancy: 'F12',
      concessions: 'F12',
      badDebt: 'F12',
      expenses: 'F12',
      taxes: 'F12',
      normalizeVacancy: 0,
      normalizeConcessions: 0,
      normalizeBadDebt: 0
    },
    commercialNOI: {
      noi: 'F12'
    },
    sellingCosts: {
      transferTaxTotal: 0.2,
      transferTaxPaidBySeller: 0.2,
      titleAndEscrow: 0
    },
    brokerCommission: {
      tier1: {
        cap: 45000000,
        percentOfValue: 0.5,
        devPhase: 45000000,
        invPhase: 45000000
      },
      tier2: {
        cap: 200000000,
        percentOfValue: 0.3,
        devPhase: 57509290,
        invPhase: 60312315
      }
    },
    dispositionFees: {
      greystar: 0,
      other: 0
    }
  });

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
        propertyTaxesInArrears,
        propertyTaxesPaymentMonths,
        otherTaxesInArrears,
        otherTaxesPaymentMonths,
        assessedPercentage,
        cumulativeProjectCosts,
        taxableValue,
        assessmentOverride,
        taxRateGrowth,
        taxRate,
        taxBillGrowth,
        taxBillOverride,
        taxes,
        taxesGrowthRate,
        monthlyAccrual,
        propertyTaxPaymentsOverride,
        otherTaxPaymentsOverride,
        egi,
        taxRateEGI,
        otherTaxes,
        totalInsurableValue,
        propertyInsuranceCostPer100,
        boilerMachineryCostPer100,
        propertyInsuranceGrowthRate,
        propertyInsuranceAnnualPayment,
        insurancePerUnit,
        generalLiabilityExcessUmbrella,
        pollution,
        propertyRelatedPercentage,
        casualtyInsuranceGrowthRate,
        casualtyInsuranceAnnualPayment,
        insuranceMonthlyDetails1,
        insuranceMonthlyDetails2,
        groundLeasePaymentMonths,
        groundLeaseGrowthRate,
        groundLeaseAnnualPayment,
        groundLeaseMonthlyAccrual,
        groundLeaseMonthlyDetails1,
        groundLeaseMonthlyDetails2,
        stepUpMonth,
        generalVacancy,
        commercialTenants,
        capRates,
        capRateAdjustmentGroundLease,
        valuationAssessment,
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
        setPropertyTaxesInArrears,
        setPropertyTaxesPaymentMonths,
        setOtherTaxesInArrears,
        setOtherTaxesPaymentMonths,
        setAssessedPercentage,
        setAssessmentOverride,
        setTaxRateGrowth,
        setTaxBillGrowth,
        setTaxBillOverride,
        setPropertyTaxPaymentsOverride,
        setOtherTaxPaymentsOverride,
        setEgi,
        setTaxRateEGI,
        setOtherTaxes,
        setTotalInsurableValue,
        setPropertyInsuranceCostPer100,
        setBoilerMachineryCostPer100,
        setPropertyInsuranceGrowthRate,
        setPropertyInsuranceAnnualPayment,
        setInsurancePerUnit,
        setGeneralLiabilityExcessUmbrella,
        setPollution,
        setPropertyRelatedPercentage,
        setCasualtyInsuranceGrowthRate,
        setCasualtyInsuranceAnnualPayment,
        setInsuranceMonthlyDetails1,
        setInsuranceMonthlyDetails2,
        setGroundLeasePaymentMonths,
        setGroundLeaseGrowthRate,
        setGroundLeaseAnnualPayment,
        setGroundLeaseMonthlyAccrual,
        setGroundLeaseMonthlyDetails1,
        setGroundLeaseMonthlyDetails2,
        setStepUpMonth,
        setGeneralVacancy,
        setCapRates,
        setCapRateAdjustmentGroundLease,
        setCommercialTenants,
        setValuationAssessment
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