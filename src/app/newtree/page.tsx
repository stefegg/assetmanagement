"use client"

import { FinancialInputTree } from "@/components/FinancialInputTree"
import { USMFDevelopmentModelConfig } from "@/financialmodel/config/development/USMFConfig"

export default function NewTreePage() {
  return (
    <div className="flex flex-col h-screen">

      <div className="flex-1 overflow-hidden">
        <FinancialInputTree
          root={USMFDevelopmentModelConfig}
          dealName="USMF Development"
          dealType="Development"
          length={12} // 12 months
          startDate={new Date()}
          results={["NOI", "Cap Rate"]}
        />
      </div>
    </div>
  )
}
