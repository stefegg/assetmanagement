import _ from "lodash";
import { pmt } from "financial";
import { addArrays, multiplyNumberToArray } from "./arrayUtil";
export const calculateDebtCashFlows = (
  debtProceeds: number,
  termMonth: number,
  ioPeriodMonth: number,
  debtType: "Fixed" | "Variable",
  debtRate: number,
  debtSOFR: number[],
  amortizationTerm: number = 360,
  cashflowTermMonth: number,
  startingMonth: number
): {
  debtInterest: number[];
  debtAmortization: number[];
  debtRepayment: number[];
} => {
  // Initialize arrays with zeros
  const debtInterest = _.fill(Array(cashflowTermMonth), 0);
  const debtAmortization = _.fill(Array(cashflowTermMonth), 0);
  const debtRepayment = _.fill(Array(cashflowTermMonth), 0);

  // Initialize arrays to hold the calculations for the debt period
  const debtPeriodInterest = _.fill(Array(termMonth), 0);
  const debtPeriodAmortization = _.fill(Array(termMonth), 0);
  const debtPeriodRepayment = _.fill(Array(termMonth), 0);

  // Adjust debtSOFR to align with the startingMonth
  const adjustedDebtSOFR = debtSOFR.slice(startingMonth, startingMonth + termMonth);

  // Initialize modelDebtCurve
  const modelDebtCurve: number[] = [];
  for (let i = 0; i < termMonth; i += 1) {
    modelDebtCurve.push(i ? (-1 * adjustedDebtSOFR[i - 1]) / 12 : 0);
  }

  // Calculate modelInterestRateMonthly
  const modelInterestRateMonthly =
    debtType === "Fixed"
      ? _.concat(0, _.fill(Array(termMonth - 1), (-1 * debtRate) / 12))
      : addArrays(_.concat(0, _.fill(Array(termMonth - 1), (-1 * debtRate) / 12)), modelDebtCurve);

  // Split interest rates into IO and non-IO periods
  const modelInterestRateMonthlyIO = _.take(modelInterestRateMonthly, ioPeriodMonth);

  const modelInterestRateMonthlyNonIO = _.takeRight(modelInterestRateMonthly, termMonth - ioPeriodMonth);

  // Calculate interest and amortization during IO period
  const modelDebtInterestIO: number[] = multiplyNumberToArray(modelInterestRateMonthlyIO, debtProceeds);

  const modelDebtAmortizationIO = _.fill(Array(modelDebtInterestIO.length), 0);

  // Initialize arrays for non-IO period
  const modelDebtPPMT: number[] = [];
  const modelDebtBalance: number[] = [];
  const modelDebtIPMT: number[] = [];

  // Calculate interest and amortization during non-IO period
  if (ioPeriodMonth < termMonth) {
    modelInterestRateMonthlyNonIO.map((rate, i) => {
      modelDebtBalance.push(i ? modelDebtBalance[i - 1] + modelDebtPPMT[i - 1] : debtProceeds);
      const totalPayment = pmt(-1 * rate, amortizationTerm - i, modelDebtBalance[i]);
      modelDebtIPMT.push(modelDebtBalance[i] * rate);
      modelDebtPPMT.push(totalPayment - modelDebtIPMT[i]);
      return null;
    });
  }

  // Concatenate results
  const resultDebtInterest = _.concat(modelDebtInterestIO, modelDebtIPMT);

  const resultDebtAmortization = _.concat(modelDebtAmortizationIO, modelDebtPPMT);

  // Calculate final debt repayment
  const finalDebtPayment = ioPeriodMonth < termMonth ? -1 * _.last(modelDebtBalance)! : -1 * debtProceeds;

  const modelDebtRepayment = _.fill(Array(termMonth), 0);
  modelDebtRepayment[termMonth - 1] = finalDebtPayment;
  modelDebtRepayment[0] = debtProceeds;

  // Assign to debtPeriod arrays
  debtPeriodInterest.splice(0, resultDebtInterest.length, ...resultDebtInterest);
  debtPeriodAmortization.splice(0, resultDebtAmortization.length, ...resultDebtAmortization);
  debtPeriodRepayment.splice(0, modelDebtRepayment.length, ...modelDebtRepayment);

  // Insert the debtPeriod arrays into the overall arrays at the correct positions
  for (let i = 0; i <= termMonth; i++) {
    const idx = startingMonth + i;
    if (idx < cashflowTermMonth) {
      debtInterest[idx] = debtPeriodInterest[i];
      debtAmortization[idx] = debtPeriodAmortization[i];
      debtRepayment[idx] = debtPeriodRepayment[i];
    }
  }

  debtRepayment[startingMonth] = debtProceeds + debtInterest[startingMonth];

  // Return the calculated debt cash flows
  return {
    debtInterest,
    debtAmortization,
    debtRepayment,
  };
};

