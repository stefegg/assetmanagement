'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWizard } from "@/context/WizardContext"

const YEARS = Array.from({ length: 16 }, (_, i) => 2022 + i)
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const MONTH_TO_NUMBER: { [key: string]: number } = {
  'Jan': 1,
  'Feb': 2,
  'Mar': 3,
  'Apr': 4,
  'May': 5,
  'Jun': 6,
  'Jul': 7,
  'Aug': 8,
  'Sep': 9,
  'Oct': 10,
  'Nov': 11,
  'Dec': 12
}

export function GroundLease() {
  const {
    // groundLeasePaymentMonths,
    groundLeaseGrowthRate,
    groundLeaseAnnualPayment,
    groundLeaseMonthlyDetails1,
    groundLeaseMonthlyDetails2,
    setGroundLeaseGrowthRate,
    setGroundLeaseMonthlyDetails1,
    setGroundLeaseMonthlyDetails2,
    stepUpMonth,
    setStepUpMonth,
  } = useWizard()

  const updateMonthlyDetail1 = (year: number, month: number, value: number) => {
    const yearDetails = groundLeaseMonthlyDetails1[year] || {};
    const newYearDetails = {
      ...yearDetails,
      [month]: value
    };
    setGroundLeaseMonthlyDetails1({
      ...groundLeaseMonthlyDetails1,
      [year]: newYearDetails
    });
  };

  const updateMonthlyDetail2 = (year: number, month: number, value: number) => {
    const yearDetails = groundLeaseMonthlyDetails2[year] || {};
    const newYearDetails = {
      ...yearDetails,
      [month]: value
    };
    setGroundLeaseMonthlyDetails2({
      ...groundLeaseMonthlyDetails2,
      [year]: newYearDetails
    });
  };

  const getYearTotal = (year: number, details: { [year: number]: { [month: number]: number } }) => {
    const yearDetails = details[year] || {};
    return Object.values(yearDetails).reduce((sum, value) => sum + (value || 0), 0);
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Ground Lease</h2>
      
      <div className="space-y-8">
        {/* Step Up Month */}
        <div className="w-1/2">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left w-1/3">Step Up Month</th>
                <td className="px-2 py-1 border bg-blue-50 w-1/3">
                  <Select value={stepUpMonth} onValueChange={setStepUpMonth}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select month" />
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
                <td className="px-4 py-2 text-left w-1/3">{stepUpMonth ? MONTH_TO_NUMBER[stepUpMonth] : ''}</td>
              </tr>
            </thead>
          </table>
        </div>

        {/* Ground Lease */}
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
                <td className="py-2">Growth Rate</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={groundLeaseGrowthRate[i] || ''}
                      onChange={(e) => {
                        const newRates = [...groundLeaseGrowthRate];
                        newRates[i] = Number(e.target.value) || 0;
                        setGroundLeaseGrowthRate(newRates);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2">Annual Payment</td>
                {YEARS.map((year, i) => (
                  <td key={year} className="px-2 py-1 border">
                    {groundLeaseAnnualPayment[i]?.toLocaleString()}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Ground Lease Monthly Details */}
        <div className="overflow-x-auto mt-8">
          <h3 className="font-semibold mb-4">Ground Lease Payments Override</h3>
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
                        value={groundLeaseMonthlyDetails1[year]?.[month + 1] || ''}
                        onChange={(e) => updateMonthlyDetail1(year, month + 1, Number(e.target.value) || 0)}
                      />
                    </td>
                  ))}
                  <td className="px-2 py-1 border">{getYearTotal(year, groundLeaseMonthlyDetails1).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="font-semibold mb-4">Ground Lease Payments</h3>
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
                        value={groundLeaseMonthlyDetails2[year]?.[month + 1] || ''}
                        onChange={(e) => updateMonthlyDetail2(year, month + 1, Number(e.target.value) || 0)}
                      />
                    </td>
                  ))}
                  <td className="px-2 py-1 border">{getYearTotal(year, groundLeaseMonthlyDetails2).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
} 