'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"

// Initialize with 15 empty tenants
const INITIAL_TENANTS = Array(15).fill(null).map((_, index) => ({
  name: index < 3 ? ['Restaurant (Wine Bar)', 'Skybar', 'Market'][index] : `Tenant ${index + 1}`,
  nrsf: index < 3 ? [2000, 1000, 1200][index] : 0,
  nnnRate: 24.00,
  annualLeaseEsc: index < 3 ? 3.0 : 0,
  leaseStart: index < 3 ? ['12/15/2026', '3/15/2026', '9/15/2026'][index] : '',
  freeRentMonths: index < 3 ? 3 : 0,
  camRate: 2.00,
  annualCamEsc: index < 3 ? [3.0, 0.0, 0.0][index] : 0,
  tiPerSf: 65.00,
  tiConstructionTime: index < 3 ? 4 : 0,
  lcPercentage: index < 3 ? 6.0 : 0,
  lcTerm: index < 3 ? 6 : 0
}))

export function CommercialAssumptions() {
  const {
    generalVacancy,
    commercialTenants,
    setGeneralVacancy,
    setCommercialTenants
  } = useWizard()

  // Initialize tenants if empty
  React.useEffect(() => {
    if (commercialTenants.length === 0) {
      setCommercialTenants(INITIAL_TENANTS)
    }
  }, [commercialTenants.length, setCommercialTenants])

  const updateTenant = (
    index: number, 
    field: keyof typeof INITIAL_TENANTS[0], 
    value: string | number
  ) => {
    const newTenants = [...commercialTenants]
    newTenants[index] = {
      ...newTenants[index],
      [field]: value
    }
    setCommercialTenants(newTenants)
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Commercial Assumptions</h2>
      
      <div className="space-y-4">
        {/* General Vacancy */}
        <div className="w-1/3">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="py-2">General Vacancy</td>
                <td className="px-2 py-1 border bg-blue-50">
                  <Input
                    type="number"
                    className="w-full text-right"
                    value={generalVacancy || ''}
                    onChange={(e) => setGeneralVacancy(Number(e.target.value) || 0)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tenants Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Tenant</th>
                <th className="px-4 py-2 text-right">NRSF</th>
                <th className="px-4 py-2 text-right">NNN $/SF/YR</th>
                <th className="px-4 py-2 text-right">Annual Lease Esc.</th>
                <th className="px-4 py-2 text-center">Lease Start</th>
                <th className="px-4 py-2 text-right">Free Rent (mo.)</th>
                <th className="px-4 py-2 text-right">CAM $/SF/YR</th>
                <th className="px-4 py-2 text-right">Annual CAM Esc.</th>
                <th className="px-4 py-2 text-right">TI $/SF</th>
                <th className="px-4 py-2 text-right">TI Constr. Time (mo.)</th>
                <th className="px-4 py-2 text-right">LC %</th>
                <th className="px-4 py-2 text-right">LC Term (mo.)</th>
              </tr>
            </thead>
            <tbody>
              {commercialTenants.map((tenant, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="text"
                      className="w-full"
                      value={tenant.name}
                      onChange={(e) => updateTenant(index, 'name', e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.nrsf || ''}
                      onChange={(e) => updateTenant(index, 'nrsf', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.nnnRate || ''}
                      onChange={(e) => updateTenant(index, 'nnnRate', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.annualLeaseEsc || ''}
                      onChange={(e) => updateTenant(index, 'annualLeaseEsc', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="text"
                      className="w-full text-center"
                      value={tenant.leaseStart}
                      onChange={(e) => updateTenant(index, 'leaseStart', e.target.value)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.freeRentMonths || ''}
                      onChange={(e) => updateTenant(index, 'freeRentMonths', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.camRate || ''}
                      onChange={(e) => updateTenant(index, 'camRate', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.annualCamEsc || ''}
                      onChange={(e) => updateTenant(index, 'annualCamEsc', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.tiPerSf || ''}
                      onChange={(e) => updateTenant(index, 'tiPerSf', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.tiConstructionTime || ''}
                      onChange={(e) => updateTenant(index, 'tiConstructionTime', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.lcPercentage || ''}
                      onChange={(e) => updateTenant(index, 'lcPercentage', Number(e.target.value) || 0)}
                    />
                  </td>
                  <td className="px-2 py-1 border bg-blue-50">
                    <Input
                      type="number"
                      className="w-full text-right"
                      value={tenant.lcTerm || ''}
                      onChange={(e) => updateTenant(index, 'lcTerm', Number(e.target.value) || 0)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-2 font-semibold">Total / Avg:</td>
                <td className="px-4 py-2 text-right">{commercialTenants.reduce((sum, t) => sum + (t.nrsf || 0), 0).toLocaleString()}</td>
                <td className="px-4 py-2 text-right">${commercialTenants[0]?.nnnRate.toFixed(2)}</td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right">${commercialTenants[0]?.camRate.toFixed(2)}</td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right">${commercialTenants[0]?.tiPerSf.toFixed(2)}</td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right"></td>
                <td className="px-4 py-2 text-right"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
} 