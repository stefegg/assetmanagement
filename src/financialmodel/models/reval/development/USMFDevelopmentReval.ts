import { USMFDevelopmentRevalInputType } from "../../../types/assumptions/USDevelopmentAssumptions";
import { ActualData } from "../../../types/reval/ActualData";
import { IReval } from "../IReval";
import { Asset } from "../../Asset";
import { Node } from "../../Node";
import { UnderwritingModel } from "../../UnderwritingModel";
import { USMFDevelopmentModelConfig, USMFDevelopmentResultConfig } from "../../../config/development/USMFConfig";

export class USMFDevelopmentReval implements IReval {
  // Satisfy the IReval interface
  id: string = "";
  name: string = "";
  revalType: string = "";
  dealType: string = "";
  assetType: string = "";
  period: string = "";
  underwritingModel: UnderwritingModel;
  asset: Asset;
  actuals: ActualData;

  // Additional fields that only Development deals have
  devAssumptions: USMFDevelopmentRevalInputType;
  // e.g. your "propertyDescription, projectSchedule, etc."

  revalDate: Date = new Date();
  country: string = "";
  revalPeriod: string = "";
  modelDates: Date[] = [];

  constructor(init: {
    id: string;
    name: string;
    revalType: string;
    dealType: string;
    assetType: string;
    period: string;
    underwritingModel?: UnderwritingModel;
    asset: Asset;
    actuals: ActualData;
    devAssumptions: USMFDevelopmentRevalInputType;
    revalDate: Date;
    country: string;
    revalPeriod: string;
    modelDates?: Date[];
  }) {
    this.id = init.id;
    this.name = init.name;
    this.revalType = init.revalType;
    this.dealType = init.dealType;
    this.assetType = init.assetType;
    this.period = init.period;

    this.asset = init.asset;
    this.actuals = init.actuals;
    this.devAssumptions = init.devAssumptions;
    this.revalDate = init.revalDate;
    this.country = init.country;
    this.revalPeriod = init.revalPeriod;
    if (init.modelDates) {
      this.modelDates = init.modelDates;
    }
    if (!init.underwritingModel) {
      this.underwritingModel = new UnderwritingModel(
        this.name,
        this.dealType,
        this.modelDates.length,
        this.modelDates[0],
        USMFDevelopmentModelConfig,
        USMFDevelopmentResultConfig
      );
    } else {
      this.underwritingModel = init.underwritingModel;
    }
  }

  getUnleveredCashflowNode(): Node | null {
    return this.underwritingModel.getNodeByName("Unlevered Cashflow");
  }

  getNOINode(): Node | null {
    return this.underwritingModel.getNodeByName("NOI");
  }

  recalc(): void {
    // Orchestrate applying devAssumptions into the Node tree
    // and then call underwritingModel.calculateDeal();
    // ...
  }

  getLeveredCashflowNode(): Node | null {
    return this.underwritingModel.getNodeByName("Levered Cashflow");
  }
  // ... similarly for getUnleveredCashflowNode, getNOINode, etc.
}
