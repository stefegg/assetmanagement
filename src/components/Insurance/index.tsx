'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"

const YEARS = Array.from({ length: 16 }, (_, i) => 2022 + i)

export function Insurance() {
  const {
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
    setTotalInsurableValue,
    setPropertyInsuranceCostPer100,
    setBoilerMachineryCostPer100,
    setPropertyInsuranceGrowthRate,
    setGeneralLiabilityExcessUmbrella,
    setPollution,
    setPropertyRelatedPercentage,
    setCasualtyInsuranceGrowthRate,
    setInsuranceMonthlyDetails1,
    setInsuranceMonthlyDetails2,
  } = useWizard()

  const updateMonthlyDetail1 = (year: number, month: number, value: number) => {
    const yearDetails = insuranceMonthlyDetails1[year] || {};
    const newYearDetails = {
      ...yearDetails,
      [month]: value
    };
    setInsuranceMonthlyDetails1({
      ...insuranceMonthlyDetails1,
      [year]: newYearDetails
    });
  };

  const updateMonthlyDetail2 = (year: number, month: number, value: number) => {
    const yearDetails = insuranceMonthlyDetails2[year] || {};
    const newYearDetails = {
      ...yearDetails,
      [month]: value
    };
    setInsuranceMonthlyDetails2({
      ...insuranceMonthlyDetails2,
      [year]: newYearDetails
    });
  };

  const getYearTotal = (year: number, details: { [year: number]: { [month: number]: number } }) => {
    const yearDetails = details[year] || {};
    return Object.values(yearDetails).reduce((sum, value) => sum + (value || 0), 0);
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Insurance</h2>
      
      <div className="space-y-8">
        {/* Property Insurance Assumptions */}
        <div>
          <h3 className="font-semibold mb-4">Property Insurance Assumptions</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="py-2">Total Insurable Value</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={totalInsurableValue || ''}
                    onChange={(e) => setTotalInsurableValue(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2">Property Insurance Cost / $100</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={propertyInsuranceCostPer100 || ''}
                    onChange={(e) => setPropertyInsuranceCostPer100(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2">Boiler/Machinery Cost / $100</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={boilerMachineryCostPer100 || ''}
                    onChange={(e) => setBoilerMachineryCostPer100(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Casualty Insurance Cost Per Unit */}
        <div>
          <h3 className="font-semibold mb-4">Casualty Insurance Cost Per Unit</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="py-2">General Liability / Excess / Umbrella</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={generalLiabilityExcessUmbrella || ''}
                    onChange={(e) => setGeneralLiabilityExcessUmbrella(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2">Pollution</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={pollution || ''}
                    onChange={(e) => setPollution(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2">Property Related %</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={propertyRelatedPercentage || ''}
                    onChange={(e) => setPropertyRelatedPercentage(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Property Insurance */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Property Insurance</h3>
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
                <td className="py-2">Growth Rate</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={propertyInsuranceGrowthRate[i] || ''}
                      onChange={(e) => {
                        const newRates = [...propertyInsuranceGrowthRate];
                        newRates[i] = Number(e.target.value) || 0;
                        setPropertyInsuranceGrowthRate(newRates);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Annual Payment</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {propertyInsuranceAnnualPayment[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Insurance / Unit</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {insurancePerUnit[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Casualty Insurance */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Casualty Insurance</h3>
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
                <td className="py-2">Growth Rate</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={casualtyInsuranceGrowthRate[i] || ''}
                      onChange={(e) => {
                        const newRates = [...casualtyInsuranceGrowthRate];
                        newRates[i] = Number(e.target.value) || 0;
                        setCasualtyInsuranceGrowthRate(newRates);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Annual Payment</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {casualtyInsuranceAnnualPayment[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Insurance */}
        <div className="overflow-x-auto">
          <h3 className="font-semibold mb-4">Total Insurance</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="py-2">Total Payment</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {((propertyInsuranceAnnualPayment[i] || 0) + (casualtyInsuranceAnnualPayment[i] || 0)).toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Growth Rate</td>
                {YEARS.map((year, i) => {
                  const prevTotal = (propertyInsuranceAnnualPayment[i - 1] || 0) + (casualtyInsuranceAnnualPayment[i - 1] || 0);
                  const currentTotal = (propertyInsuranceAnnualPayment[i] || 0) + (casualtyInsuranceAnnualPayment[i] || 0);
                  const growthRate = prevTotal ? ((currentTotal - prevTotal) / prevTotal) * 100 : 0;
                  return (
                    <td key={year} className="px-2 py-1 border">
                      {growthRate.toFixed(1)}%
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="py-2">Monthly Accrual</td>
                {YEARS.map((year, i) => {
                  const totalPayment = (propertyInsuranceAnnualPayment[i] || 0) + (casualtyInsuranceAnnualPayment[i] || 0);
                  const monthlyAccrual = totalPayment / 12;
                  return (
                    <td key={year} className="px-2 py-1 border">
                      {monthlyAccrual.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Insurance Monthly Details */}
        <div className="overflow-x-auto mt-8">
          <h3 className="font-semibold mb-4">Total Insurance Payments Override</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-center">Jan</th>
                <th className="px-4 py-2 text-center">Feb</th>
                <th className="px-4 py-2 text-center">Mar</th>
                <th className="px-4 py-2 text-center">Apr</th>
                <th className="px-4 py-2 text-center">May</th>
                <th className="px-4 py-2 text-center">Jun</th>
                <th className="px-4 py-2 text-center">Jul</th>
                <th className="px-4 py-2 text-center">Aug</th>
                <th className="px-4 py-2 text-center">Sep</th>
                <th className="px-4 py-2 text-center">Oct</th>
                <th className="px-4 py-2 text-center">Nov</th>
                <th className="px-4 py-2 text-center">Dec</th>
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year) => (
                <tr key={year}>
                  <td className="py-2">{year}</td>
                  {Array.from({ length: 12 }).map((_, month) => (
                    <td key={month} className="px-2 py-1 border bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={insuranceMonthlyDetails1[year]?.[month + 1] || ''}
                        onChange={(e) => updateMonthlyDetail1(year, month + 1, Number(e.target.value) || 0)}
                      />
                    </td>
                  ))}
                  <td className="px-2 py-1 border">{getYearTotal(year, insuranceMonthlyDetails1).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="font-semibold mb-4">Total Insurance Payments</h3>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-center">Jan</th>
                <th className="px-4 py-2 text-center">Feb</th>
                <th className="px-4 py-2 text-center">Mar</th>
                <th className="px-4 py-2 text-center">Apr</th>
                <th className="px-4 py-2 text-center">May</th>
                <th className="px-4 py-2 text-center">Jun</th>
                <th className="px-4 py-2 text-center">Jul</th>
                <th className="px-4 py-2 text-center">Aug</th>
                <th className="px-4 py-2 text-center">Sep</th>
                <th className="px-4 py-2 text-center">Oct</th>
                <th className="px-4 py-2 text-center">Nov</th>
                <th className="px-4 py-2 text-center">Dec</th>
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year) => (
                <tr key={year}>
                  <td className="py-2">{year}</td>
                  {Array.from({ length: 12 }).map((_, month) => (
                    <td key={month} className="px-2 py-1 border">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={insuranceMonthlyDetails2[year]?.[month + 1] || ''}
                        onChange={(e) => updateMonthlyDetail2(year, month + 1, Number(e.target.value) || 0)}
                      />
                    </td>
                  ))}
                  <td className="px-2 py-1 border">{getYearTotal(year, insuranceMonthlyDetails2).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
} 