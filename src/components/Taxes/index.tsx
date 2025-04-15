'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWizard } from "@/context/WizardContext"

const MONTHS = [
  "None",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
] as const

const YEARS = Array.from({ length: 16 }, (_, i) => 2022 + i)

export function Taxes() {
  const {
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
    setTaxRateEGI,
  } = useWizard()

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Taxes</h2>
      
      <div className="space-y-8">
        {/* Payment Schedule */}
        <div>
          <h3 className="font-semibold mb-4">Payment Schedule</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-32"></th>
                <th className="px-4 py-2 text-center">Paid In Arrears?</th>
                <th className="px-4 py-2 text-center">First Payment Month</th>
                <th className="px-4 py-2 text-center">Second Payment Month</th>
                <th className="px-4 py-2 text-center">Third Payment Month</th>
                <th className="px-4 py-2 text-center">Fourth Payment Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Property Taxes</td>
                <td className="px-2 py-1 border bg-blue-50 text-center">
                  <Select
                    defaultValue={propertyTaxesInArrears ? "Yes" : "No"}
                    onValueChange={(value) => setPropertyTaxesInArrears(value === "Yes")}
                  >
                    <SelectTrigger className="w-24 mx-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                {[0, 1, 2, 3].map((index) => (
                  <td key={index} className="px-2 py-1 border bg-blue-50 text-center">
                    <Select
                      defaultValue={propertyTaxesPaymentMonths[index] || "None"}
                      onValueChange={(value) => {
                        const newMonths = [...propertyTaxesPaymentMonths]
                        newMonths[index] = value
                        setPropertyTaxesPaymentMonths(newMonths)
                      }}
                    >
                      <SelectTrigger className="w-24 mx-auto">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTHS.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Other Taxes</td>
                <td className="px-2 py-1 border bg-blue-50 text-center">
                  <Select
                    defaultValue={otherTaxesInArrears ? "Yes" : "No"}
                    onValueChange={(value) => setOtherTaxesInArrears(value === "Yes")}
                  >
                    <SelectTrigger className="w-24 mx-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                {[0, 1, 2, 3].map((index) => (
                  <td key={index} className="px-2 py-1 border bg-blue-50 text-center">
                    <Select
                      defaultValue={otherTaxesPaymentMonths[index] || "None"}
                      onValueChange={(value) => {
                        const newMonths = [...otherTaxesPaymentMonths]
                        newMonths[index] = value
                        setOtherTaxesPaymentMonths(newMonths)
                      }}
                    >
                      <SelectTrigger className="w-24 mx-auto">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTHS.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Assessed Value Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Year</th>
                {YEARS.map((year) => (
                  <th key={year} className="px-4 py-2 text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Assessed Percentage</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      defaultValue={assessedPercentage[year - 2022] || 85}
                      onChange={(e) => {
                        const newPercentages = [...assessedPercentage]
                        newPercentages[year - 2022] = Number(e.target.value)
                        setAssessedPercentage(newPercentages)
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Cumulative Project Costs</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {cumulativeProjectCosts[year - 2022]?.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Assessment Override</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      defaultValue={assessmentOverride[year - 2022]}
                      onChange={(e) => {
                        const newOverrides = [...assessmentOverride]
                        newOverrides[year - 2022] = Number(e.target.value)
                        setAssessmentOverride(newOverrides)
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Taxable Value</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {taxableValue[year - 2022]?.toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Property Taxes Table */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Property Taxes</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Year</th>
                {YEARS.map((year) => (
                  <th key={year} className="px-4 py-2 text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Tax Rate Growth</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      defaultValue={taxRateGrowth[year - 2022] || 0}
                      onChange={(e) => {
                        const newGrowth = [...taxRateGrowth]
                        newGrowth[year - 2022] = Number(e.target.value)
                        setTaxRateGrowth(newGrowth)
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Tax Rate</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {taxRate[year - 2022]?.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Tax Bill Growth</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      defaultValue={taxBillGrowth[year - 2022] || 0}
                      onChange={(e) => {
                        const newGrowth = [...taxBillGrowth]
                        newGrowth[year - 2022] = Number(e.target.value)
                        setTaxBillGrowth(newGrowth)
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Tax Bill Override</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      defaultValue={taxBillOverride[year - 2022]}
                      onChange={(e) => {
                        const newOverrides = [...taxBillOverride]
                        newOverrides[year - 2022] = Number(e.target.value)
                        setTaxBillOverride(newOverrides)
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Taxes</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {taxes[year - 2022]?.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Taxes Growth Rate</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {taxesGrowthRate[year - 2022]?.toLocaleString()}%
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Monthly Accrual</td>
                {YEARS.map((year) => (
                  <td key={year} className="px-2 py-1 border">
                    {monthlyAccrual[year - 2022]?.toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Property Tax Payments Override */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Property Tax Payments Override</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Tax YR</th>
                <th className="px-4 py-2 text-left">Payment YR</th>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                  <th key={month} className="px-4 py-2 text-center">{month}</th>
                ))}
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year) => {
                const paymentYear = year + 1;
                const yearPayments = propertyTaxPaymentsOverride[year] || {};
                const total = Object.values(yearPayments).reduce((sum, val) => sum + (val || 0), 0);

                return (
                  <tr key={year}>
                    <td className="py-2">{year}</td>
                    <td className="py-2">{paymentYear}</td>
                    {[...Array(12)].map((_, month) => (
                      <td key={month} className="px-2 py-1 border bg-blue-50">
                        <Input
                          type="number"
                          className="w-full text-right"
                          value={yearPayments[month + 1] || ''}
                          onChange={(e) => {
                            const newOverride = {
                              ...propertyTaxPaymentsOverride,
                              [year]: {
                                ...yearPayments,
                                [month + 1]: Number(e.target.value) || 0
                              }
                            };
                            setPropertyTaxPaymentsOverride(newOverride);
                          }}
                        />
                      </td>
                    ))}
                    <td className="px-2 py-1 border text-right">
                      {total.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Other Taxes - Percent of EGI */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Other Taxes - Percent of EGI</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th></th>
                {YEARS.map((year) => (
                  <th key={year} className="px-4 py-2 text-center">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">EGI</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {egi[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Tax Rate (% of EGI)</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={taxRateEGI[i] || ''}
                      onChange={(e) => {
                        const newRates = [...taxRateEGI];
                        newRates[i] = Number(e.target.value) || 0;
                        setTaxRateEGI(newRates);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Other Taxes</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {otherTaxes[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Other Tax Payments Override */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Other Tax Payments Override</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Tax YR</th>
                <th className="px-4 py-2 text-left">Payment YR</th>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                  <th key={month} className="px-4 py-2 text-center">{month}</th>
                ))}
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year) => {
                const paymentYear = year + 1;
                const yearPayments = otherTaxPaymentsOverride[year] || {};
                const total = Object.values(yearPayments).reduce((sum, val) => sum + (val || 0), 0);

                return (
                  <tr key={year}>
                    <td className="py-2">{year}</td>
                    <td className="py-2">{paymentYear}</td>
                    {[...Array(12)].map((_, month) => (
                      <td key={month} className="px-2 py-1 border bg-blue-50">
                        <Input
                          type="number"
                          className="w-full text-right"
                          value={yearPayments[month + 1] || ''}
                          onChange={(e) => {
                            const newOverride = {
                              ...otherTaxPaymentsOverride,
                              [year]: {
                                ...yearPayments,
                                [month + 1]: Number(e.target.value) || 0
                              }
                            };
                            setOtherTaxPaymentsOverride(newOverride);
                          }}
                        />
                      </td>
                    ))}
                    <td className="px-2 py-1 border text-right">
                      {total.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
} 