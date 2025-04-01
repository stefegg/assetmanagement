// app/[projectID]/page.tsx

import USMFDevelopmentRevalPage from "./USMFDevelopmentRevalPage";
import { USMFDevelopmentReval } from "@/financialmodel/models/reval/USMFDevelopmentReval";
import { Asset } from "@/financialmodel/models/Asset";
import { UnderwritingModel } from "@/financialmodel/models/UnderwritingModel";
import { USMFDevelopmentModelConfig, USMFDevelopmentResultConfig } from "@/financialmodel/config/development/USMFConfig";

async function fetchProject(projectID: string) {
  // Create a mock USMFDevelopmentReval object
  const today = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(today.getFullYear() + 1);
  
  // Create model dates (12 months from today)
  const modelDates: Date[] = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(today);
    date.setMonth(today.getMonth() + i);
    modelDates.push(date);
  }
  
  // Create mock asset
  const asset = new Asset({
    id: projectID,
    name: `Project ${projectID}`,
    type: "Multifamily",
    location: "New York, NY",
    status: "Active"
  });
  
  // Create mock actuals data
  const actuals = {
    actualDates: [new Date(), new Date(today.getMonth() - 1)],
    actualData: [
      { category: "Income", name: "Rental Income", value: [10000, 10500] },
      { category: "Expense", name: "Operating Expenses", value: [5000, 5200] }
    ]
  };
  
  // Create mock dev assumptions
  const devAssumptions = {
    propertyDescription: {
      propertyName: `Project ${projectID}`,
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      msa: "New York",
      submarket: "Manhattan",
      productType: "Multifamily",
      residentialMarketRateUnits: 200,
      residentialAffordableUnits: 20,
      totalNRSF: 180000,
      grossLandArea: 20000,
      netLandArea: 18000,
      loanAbstractLink: "",
      investmentVehicle: "Fund III"
    },
    projectSchedule: {
      ventureCloseDate: today,
      landCloseDate: today,
      constructionStartDate: today,
      firstUnitDate: nextYear,
      lastUnitDate: nextYear,
      lastUnitHedgeMonth: 12,
      completionDate: nextYear,
      completionHedge: 3,
      stablizationDate: nextYear,
      firstConstructionDrawDate: today,
      LatestConstrcutionDrawDate: nextYear,
      forecastAsOfDate: today,
      budgetStartDate: today,
      budgetEndDate: nextYear,
      actualStartDate: today,
      actualEndDate: nextYear,
      actualDateAdjustment: 0,
      adjustedActualDate: today,
      monthsOfPrelesasing: 3,
      monthsToAbsorbPreleasing: 6,
      numberOfPreleasedUnits: 20,
      avgUnitsAbsorbedPerMonth: 10,
      percentageRenewal: 60,
      devPhaseEndDate: 12,
      invPhaseStartDate: nextYear,
      invPhaseEndDate: nextYear,
      commercialInvPhaseEnd: nextYear
    },
    partnershipStructure: {
      pertnershipAbstract: "Sample Partnership",
      preferredReturnCompoundPeriod: "Monthly",
      fundingType: ["Equity"],
      fundingCap: [75000000],
      devPartners: [{
        partnerName: "Developer 1",
        contribution: [1000000],
        distribution: [15],
        preferredReturn: [8],
        isCoinvestPartner: false,
        isHurdlePartner: true,
        includeInVMFee: true
      }],
      devWaterfall: {
        hurdleType: ["IRR"],
        upToIRR: [8],
        upToMultiple: [1.5],
        lpShareAboveHurdle: [0.7],
      },
      invWaterfall: {
        hurdleType: ["IRR"],
        upToIRR: [8],
        upToMultiple: [1.5],
        lpShareAboveHurdle: [0.7],
      },
      coinvReturnEnhFee1: 0,
      coinvReturnEnhFee2: 0,
      coinvReturnEnhPromoteScrape: 0,
      promoteIssuanceCashPercentage: 0,
      vmFeeDev: 0,
      vmFeeDevPercentageOf: "Equity" as "Equity" | "GAV",
      vmFeeDevEquityType: "Committed" as "Committed" | "Invested" | "N/A",
      vmFeeStablization: 0,
      vmFeeStablizationPercentageOf: "Equity" as "Equity" | "GAV",
      vmFeeStablizationEquityType: "Committed" as "Committed" | "Invested" | "N/A",
    },
    debtStructure: {
      interestRateUpdatedDate: today
    },
    operation: {
      marketRatePhysicalOccupancy: 95,
      affordablePhysicalOccupancy: 98,
      propertyCashMinimum: 100000,
      propertyCashCap: 500000,
      dateType: "Monthly" as "Monthly" | "Quarterly" | "Yearly",
      dates: modelDates,
      marketRentGrowth: [3],
      gainLossToLeaseGrowth: [0],
      downUnitLossGrowth: [0],
      miscOtherRentsGrowth: [2],
      recurringConcessionsGrowth: [0],
      concessionsGrowth: [0],
      vacancyLossGrowth: [0],
      nonRevenueUnitsGrowth: [0],
      badDebGrowtht: [0],
      badDebtRecoveryGrowth: [0],
      otherMiscRentalIncomeGrowth: [2],
      totalOtherIncResidentialGrowth: [2],
      totalCorporateHousingIncomeGrowth: [2],
      totalRentalOtherIncCommercialGrowth: [3],
      totalOtherMiscIncomeGrowth: [2],
      totalPayrollBenefitsGrowth: [3],
      totalRepairsMaintenanceGrowth: [3],
      totalStudentTurnoverExpenseGrowth: [3],
      totalMakeReadyRedecoratingGrowth: [3],
      totalRecreationalAmenitiesGrowth: [3],
      totalContractServicesGrowth: [3],
      totalCorporateHousingExpenseGrowth: [3],
      totalGuestSuiteExpenseGrowth: [3],
      totalFoodServiceExpenseGrowth: [3],
      totalAdvertisingMarketingPromotionsGrowth: [3],
      totalOfficeExpensesGrowth: [3],
      totalOtherGeneralAdministrativeGrowth: [3],
      totalGeneralAdministrativeGrowth: [3],
      totalUtilitiesGrowth: [3],
      totalManagementFeesGrowth: [3],
      totalGroundLeaseGrowth: [3],
      recoverableOperatingExpensesGrowth: [3],
      totalRoutineReplacementExpenseGrowth: [3],
      totalCapitalRenovationExpenseGrowth: [3],
      totalInterestExpenseGrowth: [3],
      totalOtherNonOperatingExpensesGrowth: [3],
      totalOtherCapitalExpenseGrowth: [3],
      totalPartnershipOwnerExpensesGrowth: [3],
      debtServiceGroundLeaseGrowth: [3],
      totalDebtServiceGrowth: [3],
      totalNonOperatingExpenseGrowth: [3]
    },
    commercial: {
      generalVacancy: 10,
      tenants: [{
        tenantName: "Retail Store 1",
        NRSF: 2500,
        NNNDollarPerSFPerYear: 25,
        annualLeaseEsc: 3,
        leaseStartDate: today,
        freeRentMonth: 1,
        CAMDollarPerSFPerYear: 10,
        annualCAMEsc: 2,
        tiDollarPerSF: 15,
        lcPercentage: 5,
        lcTermMonths: 36
      }]
    }
  };
  
  // Create underwriting model
  const underwritingModel = new UnderwritingModel(
    `Project ${projectID}`,
    "US MF Development",
    modelDates.length,
    modelDates[0],
    USMFDevelopmentModelConfig,
    USMFDevelopmentResultConfig
  );
  
  // Return the USMFDevelopmentReval object
  return new USMFDevelopmentReval({
    id: projectID,
    name: `Project ${projectID}`,
    revalType: "Draft",
    dealType: "US MF Development",
    assetType: "Multifamily",
    period: "Current",
    underwritingModel,
    asset,
    actuals,
    devAssumptions,
    revalDate: today,
    country: "US",
    revalPeriod: "1H24",
    modelDates
  });
}

export default async function ProjectPage({ params }: { params: { projectid: string } }) {
  const reval = await fetchProject(params.projectid);

  let underwritingComponent;
  if (reval.dealType === "US MF Development") {
    underwritingComponent = <USMFDevelopmentRevalPage data={reval} />;
  } else {
    // Default case - we only support US MF Development for now
    underwritingComponent = <div>Unsupported deal type: {reval.dealType}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Project: {reval.name}</h1>
      {underwritingComponent}
    </div>
  );
}
