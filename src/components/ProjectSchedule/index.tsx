'use client'

import { useWizard } from '@/context/WizardContext'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

export function ProjectSchedule() {
  const {
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
  } = useWizard()

  return (
    <Card className="p-6">
      <h2 className="text-lg font-bold mb-4">Project Schedule</h2>
      <div className="grid grid-cols-5 gap-6">
        {/* First Column - Basic Info */}
        <div className="space-y-4">
          <div>
            <Label>Venture Close Date</Label>
            <Input
              type="date"
              value={ventureCloseDate}
              onChange={(e) => setVentureCloseDate(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Model Start YR</Label>
            <Input
              value={modelStartYear}
              onChange={(e) => setModelStartYear(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Second Column - Construction Timeline */}
        <div className="space-y-4">
          <div>
            <Label className="font-bold">Construction Timeline</Label>
          </div>
          <div>
            <Label>Land Close</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={landClose}
                onChange={(e) => setLandClose(e.target.value)}
                className="bg-blue-50"
              />
              <div className="text-sm">Proforma</div>
            </div>
          </div>
          <div>
            <Label>Construction Start</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={constructionStart}
                onChange={(e) => setConstructionStart(e.target.value)}
                className="bg-blue-50"
              />
              <div className="text-sm">Projected</div>
            </div>
          </div>
          <div>
            <Label>1st Units</Label>
            <Input
              type="date"
              value={firstUnits}
              onChange={(e) => setFirstUnits(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Last Units</Label>
            <Input
              type="date"
              value={lastUnits}
              onChange={(e) => setLastUnits(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Last Unit Hedge</Label>
            <Input
              value={lastUnitHedge}
              onChange={(e) => setLastUnitHedge(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Completion</Label>
            <Input
              type="date"
              value={completion}
              onChange={(e) => setCompletion(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Completion Hedge</Label>
            <Input
              value={completionHedge}
              onChange={(e) => setCompletionHedge(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Stabilization</Label>
            <Input
              type="date"
              value={stabilization}
              onChange={(e) => setStabilization(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Third Column - Construction Draw Dates & Yardi Dates */}
        <div className="space-y-4">
          <div>
            <Label className="font-bold">Construction Draw Dates</Label>
          </div>
          <div>
            <Label>First Const. Draw</Label>
            <Input
              type="date"
              value={firstConstDraw}
              onChange={(e) => setFirstConstDraw(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Latest Const. Draw</Label>
            <Input
              type="date"
              value={latestConstDraw}
              onChange={(e) => setLatestConstDraw(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div className="mt-8">
            <Label className="font-bold">Yardi Dates</Label>
          </div>
          <div>
            <Label>Forecast as of</Label>
            <Input
              type="date"
              value={forecastAsOf}
              onChange={(e) => setForecastAsOf(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Budget Start</Label>
            <Input
              type="date"
              value={budgetStart}
              onChange={(e) => setBudgetStart(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Budget End</Label>
            <Input
              type="date"
              value={budgetEnd}
              onChange={(e) => setBudgetEnd(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Actuals Start</Label>
            <Input
              type="date"
              value={actualsStart}
              onChange={(e) => setActualsStart(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Actuals End</Label>
            <Input
              type="date"
              value={actualsEnd}
              onChange={(e) => setActualsEnd(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Actuals Date Adjustment</Label>
            <Input
              type="date"
              value={actualsDateAdjustment}
              onChange={(e) => setActualsDateAdjustment(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Adj. Actuals Date</Label>
            <Input
              type="date"
              value={adjustedActualsDate}
              onChange={(e) => setAdjustedActualsDate(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Fourth Column - Residential Lease Up */}
        <div className="space-y-4">
          <div>
            <Label className="font-bold">Residential Lease Up Assumptions:</Label>
          </div>
          <div>
            <Label>Months of Preleasing</Label>
            <Input
              type="number"
              value={monthsOfPreleasing}
              onChange={(e) => setMonthsOfPreleasing(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Months to Absorb Preleasing</Label>
            <Input
              type="number"
              value={monthsToAbsorbPreleasing}
              onChange={(e) => setMonthsToAbsorbPreleasing(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label># of Preleased Units</Label>
            <Input
              type="number"
              value={numPreleaseUnits}
              onChange={(e) => setNumPreleaseUnits(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Avg. Units Absorbed / Month</Label>
            <Input
              type="number"
              value={avgUnitsAbsorbedPerMonth}
              onChange={(e) => setAvgUnitsAbsorbedPerMonth(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>% Renewal</Label>
            <Input
              type="number"
              value={percentRenewal}
              onChange={(e) => setPercentRenewal(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Fifth Column - Residential & Commercial Valuation */}
        <div className="space-y-4">
          <div>
            <Label className="font-bold">Residential Valuation</Label>
          </div>
          <div>
            <Label>Development Phase End</Label>
            <Input
              type="date"
              value={developmentPhaseEnd}
              onChange={(e) => setDevelopmentPhaseEnd(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Months Post Stabilization</Label>
            <Input
              type="number"
              value={monthsPostStabilization}
              onChange={(e) => setMonthsPostStabilization(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Investment Phase Start (date)</Label>
            <Input
              type="date"
              value={investmentPhaseStartDate}
              onChange={(e) => setInvestmentPhaseStartDate(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Investment Phase End (date)</Label>
            <Input
              type="date"
              value={investmentPhaseEndDate}
              onChange={(e) => setInvestmentPhaseEndDate(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div className="mt-8">
            <Label className="font-bold">Commercial Valuation</Label>
          </div>
          <div>
            <Label>Development Phase End</Label>
            <Input
              type="date"
              value={commercialDevPhaseEnd}
              onChange={(e) => setCommercialDevPhaseEnd(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Investment Phase End</Label>
            <Input
              type="date"
              value={commercialInvPhaseEnd}
              onChange={(e) => setCommercialInvPhaseEnd(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>
      </div>
    </Card>
  )
} 