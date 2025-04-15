'use client'

import { WizardProvider } from '@/context/WizardContext'
import { PropertyDescription } from '@/components/PropertyDescription'
import { ProjectSchedule } from '@/components/ProjectSchedule'
import { PartnershipStructure } from '@/components/PartnershipStructure'
import { Debt } from '@/components/Debt'
import { IncomeAndExpenses } from '@/components/IncomeAndExpenses'
import { Taxes } from '@/components/Taxes'
import { Insurance } from '@/components/Insurance'
import { GroundLease } from '@/components/GroundLease'
import { CommercialAssumptions } from '@/components/CommercialAssumptions'
import { CapRate } from '@/components/CapRate'
import { ValuationAssessment } from '@/components/ValuationAssessment'

export default function WizardPage() {
  return (
    <WizardProvider>
      <main className="container mx-auto py-8 space-y-8">
        <h1 className="text-2xl font-bold mb-6">Property Wizard</h1>
        <PropertyDescription />
        <ProjectSchedule />
        <PartnershipStructure />
        <Debt />
        <IncomeAndExpenses />
        <Taxes />
        <Insurance />
        <GroundLease />
        <CommercialAssumptions />
        <CapRate />
        <ValuationAssessment />
      </main>
    </WizardProvider>
  )
}
