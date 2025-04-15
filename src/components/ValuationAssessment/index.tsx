'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ValueType = string | number | boolean;

export function ValuationAssessment() {
  const { valuationAssessment, setValuationAssessment } = useWizard()

  const updateField = (section: keyof typeof valuationAssessment, field: string, value: ValueType) => {
    setValuationAssessment({
      ...valuationAssessment,
      [section]: value
    })
  }

  const updateNestedField = (
    section: keyof typeof valuationAssessment,
    subsection: string,
    field: string,
    value: ValueType
  ) => {
    const sectionData = valuationAssessment[section] as { [key: string]: { [key: string]: ValueType } };
    setValuationAssessment({
      ...valuationAssessment,
      [section]: {
        ...sectionData,
        [subsection]: {
          ...sectionData[subsection],
          [field]: value
        }
      }
    })
  }

  const residentialFields = [
    'totalRevenue',
    'marketRent',
    'vacancy',
    'concessions',
    'badDebt',
    'expenses',
    'taxes'
  ] as const;

  const normalizeFields = [
    { label: 'Normalize Vacancy', field: 'normalizeVacancy' },
    { label: 'Normalize Concessions', field: 'normalizeConcessions' },
    { label: 'Normalize Bad Debt', field: 'normalizeBadDebt' }
  ] as const;

  const brokerTiers = ['tier1', 'tier2'] as const;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Valuation Assumptions</h2>
      
      <div className="space-y-8">
        {/* General Settings */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between gap-4">
            <span>Adjust Residential Value for RE taxes on Sale?</span>
            <Select
              value={valuationAssessment.adjustResidentialValue ? "yes" : "no"}
              onValueChange={(value) => updateField('adjustResidentialValue', '', value === "yes")}
            >
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span>Buyer&apos;s Assessed %</span>
            <Input
              type="number"
              className="w-32 text-right bg-blue-50"
              value={valuationAssessment.buyersAssessedPercent}
              onChange={(e) => updateField('buyersAssessedPercent', '', Number(e.target.value))}
            />
          </div>
          <div className="flex items-center gap-4">
            <span>Treatment of tax abatement</span>
            <Select
              value={valuationAssessment.treatmentOfTaxAbatement}
              onValueChange={(value) => updateField('treatmentOfTaxAbatement', '', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Not Capitalized">Not Capitalized</SelectItem>
                <SelectItem value="Capitalized">Capitalized</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Residential NOI Assumptions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Residential NOI Assumptions</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th></th>
                  <th className="px-4 py-2 text-center">Rolling Value</th>
                  <th className="px-4 py-2 text-center">Spot</th>
                  <th className="px-4 py-2 text-center">Dev Phase</th>
                  <th className="px-4 py-2 text-center">Inv Phase</th>
                </tr>
              </thead>
              <tbody>
                {residentialFields.map((field) => (
                  <tr key={field}>
                    <td className="px-4 py-2">{field.replace(/([A-Z])/g, ' $1').trim()}</td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="text"
                        className="w-full text-center"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', e.target.value)}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="text"
                        className="w-full text-center"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', e.target.value)}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="text"
                        className="w-full text-center"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', e.target.value)}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="text"
                        className="w-full text-center"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
                {/* Normalize rows */}
                {normalizeFields.map(({ label, field }) => (
                  <tr key={field}>
                    <td className="px-4 py-2">{label}</td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', Number(e.target.value))}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', Number(e.target.value))}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', Number(e.target.value))}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={valuationAssessment.residentialNOI[field]}
                        onChange={(e) => updateNestedField('residentialNOI', field, '', Number(e.target.value))}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commercial NOI Assumptions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Commercial NOI Assumptions</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th></th>
                  <th className="px-4 py-2 text-center">Rolling Value</th>
                  <th className="px-4 py-2 text-center">Spot</th>
                  <th className="px-4 py-2 text-center">Dev Phase</th>
                  <th className="px-4 py-2 text-center">Inv Phase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">NOI</td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="text"
                      className="w-full text-center"
                      value={valuationAssessment.commercialNOI.noi}
                      onChange={(e) => updateNestedField('commercialNOI', 'noi', '', e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="text"
                      className="w-full text-center"
                      value={valuationAssessment.commercialNOI.noi}
                      onChange={(e) => updateNestedField('commercialNOI', 'noi', '', e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="text"
                      className="w-full text-center"
                      value={valuationAssessment.commercialNOI.noi}
                      onChange={(e) => updateNestedField('commercialNOI', 'noi', '', e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="text"
                      className="w-full text-center"
                      value={valuationAssessment.commercialNOI.noi}
                      onChange={(e) => updateNestedField('commercialNOI', 'noi', '', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Selling Cost Assumptions */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Selling Cost Assumptions</h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-4 py-2">Transfer tax (total)</td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="number"
                      step="0.01"
                      className="w-full text-right"
                      value={valuationAssessment.sellingCosts.transferTaxTotal}
                      onChange={(e) => updateNestedField('sellingCosts', 'transferTaxTotal', '', Number(e.target.value))}
                    />
                  </td>
                  <td className="px-4 py-2">%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">% of total paid by seller</td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="number"
                      step="0.01"
                      className="w-full text-right"
                      value={100}
                      onChange={() => {}}
                    />
                  </td>
                  <td className="px-4 py-2">%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Transfer tax (paid by seller)</td>
                  <td className="px-4 py-2 text-right">{valuationAssessment.sellingCosts.transferTaxPaidBySeller}%</td>
                  <td className="px-4 py-2">%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Title & escrow</td>
                  <td className="px-2 py-1 bg-blue-50">
                    <Input
                      type="number"
                      step="0.01"
                      className="w-full text-right"
                      value={valuationAssessment.sellingCosts.titleAndEscrow}
                      onChange={(e) => updateNestedField('sellingCosts', 'titleAndEscrow', '', Number(e.target.value))}
                    />
                  </td>
                  <td className="px-4 py-2">%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Broker Commission Assumptions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Broker Commission Assumptions</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="px-4 py-2 text-right">Cap</th>
                  <th className="px-4 py-2 text-right">% of Value</th>
                  <th className="px-4 py-2 text-right">Dev. Ph.</th>
                  <th className="px-4 py-2 text-right">Inv. Ph.</th>
                </tr>
              </thead>
              <tbody>
                {brokerTiers.map((tier, index) => (
                  <tr key={tier}>
                    <td className="px-4 py-2">Tier {index + 1}</td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        className="w-full text-right"
                        value={valuationAssessment.brokerCommission[tier].cap}
                        onChange={(e) => updateNestedField('brokerCommission', tier, 'cap', Number(e.target.value))}
                      />
                    </td>
                    <td className="px-2 py-1 bg-blue-50">
                      <Input
                        type="number"
                        step="0.01"
                        className="w-full text-right"
                        value={valuationAssessment.brokerCommission[tier].percentOfValue}
                        onChange={(e) => updateNestedField('brokerCommission', tier, 'percentOfValue', Number(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-2 text-right">{valuationAssessment.brokerCommission[tier].devPhase.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right">{valuationAssessment.brokerCommission[tier].invPhase.toLocaleString()}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2 text-right">825,000</td>
                  <td></td>
                  <td className="px-4 py-2 text-right">397,528</td>
                  <td className="px-4 py-2 text-right">405,937</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Average</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disposition Fees */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Disposition Fees</h3>
          <table className="w-full max-w-md">
            <tbody>
              <tr>
                <td className="px-4 py-2">Greystar</td>
                <td className="px-2 py-1 bg-blue-50">
                  <Input
                    type="number"
                    step="0.01"
                    className="w-full text-right"
                    value={valuationAssessment.dispositionFees.greystar}
                    onChange={(e) => updateNestedField('dispositionFees', 'greystar', '', Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2">% of Value</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Other</td>
                <td className="px-2 py-1 bg-blue-50">
                  <Input
                    type="number"
                    step="0.01"
                    className="w-full text-right"
                    value={valuationAssessment.dispositionFees.other}
                    onChange={(e) => updateNestedField('dispositionFees', 'other', '', Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2">% of Value</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2 text-right">0.00%</td>
                <td className="px-4 py-2">% of Value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
} 