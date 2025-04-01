// app/page.tsx
import { USMFDevelopmentModelConfig } from "@/financialmodel/config/development/USMFConfig"
import { DecisionTree } from "@/components/decision-tree"

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Development Model Decision Tree</h1>
      <DecisionTree root={USMFDevelopmentModelConfig} />
    </main>
  )
}
