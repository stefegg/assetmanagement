'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"

const FUNDING_TYPES = [
  "Priority Capital",
  "Initial Capital",
  "Cost Overruns",
  "Additional Capital",
  "Cost Overruns 2"
] as const

export function PartnershipStructure() {
  const { 
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
  } = useWizard()

  const tierSetters = [
    { type: setTier1Type, cap: setTier1FundingCap },
    { type: setTier2Type, cap: setTier2FundingCap },
    { type: setTier3Type, cap: setTier3FundingCap },
    { type: setTier4Type, cap: setTier4FundingCap },
    { type: setTier5Type, cap: setTier5FundingCap },
    { type: setTier6Type, cap: setTier6FundingCap },
    { type: setTier7Type, cap: setTier7FundingCap },
    { type: setTier8Type, cap: setTier8FundingCap },
    { type: setTier9Type, cap: setTier9FundingCap },
    { type: setTier10Type, cap: setTier10FundingCap },
  ]

  const tierValues = [
    { type: tier1Type, cap: tier1FundingCap },
    { type: tier2Type, cap: tier2FundingCap },
    { type: tier3Type, cap: tier3FundingCap },
    { type: tier4Type, cap: tier4FundingCap },
    { type: tier5Type, cap: tier5FundingCap },
    { type: tier6Type, cap: tier6FundingCap },
    { type: tier7Type, cap: tier7FundingCap },
    { type: tier8Type, cap: tier8FundingCap },
    { type: tier9Type, cap: tier9FundingCap },
    { type: tier10Type, cap: tier10FundingCap },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Partnership Structure</h2>
      
      <div className="space-y-4">
        {/* Partnership Abstract */}
        <div className="flex items-center gap-4">
          <span className="w-64">Partnership Abstract</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setPartnershipAbstract("true")}
          >
            Link
          </Button>
        </div>

        {/* Preferred Return Compound Period */}
        <div className="flex items-center gap-4">
          <span className="w-64">Preferred Return Compound Period</span>
          <Select 
            defaultValue={preferredReturnCompoundPeriod || "annually"}
            onValueChange={(value) => setPreferredReturnCompoundPeriod(value)}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annually">Annually</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Funding Percentages */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Funding Percentages</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-32"></th>
                  {[...Array(10)].map((_, i) => (
                    <th key={i} className="px-4 py-2 text-center border bg-gray-50">
                      Tier {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Type Row */}
                <tr>
                  <td className="py-2">Type</td>
                  {[...Array(10)].map((_, i) => (
                    <td key={i} className="px-2 py-1 border bg-blue-50">
                      <Select 
                        defaultValue={tierValues[i].type}
                        onValueChange={(value) => tierSetters[i].type(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {FUNDING_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  ))}
                </tr>
                {/* Funding Cap Row */}
                <tr>
                  <td className="py-2">Funding Cap</td>
                  {[...Array(10)].map((_, i) => (
                    <td key={i} className="px-2 py-1 border bg-blue-50">
                      <Input 
                        type="number"
                        defaultValue={tierValues[i].cap}
                        className="w-full text-right"
                        onChange={(e) => tierSetters[i].cap(Number(e.target.value))}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  )
} 