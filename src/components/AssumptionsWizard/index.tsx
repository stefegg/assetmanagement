'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { CommercialAssumptions } from "@/components/CommercialAssumptions"
import { PropertyDescription } from "@/components/PropertyDescription"
import { GroundLease } from "@/components/GroundLease"
import { Insurance } from "@/components/Insurance"
import { Taxes } from "@/components/Taxes"
import { ValuationAssumptions } from "@/components/ValuationAssumptions"
import { ProjectSchedule } from "../ProjectSchedule"
import { PartnershipStructure } from "../PartnershipStructure"
import { Debt } from "../Debt"
import { IncomeAndExpenses } from "../IncomeAndExpenses"
import { CapRate } from "../CapRate"

const WIZARD_PAGES = [
  {
    title: "Property Description",
    component: PropertyDescription
  },
  {
    title: "Project Schedule",
    component: ProjectSchedule
  },
  {
    title: "Partnership Structure",
    component: PartnershipStructure
  },
  {
    title: "Debt",
    component: Debt
  },
  {
    title: "Income and Expenses",
    component: IncomeAndExpenses
  },
  {
    title: "Taxes",
    component: Taxes
  },
  {
    title: "Insurance",
    component: Insurance
  },
  {
    title: "Ground Lease",
    component: GroundLease
  },
  {
    title: "Commercial Assumptions",
    component: CommercialAssumptions
  },
  {
    title: "Cap Rate",
    component: CapRate
  },
  {
    title: "Valuation Assumptions",
    component: ValuationAssumptions
  }
];

export function AssumptionsWizard() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const CurrentComponent = WIZARD_PAGES[currentPage].component;
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === WIZARD_PAGES.length - 1;

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstPage) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col bg-gray-300 rounded-lg p-4 shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 pl-4">{WIZARD_PAGES[currentPage].title}</h1>
        <div className="mb-8 overflow-y-auto max-h-[calc(100vh-20rem)]">
          <CurrentComponent />
        </div>
      
      <div className="flex flex-row justify-between px-4 pb-4">

          <Button 
            variant="outline" 
            onClick={handleBack}
            className={`${isFirstPage ? "invisible" : ""}`}
          >
            Back
          </Button>
      {!isLastPage && (
          <Button 
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
} 