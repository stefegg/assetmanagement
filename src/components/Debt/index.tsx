import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWizard } from "@/context/WizardContext"
import type { Loan, LoanSpreadChanges, DSCRTest } from "@/context/WizardContext"

const REFERENCE_OPTIONS = ["SOFR"] as const

type LoanField = keyof Loan
type SpreadChangeField = keyof LoanSpreadChanges
type DSCRTestField = keyof DSCRTest

export function Debt() {
  const { loans, setLoans } = useWizard()

  const updateLoan = (loanIndex: number, field: LoanField, value: Loan[LoanField]) => {
    const updatedLoans = [...loans]
    if (!updatedLoans[loanIndex]) {
      updatedLoans[loanIndex] = {
        lender: "",
        loanStartDate: "",
        monthsNote: 0,
        reference: "SOFR",
        spreadOverReference: 0,
        referenceHedgeBps: 0,
        loanBalance: 0,
        totalLoanCommitment: 0,
        originationFee: 0,
        prePaymentPenaltyPercent: 0,
        prePaymentPenaltyAmount: 0,
        fixedMonthlyAmort: "N",
        monthlyAmortAmount: 0,
        amortizingPrincipal: "N",
        amortizationStartDate: "",
        amortizationTermMonths: 0,
        amortizationRate: 0,
        spreadChanges: [],
        dscrTests: [],
        interestHedging: {
          hedgeRate: 0,
          startDate: "",
          endDate: "",
          floorRate: 0,
          ceilingRate: 0,
          swapFixed: 0
        },
        loanDebtServiceCoverageThrough: ""
      }
    }
    updatedLoans[loanIndex] = {
      ...updatedLoans[loanIndex],
      [field]: value
    }
    setLoans(updatedLoans)
  }

  const updateSpreadChange = (
    loanIndex: number,
    changeIndex: number,
    field: SpreadChangeField,
    value: LoanSpreadChanges[SpreadChangeField]
  ) => {
    const updatedLoans = [...loans]
    if (!updatedLoans[loanIndex].spreadChanges) {
      updatedLoans[loanIndex].spreadChanges = []
    }
    if (!updatedLoans[loanIndex].spreadChanges[changeIndex]) {
      updatedLoans[loanIndex].spreadChanges[changeIndex] = {
        notifyDate: "",
        termMths: 0,
        startDate: "",
        endDate: "",
        extensionFee: 0,
        rateSpread: 0,
        rateAdjustment: 0,
        changeExtensionFee: 0,
        utilized: "N",
        adjRepaymentDate: ""
      }
    }
    updatedLoans[loanIndex].spreadChanges[changeIndex] = {
      ...updatedLoans[loanIndex].spreadChanges[changeIndex],
      [field]: value
    }
    setLoans(updatedLoans)
  }

  const updateDSCRTest = (
    loanIndex: number,
    testIndex: number,
    field: DSCRTestField,
    value: DSCRTest[DSCRTestField]
  ) => {
    const updatedLoans = [...loans]
    if (!updatedLoans[loanIndex].dscrTests) {
      updatedLoans[loanIndex].dscrTests = []
    }
    if (!updatedLoans[loanIndex].dscrTests[testIndex]) {
      updatedLoans[loanIndex].dscrTests[testIndex] = {
        revenuePeriod: "",
        expensePeriod: "",
        requiredCoverage: 0,
        requiredDebtYield: 0,
        requiredLTV: 0,
        amortizationYears: 0,
        minimumInterestRate: 0,
        forwardCurve: "",
        spread: 0,
        testStartDate: "",
        testEndDate: "",
        passFail: ""
      }
    }
    updatedLoans[loanIndex].dscrTests[testIndex] = {
      ...updatedLoans[loanIndex].dscrTests[testIndex],
      [field]: value
    }
    setLoans(updatedLoans)
  }

  return (
    <Card className="p-6">

    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6">Debt</h2>

      <div className="flex items-center gap-4">
        <span>Interest Rates Updated as of:</span>
        <Input
          type="date"
          className="w-40"
          defaultValue="2025-03-19"
        />
      </div>

      {[...Array(3)].map((_, loanIndex) => (
        <Card key={loanIndex} className="p-6">
          <h3 className="text-lg font-semibold mb-4">Loan {loanIndex + 1} - Construction Debt:</h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <span>Lender</span>
                <Input
                  className="bg-blue-50"
                  value={loans[loanIndex]?.lender || ""}
                  onChange={(e) => updateLoan(loanIndex, "lender", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Loan Start Date</span>
                <Input
                  type="date"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.loanStartDate || ""}
                  onChange={(e) => updateLoan(loanIndex, "loanStartDate", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Months (Sr. Note)</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.monthsNote || ""}
                  onChange={(e) => updateLoan(loanIndex, "monthsNote", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Reference</span>
                <Select
                  value={loans[loanIndex]?.reference || "SOFR"}
                  onValueChange={(value) => updateLoan(loanIndex, "reference", value)}
                >
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REFERENCE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Spread over Reference</span>
                <Input
                  type="number"
                  step="0.01"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.spreadOverReference || ""}
                  onChange={(e) => updateLoan(loanIndex, "spreadOverReference", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Reference Hedge (bps)</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.referenceHedgeBps || ""}
                  onChange={(e) => updateLoan(loanIndex, "referenceHedgeBps", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Loan Balance</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.loanBalance || ""}
                  onChange={(e) => updateLoan(loanIndex, "loanBalance", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Total Loan Commitment</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.totalLoanCommitment || ""}
                  onChange={(e) => updateLoan(loanIndex, "totalLoanCommitment", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Origination Fee</span>
                <Input
                  type="number"
                  step="0.01"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.originationFee || ""}
                  onChange={(e) => updateLoan(loanIndex, "originationFee", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Pre-Payment Penalty %</span>
                <Input
                  type="number"
                  step="0.01"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.prePaymentPenaltyPercent || ""}
                  onChange={(e) => updateLoan(loanIndex, "prePaymentPenaltyPercent", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Pre-Payment Penalty $</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.prePaymentPenaltyAmount || ""}
                  onChange={(e) => updateLoan(loanIndex, "prePaymentPenaltyAmount", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Fixed Monthly Amort (Y/N)</span>
                <Select
                  value={loans[loanIndex]?.fixedMonthlyAmort || "N"}
                  onValueChange={(value) => updateLoan(loanIndex, "fixedMonthlyAmort", value as "Y" | "N")}
                >
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Y">Y</SelectItem>
                    <SelectItem value="N">N</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Monthly Amort Amount</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.monthlyAmortAmount || ""}
                  onChange={(e) => updateLoan(loanIndex, "monthlyAmortAmount", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Amortizing Principal (Y/N)</span>
                <Select
                  value={loans[loanIndex]?.amortizingPrincipal || "N"}
                  onValueChange={(value) => updateLoan(loanIndex, "amortizingPrincipal", value as "Y" | "N")}
                >
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Y">Y</SelectItem>
                    <SelectItem value="N">N</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Amortization Start Date</span>
                <Input
                  type="date"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.amortizationStartDate || ""}
                  onChange={(e) => updateLoan(loanIndex, "amortizationStartDate", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Amortization Term (months)</span>
                <Input
                  type="number"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.amortizationTermMonths || ""}
                  onChange={(e) => updateLoan(loanIndex, "amortizationTermMonths", Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span>Amortization Rate</span>
                <Input
                  type="number"
                  step="0.01"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.amortizationRate || ""}
                  onChange={(e) => updateLoan(loanIndex, "amortizationRate", Number(e.target.value))}
                />
              </div>
            </div>

            {/* Right Column - Loan Spread Changes */}
            <div>
              <h4 className="font-semibold mb-2">Loan Spread Changes</h4>
              <table className="w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Extension 1</th>
                    <th>Extension 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Notify Date</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.notifyDate || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "notifyDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Term (Mths)</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="number"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.termMths || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "termMths", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Start Date</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.startDate || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "startDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>End Date</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.endDate || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "endDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Extension Fee (bps)</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.extensionFee || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "extensionFee", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Rate Spread</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.rateSpread || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "rateSpread", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Rate Adjustment</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.rateAdjustment || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "rateAdjustment", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Change/Extension Fee ($)</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="number"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.changeExtensionFee || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "changeExtensionFee", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Utilized</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Select
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.utilized || "N"}
                          onValueChange={(value) => updateSpreadChange(loanIndex, changeIndex, "utilized", value as "Y" | "N")}
                        >
                          <SelectTrigger className="bg-blue-50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Y">Y</SelectItem>
                            <SelectItem value="N">N</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Adj. Repayment Date</td>
                    {[0, 1].map((changeIndex) => (
                      <td key={changeIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.spreadChanges?.[changeIndex]?.adjRepaymentDate || ""}
                          onChange={(e) => updateSpreadChange(loanIndex, changeIndex, "adjRepaymentDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* DSCR Tests */}
            <div className="col-span-2">
              <h4 className="font-semibold mb-2">DSCR Tests</h4>
              <table className="w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Test 1</th>
                    <th>Test 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revenue Testing Period</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.revenuePeriod || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "revenuePeriod", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Expense Testing Period</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.expensePeriod || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "expensePeriod", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Required Coverage</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.requiredCoverage || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "requiredCoverage", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Required Debt Yield</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.requiredDebtYield || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "requiredDebtYield", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Required LTV</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.requiredLTV || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "requiredLTV", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Amortization Years</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.amortizationYears || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "amortizationYears", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Minimum Interest Rate</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.minimumInterestRate || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "minimumInterestRate", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Forward Curve</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Select
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.forwardCurve || "SOFR"}
                          onValueChange={(value) => updateDSCRTest(loanIndex, testIndex, "forwardCurve", value)}
                        >
                          <SelectTrigger className="bg-blue-50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {REFERENCE_OPTIONS.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Spread</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="number"
                          step="0.01"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.spread || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "spread", Number(e.target.value))}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Test Start Date</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.testStartDate || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "testStartDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Test End Date</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          type="date"
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.testEndDate || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "testEndDate", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>Pass/Fail</td>
                    {[0, 1].map((testIndex) => (
                      <td key={testIndex}>
                        <Input
                          className="bg-blue-50 w-full"
                          value={loans[loanIndex]?.dscrTests?.[testIndex]?.passFail || ""}
                          onChange={(e) => updateDSCRTest(loanIndex, testIndex, "passFail", e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interest Hedging */}
            <div className="col-span-2">
              <h4 className="font-semibold mb-2">Interest Hedging</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span>Hedge Rate (incl. Spread)</span>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.hedgeRate || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      hedgeRate: Number(e.target.value)
                    })}
                  />
                </div>
                <div>
                  <span>Start Date</span>
                  <Input
                    type="date"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.startDate || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      startDate: e.target.value
                    })}
                  />
                </div>
                <div>
                  <span>End Date</span>
                  <Input
                    type="date"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.endDate || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      endDate: e.target.value
                    })}
                  />
                </div>
                <div>
                  <span>Floor Rate</span>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.floorRate || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      floorRate: Number(e.target.value)
                    })}
                  />
                </div>
                <div>
                  <span>Ceiling Rate</span>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.ceilingRate || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      ceilingRate: Number(e.target.value)
                    })}
                  />
                </div>
                <div>
                  <span>Swap/Fixed</span>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-blue-50 w-full"
                    value={loans[loanIndex]?.interestHedging?.swapFixed || ""}
                    onChange={(e) => updateLoan(loanIndex, "interestHedging", {
                      ...loans[loanIndex]?.interestHedging,
                      swapFixed: Number(e.target.value)
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Loan Debt Service Coverage Through */}
            <div className="col-span-2 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <span>Loan Debt Service Coverage Through:</span>
                <Input
                  type="date"
                  className="bg-blue-50"
                  value={loans[loanIndex]?.loanDebtServiceCoverageThrough || ""}
                  onChange={(e) => updateLoan(loanIndex, "loanDebtServiceCoverageThrough", e.target.value)}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
    </Card>
  )
} 