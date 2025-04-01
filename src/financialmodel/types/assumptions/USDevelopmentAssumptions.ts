// Property Description
export type PropertyDescriptionInputType = {
  propertyName: string;
  address: string;
  city: string;
  state: string;
  msa: string;
  submarket: string;
  productType: string;

  residentialMarketRateUnits: number; // e.g., 204497
  residentialAffordableUnits: number; // e.g., 188
  totalNRSF: number;

  grossLandArea: number;
  netLandArea: number;

  loanAbstractLink: string;
  investmentVehicle: string;
};

// Project Schedule

export type ProjectScheduleInputType = {
  ventureCloseDate: Date;

  // construction timeline
  landCloseDate: Date;
  constructionStartDate: Date;
  firstUnitDate: Date;
  lastUnitDate: Date;
  lastUnitHedgeMonth: number;
  completionDate: Date;
  completionHedge: number;
  stablizationDate: Date;

  // construction draw dates
  firstConstructionDrawDate: Date;
  LatestConstrcutionDrawDate: Date;

  //Yardi Dates
  forecastAsOfDate: Date;
  budgetStartDate: Date;
  budgetEndDate: Date;
  actualStartDate: Date;
  actualEndDate: Date;
  actualDateAdjustment: number;
  adjustedActualDate: Date;

  //Residential Lease up assumptions:
  monthsOfPrelesasing: number;
  monthsToAbsorbPreleasing: number;
  numberOfPreleasedUnits: number;
  avgUnitsAbsorbedPerMonth: number;
  percentageRenewal: number;

  //Residential Valuation
  devPhaseEndDate: number;
  invPhaseStartDate: Date;
  invPhaseEndDate: Date;

  //commercial Valuation
  commercialInvPhaseEnd: Date;
};

// Partnership structure

export type PartnershipStructureInputType = {
  pertnershipAbstract: string;
  preferredReturnCompoundPeriod: string;

  //Funding by tiers
  fundingType: string[];
  fundingCap: number[];

  // Development Partners
  devPartners: PartnerInputType[];

  // Waterfall Structure
  devWaterfall: WaterfallStructureInputType;
  invWaterfall: WaterfallStructureInputType;

  // Coinvestment Return Enhancements
  coinvReturnEnhFee1: number;
  coinvReturnEnhFee2: number;
  coinvReturnEnhPromoteScrape: number;

  promoteIssuanceCashPercentage: number;

  // VM Fee
  vmFeeDev: number;
  vmFeeDevPercentageOf: "Equity" | "GAV";
  vmFeeDevEquityType: "Committed" | "Invested" | "N/A";

  vmFeeStablization: number;
  vmFeeStablizationPercentageOf: "Equity" | "GAV";
  vmFeeStablizationEquityType: "Committed" | "Invested" | "N/A";
};

export type PartnerInputType = {
  partnerName: string;
  contribution: number[];
  distribution: number[];
  preferredReturn: number[];
  isCoinvestPartner: boolean;
  isHurdlePartner: boolean;
  includeInVMFee: boolean;
};

export type WaterfallStructureInputType = {
  hurdleType: string[];
  upToIRR: number[];
  upToMultiple: number[];
  lpShareAboveHurdle: number[];
};

// Debt Assumptions

export type DebtStructureInputType = {
  interestRateUpdatedDate: Date;
};

export type LoanInputType = {
  loanName: string;
  lender: string;
  loanStartDate: Date;
  loanMonths: number;
  reference: string;
  spreadOverRef: number;
  refHedgeBPS: number;
  loanBalance: number;
  totalLoanCommitment: number;
  originationFee: number;
  prepaymentPenaltyPercentage: number;
  prepaymentPenaltyAmount: number;

  // Amortization
  isFixedMonthAmortization: boolean;
  monthlyAmortizationAmount: number;
  isAmoritizingPrincipal: boolean;
  amortizationStartDate: Date;
  amortizationTermMonths: number;
  amortizationRate: number;

  // loan spread changes
  loanSpreadChanges: LoanSpreadChangesInputType[];

  interestHedging: InterestHedgingInputType[];

  loanDebtServiceCoverageThroughDate: Date;

  // DSCR Test rates
  dscrSOFRSpread?: number;
  dscrTenYearTPlus200?: number;
  dscrPrime?: number;
  dscrFixed: number;
  dscrAmortizationYears: number;

  dscrTests: DSCRTestInputType[];
};

export type DSCRTestInputType = {
  name: string;
  trailingMonths: number;
  testStartDate: Date;
  testEndDate: Date;
  requiredCoverage: number;
  consecutiveOrAvg: "Consecutive" | "Average";
};

export type LoanSpreadChangesInputType = {
  loanSpreadChangeName: string;
  notifyDate: Date;
  termMonths: number;
  startDate: Date;
  endDate: Date;
  extensionFeeBPS: number;
  rateSpread: number;
  rateAdjustment: number;
  extensionFee: number;
};

export type InterestHedgingInputType = {
  name: string;
  hedgeRateInclSpread: number;
  startDate: Date;
  endDate: Date;
};

// Income & expenses

