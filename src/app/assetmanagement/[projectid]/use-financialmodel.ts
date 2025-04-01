"use client";

import { useState } from "react";
import { createHookedContext } from "@/hooks/create-hooked-context";
import { IReval } from "@/financialmodel/models/reval/IReval";
import { initialRevalModelAssumtion, initiateRevalModel } from "@/financialmodel/services/USMFDevModelService";
import { USMFDevelopmentRevalInputType } from "@/financialmodel/types/assumptions/USDevelopmentAssumptions";

const useHook = () => {
  // Initialize state for the data
  const revalAssumption = initialRevalModelAssumtion();
  const revalModel = initiateRevalModel("test", revalAssumption);
  const [revalAssumptionData, setRevalAssumptionData] = useState<USMFDevelopmentRevalInputType>(revalAssumption);
  const [revalModelData, setRevalModelData] = useState<IReval>(revalModel);

  return {
    revalAssumptionData,
    revalModelData,
    setRevalAssumptionData,
    setRevalModelData,
  };
};

const [useReval, RevalProvider] = createHookedContext(useHook);
export { useReval, RevalProvider };