export const calculateDebtCashFlowsForSinglePayment = (
  debtProceeds: number[],
  termMonth: number,
  debtType: "Fixed" | "Variable",
  debtRate: number,
  debtSOFR: number[],
  cashflowTermMonth: number,
  startingMonth: number,
  singlePayment: boolean
): {
  debtInterest: number[];
  debtAmortization: number[];
  debtRepayment: number[];
} => {
  // Initialize arrays with zeros
  const debtInterest = new Array(cashflowTermMonth).fill(0);
  const debtAmortization = new Array(cashflowTermMonth).fill(0);
  let debtRepayment = new Array(cashflowTermMonth).fill(0);
  const debtBalance = new Array(cashflowTermMonth).fill(0);

  // Initialize balance
  let balance = 0;

  // For months from startingMonth to startingMonth + termMonth - 1
  const endMonth = startingMonth + termMonth - 1;

  // Adjust debtSOFR to align with the startingMonth
  const adjustedDebtSOFR = debtSOFR.slice(startingMonth, startingMonth + termMonth);

  // Loop through each period
  for (let period = 0; period < termMonth; period++) {
    const i = startingMonth + period; // actual month index

    // Add any debt proceeds for this month to balance
    if (period < debtProceeds.length) {
      balance += debtProceeds[period]; // Assuming debtProceeds are positive numbers
      // Record the debt proceeds in debtRepayment as positive cash flow
      if (i < cashflowTermMonth) {
        debtRepayment[i] += debtProceeds[period];
      }
    }

    // Determine interest rate for this month
    let monthlyRate = 0;
    if (debtType === "Fixed") {
      monthlyRate = debtRate / 12;
    } else if (debtType === "Variable") {
      // For the first month, use the base rate
      if (period === 0) {
        monthlyRate = debtRate / 12;
      } else {
        const sofrRate = adjustedDebtSOFR[period - 1] || 0;
        monthlyRate = (debtRate + sofrRate) / 12;
      }
    }

    debtBalance[i] = balance;

    // Calculate interest for this month
    let interest = 0;
    if (i > 0) {
      interest = debtBalance[i - 1] * monthlyRate;
    }

    // Store interest and amortization
    if (i < cashflowTermMonth) {
      if (singlePayment) {
        debtInterest[i] = 0; // Interest expense (negative cash flow)
        debtAmortization[i] = 0; // No amortization
      } else {
        debtInterest[i] = -1 * interest; // Interest expense (negative cash flow)
        debtAmortization[i] = 0; // No amortization
      }
    }

    // Update balance by adding interest
    if (singlePayment) {
      balance += interest;
    }
  }

  // At the end, the total balance is repaid
  const repaymentMonth = startingMonth + termMonth;

  if (repaymentMonth < cashflowTermMonth) {
    debtRepayment[repaymentMonth - 1] += -balance; // Repayment (negative cash flow)
  }

  // // Expand debtProceeds to match the length of debtRepayment
  // const expandedDebtProceeds = [...debtProceeds, ...Array(debtRepayment.length - debtProceeds.length).fill(0)];

  // // Add expandedDebtProceeds and debtRepayment using the addArrays function
  // debtRepayment = addArrays(debtRepayment, expandedDebtProceeds);

  // Return the calculated debt cash flows
  return {
    debtInterest,
    debtAmortization,
    debtRepayment,
  };
};

export function calculateInterestReserve(
  monthlyFundingNeed: number[],
  monthlyNOI: number[],
  debtPercentage: number,
  fixedInterestRate: number,
  interestEndIndex: number
): number[] {
  const tolerance = 1e-6; // Convergence tolerance
  const maxIterations = 1000; // Maximum iterations to prevent infinite loops
  const months = monthlyFundingNeed.length;
  let monthlyInterestReserve = new Array(months).fill(0);
  let tempMonthlyInterestReserve = new Array(months).fill(0);
  let totalFundingNeed = 0;
  let previousTotalFundingNeed = -1;
  let iteration = 0;

  while (Math.abs(totalFundingNeed - previousTotalFundingNeed) > tolerance && iteration < maxIterations) {
    previousTotalFundingNeed = totalFundingNeed;

    // Calculate total funding need
    totalFundingNeed = monthlyFundingNeed.reduce((a, b) => a + b, 0) + monthlyInterestReserve.reduce((a, b) => a + b, 0);

    // Calculate total equity and debt funding
    const totalEquityFunding = totalFundingNeed * (1 - debtPercentage);
    const totalDebtFunding = totalFundingNeed * debtPercentage;

    // Initialize equity and debt balances
    let equityUsed = 0;
    let debtUsed = 0;
    let debtBalance = 0;
    monthlyInterestReserve = new Array(months).fill(0);
    let monthlyDebtDraws = new Array(months).fill(0);

    for (let i = 0; i < months; i++) {
      const fundingNeed = monthlyFundingNeed[i];

      // Determine if equity or debt is used
      if (equityUsed < totalEquityFunding) {
        const equityAvailable = totalEquityFunding - equityUsed;
        const equityContribution = Math.min(fundingNeed, equityAvailable);
        equityUsed += equityContribution;

        if (fundingNeed > equityContribution) {
          const debtContribution = fundingNeed - equityContribution;
          debtUsed += debtContribution;
          debtBalance += debtContribution;
          monthlyDebtDraws[i] = debtContribution;
        }
      } else {
        // All equity used, use debt
        debtUsed += fundingNeed;
        debtBalance += fundingNeed;
        monthlyDebtDraws[i] = fundingNeed;
      }

      // Calculate interest for next month if within interest reserve period
      if (i < interestEndIndex) {
        const interest = (debtBalance * fixedInterestRate) / 12;
        tempMonthlyInterestReserve[i + 1] = interest;
        // debtBalance += interest; // Interest is capitalized into the debt balance
      }

      const monthlyBalance = -1 * tempMonthlyInterestReserve[i] + monthlyNOI[i];

      if (monthlyBalance < 0) {
        monthlyInterestReserve[i] = monthlyBalance;
      }
    }

    iteration++;
  }

  if (iteration === maxIterations) {
    throw new Error("Calculation did not converge.");
  }
  console.log(iteration);

  return monthlyInterestReserve;
}