export type IncomeAndExpenseInputType = {
  // occupancy rate
  marketRatePhysicalOccupancy: number;
  affordablePhysicalOccupancy: number;

  propertyCashMinimum: number;
  propertyCashCap: number;

  dateType: "Monthly" | "Quarterly" | "Yearly";
  dates: Date[];

  // P&L Growth

  marketRentGrowth: number[];
  gainLossToLeaseGrowth: number[];
  downUnitLossGrowth: number[];
  miscOtherRentsGrowth: number[];
  recurringConcessionsGrowth: number[];
  concessionsGrowth: number[];
  vacancyLossGrowth: number[];
  nonRevenueUnitsGrowth: number[];
  badDebGrowtht: number[];
  badDebtRecoveryGrowth: number[];
  otherMiscRentalIncomeGrowth: number[];
  totalOtherIncResidentialGrowth: number[];
  totalCorporateHousingIncomeGrowth: number[];
  totalRentalOtherIncCommercialGrowth: number[];
  totalOtherMiscIncomeGrowth: number[];

  totalPayrollBenefitsGrowth: number[];
  totalRepairsMaintenanceGrowth: number[];
  totalStudentTurnoverExpenseGrowth: number[];
  totalMakeReadyRedecoratingGrowth: number[];
  totalRecreationalAmenitiesGrowth: number[];
  totalContractServicesGrowth: number[];
  totalCorporateHousingExpenseGrowth: number[];
  totalGuestSuiteExpenseGrowth: number[];
  totalFoodServiceExpenseGrowth: number[];
  totalAdvertisingMarketingPromotionsGrowth: number[];
  totalOfficeExpensesGrowth: number[];
  totalOtherGeneralAdministrativeGrowth: number[];
  totalGeneralAdministrativeGrowth: number[];
  totalUtilitiesGrowth: number[];
  totalManagementFeesGrowth: number[];
  totalGroundLeaseGrowth: number[];
  recoverableOperatingExpensesGrowth: number[];
  totalRoutineReplacementExpenseGrowth: number[];
  totalCapitalRenovationExpenseGrowth: number[];
  totalInterestExpenseGrowth: number[];
  totalOtherNonOperatingExpensesGrowth: number[];
  totalOtherCapitalExpenseGrowth: number[];
  totalPartnershipOwnerExpensesGrowth: number[];
  debtServiceGroundLeaseGrowth: number[];
  totalDebtServiceGrowth: number[];
  totalNonOperatingExpenseGrowth: number[];
};

// Commercial Assumptions

export type CommercialInputType = {
  generalVacancy: number;
  tenants: TenantInputType[];
};

export type TenantInputType = {
  tenantName: string;
  NRSF: number;
  NNNDollarPerSFPerYear: number;
  annualLeaseEsc: number;
  leaseStartDate: Date;
  freeRentMonth: number;
  CAMDollarPerSFPerYear: number;
  annualCAMEsc: number;
  tiDollarPerSF: number;
  lcPercentage: number;
  lcTermMonths: number;
};

// Exit assumptions

export type ExitValuationInputType = {
  market: string;
  years: number[];
  yearNumbers: number[]; // Year 0, 1, 2...
  exitCapRate: number[];
  hedgePercentage: number[];
  hedgeBPS: number[];
  groundLeaseAdjustmentBPS: number;

  commercialSpotCap: number;
};

export type USMFDevelopmentRevalInputType = {
  propertyDescription: PropertyDescriptionInputType;
  projectSchedule: ProjectScheduleInputType;
  partnershipStructure: PartnershipStructureInputType;
  debtStructure: DebtStructureInputType;
  operation: IncomeAndExpenseInputType;
  commercial: CommercialInputType;
};

export type IncomeAndExpenseType = {
  marketRent: number;
  gainLossToLease: number;
  downUnitLoss: number;
  miscOtherRents: number;
  recurringConcessions: number;
  concessions: number;
  vacancyLoss: number;
  nonRevenueUnits: number;
  badDebt: number;
  badDebtRecovery: number;
  otherMiscRentalIncome: number;
  totalOtherIncResidential: number;
  totalCorporateHousingIncome: number;
  totalRentalOtherIncCommercial: number;
  totalOtherMiscIncome: number;

  totalPayrollBenefits: number;
  totalRepairsMaintenance: number;
  totalStudentTurnoverExpense: number;
  totalMakeReadyRedecorating: number;
  totalRecreationalAmenities: number;
  totalContractServices: number;
  totalCorporateHousingExpense: number;
  totalGuestSuiteExpense: number;
  totalFoodServiceExpense: number;
  totalAdvertisingMarketingPromotions: number;
  totalOfficeExpenses: number;
  totalOtherGeneralAdministrative: number;
  totalGeneralAdministrative: number;
  totalUtilities: number;
  totalManagementFees: number;
  totalGroundLease: number;
  recoverableOperatingExpenses: number;
  totalRoutineReplacementExpense: number;
  totalCapitalRenovationExpense: number;
  totalInterestExpense: number;
  totalOtherNonOperatingExpenses: number;
  totalOtherCapitalExpense: number;
  totalPartnershipOwnerExpenses: number;
  debtServiceGroundLease: number;
  totalDebtService: number;
  totalNonOperatingExpense: number;
};
