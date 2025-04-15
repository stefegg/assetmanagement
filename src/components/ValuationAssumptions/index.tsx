'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"

const YEARS = Array.from({ length: 11 }, (_, i) => 2025 + i)

export function CapRate() {
  const {
    capRates,
    capRateAdjustmentGroundLease,
    setCapRates,
    setCapRateAdjustmentGroundLease
  } = useWizard()

  // Initialize residential cap rates if empty
  React.useEffect(() => {
    if (capRates.residential.length === 0) {
      setCapRates({
        ...capRates,
        residential: YEARS.map(year => ({
          month: 2,
          year,
          baseRate: year === 2025 ? 4.50 : year === 2026 ? 4.65 : year === 2027 ? 4.75 : year === 2028 ? 4.90 : 
                   year === 2029 ? 5.00 : year === 2030 ? 5.15 : year === 2031 ? 5.20 : year === 2032 ? 5.20 :
                   year === 2033 ? 5.25 : year === 2034 ? 5.25 : year === 2035 ? 5.30 : 0,
          hedgePercent: 0,
          hedgeBps: 0,
          totalHedge: 0,
          appliedCapRate: year === 2025 ? 4.50 : year === 2026 ? 4.65 : year === 2027 ? 4.75 : year === 2028 ? 4.90 : 
                        year === 2029 ? 5.00 : year === 2030 ? 5.15 : year === 2031 ? 5.20 : year === 2032 ? 5.20 :
                        year === 2033 ? 5.25 : year === 2034 ? 5.25 : year === 2035 ? 5.30 : 0
        }))
      })
    }
  }, [capRates, setCapRates])

  const updateResidentialCapRate = (index: number, field: string, value: number) => {
    const newRates = { ...capRates }
    newRates.residential[index] = {
      ...newRates.residential[index],
      [field]: value,
      // Calculate applied cap rate
      appliedCapRate: field === 'baseRate' ? value : newRates.residential[index].baseRate
    }
    setCapRates(newRates)
  }

  const updateCommercialCapRate = (field: string, value: string | number) => {
    setCapRates({
      ...capRates,
      commercial: {
        ...capRates.commercial,
        [field]: value
      }
    })
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Cap Rates</h2>
      
      <div className="space-y-8">
        {/* Cap Rates */}
        <div>
          <h3 className="text-lg font-semibold mb-4 bg-gray-200 p-2">Cap Rates</h3>
          
          {/* Residential */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Residential</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Month</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-4 py-2 text-center">{rate.month}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Year</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-4 py-2 text-center">{rate.year}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">San Diego</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-4 py-2 text-right">{rate.baseRate}%</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Hedge (%)</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-2 py-1 border bg-blue-50">
                        <Input
                          type="number"
                          step="0.01"
                          className="w-full text-right"
                          value={rate.hedgePercent || ''}
                          onChange={(e) => updateResidentialCapRate(index, 'hedgePercent', Number(e.target.value) || 0)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Hedge (bps)</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-2 py-1 border bg-blue-50">
                        <Input
                          type="number"
                          className="w-full text-right"
                          value={rate.hedgeBps || ''}
                          onChange={(e) => updateResidentialCapRate(index, 'hedgeBps', Number(e.target.value) || 0)}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Total Hedge</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-4 py-2 text-right">{rate.totalHedge}%</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Applied Cap Rate</td>
                    {capRates.residential.map((rate, index) => (
                      <td key={index} className="px-4 py-2 text-right">{rate.appliedCapRate}%</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cap Rate Adjustment for Ground Lease */}
          <div className="mb-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Cap Rate Adjustment for Ground Lease:</td>
                    <td className="px-2 py-1 border bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={capRateAdjustmentGroundLease.bps || ''}
                        onChange={(e) => setCapRateAdjustmentGroundLease({
                          ...capRateAdjustmentGroundLease,
                          bps: Number(e.target.value) || 0
                        })}
                      />
                    </td>
                    <td className="px-2 py-1 border bg-blue-50">
                      <Input
                        type="number"
                        step="0.01"
                        className="w-full text-right"
                        value={capRateAdjustmentGroundLease.percent || ''}
                        onChange={(e) => setCapRateAdjustmentGroundLease({
                          ...capRateAdjustmentGroundLease,
                          percent: Number(e.target.value) || 0
                        })}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="font-semibold mb-2">Commercial</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Spot Cap Rate as of:</td>
                    <td className="px-2 py-1 border bg-blue-50">
                      <Input
                        type="text"
                        className="w-full"
                        value={capRates.commercial.spotCapRateDate}
                        onChange={(e) => updateCommercialCapRate('spotCapRateDate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Spot Cap Rate</td>
                    <td className="px-2 py-1 border bg-blue-50">
                      <Input
                        type="number"
                        step="0.01"
                        className="w-full text-right"
                        value={capRates.commercial.spotCapRate || ''}
                        onChange={(e) => updateCommercialCapRate('spotCapRate', Number(e.target.value) || 0)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
} 