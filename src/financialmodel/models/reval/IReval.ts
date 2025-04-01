import { UnderwritingModel } from "../UnderwritingModel";
import { Node } from "../Node";
import { Asset } from "../Asset";
import { ActualData } from "../../types/reval/ActualData";

export interface IReval {
    /** Metadata about this reval (period, asset type, etc.) */
    id: string;
    name: string;
    revalDate: Date;
    revalType: "Official" | "Draft" | string;
    dealType: "Development" | "Investment" | string;
    assetType: "Multifamily" | "Student Housing" | "SFR" | "Active Adult" | string;
    country: "US" | "CA" | string;
    revalPeriod: string; // e.g., "1H24"
    modelDates: Date[];
  
    /** The “core” model for this reval. Must at least have references to 
          Levered CF, Unlevered CF, etc. so that portfolio-level aggregation 
          knows how to find them. 
      **/
    underwritingModel: UnderwritingModel;
  
    /** Basic, standard data about the asset. */
    asset: Asset;
  
    /** Some container that holds the “actual data” for the months. */
    actuals: ActualData;
  
    /** A method or two that triggers a recalculation for this reval. */
    recalc(): void;
  
    /** Potentially, a method that returns “common output nodes” 
          for cross‐reval aggregation: e.g. getLeveredCashflowNode() 
      **/
    getLeveredCashflowNode(): Node | null;
    getUnleveredCashflowNode(): Node | null;
    getNOINode(): Node | null;
  }