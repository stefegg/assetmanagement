import { ModelConfig } from "../../types/config/ModelConfig";

export const USMFDevelopmentModelConfig: ModelConfig = {
    name: "Levered Cashflow",
    children: [
      {
        name: "Unlevered Cashflow",
        children: [
          {
            name: "Unlevered Project Cost",
            children: [
              {
                name: "Total Hard Construction Cost",
  
                children: [
                  { name: "Land Cost" },
                  { name: "Construction Hard Cost" },
                  { name: "Greystar GC Fee" },
                  { name: "Owner HC Contingency" },
                  { name: "Additional Hard Costs" },
                ],
              },
              {
                name: "Total Soft Construction Cost",
                children: [
                  { name: "Construction Period Taxes" },
                  { name: "Legal" },
                  { name: "Closing Costs" },
                  { name: "Municipal Fees" },
                  { name: "Architectural" },
                  { name: "Engineering" },
                  { name: "Operating Deficit" },
                  { name: "Lease-up Marketing" },
                  { name: "FFE" },
                  { name: "Tenant Improvements" },
                  { name: "Leasing Commissions" },
                  { name: "Other Development Costs" },
                  { name: "Insurance & Bond" },
                  { name: "Greystar CM Fee" },
                  { name: "Owner SC Contingency" },
                  { name: "Development Fee" },
                  { name: "Preleasing" },
                  { name: "Additional Soft Costs" },
                ],
              },
            ],
          },
          {
            name: "Net Operating Income",
            children: [
              {
                // This also used the same name "NOI After Replacement"
                // in your code (noiBeforeReplacementNode).
                name: "NOI After Replacement",
                children: [
                  {
                    name: "Total Routine Replacement Expense",
                  },
                  {
                    name: "Total Capital / Renovation Expense",
                  },
                  {
                    name: "NOI After Replacement",
                    children: [{ name: "Rent" }, { name: "Other Income" }, { name: "Commercial Income" }],
                  },
                  {
                    name: "Controllable Expenses",
                    children: [
                      { name: "Total Payroll & Benefits" },
                      { name: "Total Repairs & Maintenance" },
                      { name: "Total Student Turnover Expense" },
                      { name: "Total Make - Ready / Redecorating" },
                      { name: "Total Recreational Amenities" },
                      { name: "Total Contract Services" },
                      { name: "Total Corporate Housing Expense" },
                      { name: "Total Guest Suite Expense" },
                      { name: "Total Food Service Expense" },
                      { name: "Total Advertising / Marketing / Promotions" },
                      { name: "Total Office Expenses" },
                      { name: "Total Other General & Administrative" },
                      { name: "Total General & Administrative" },
                      { name: "Total Utilities" },
                    ],
                  },
                  {
                    name: "Non-Controllable Expenses",
                    children: [
                      { name: "Total Management Fee" },
                      { name: "Total Taxes" },
                      { name: "Total Ground Lease" },
                      { name: "Total Insurance" },
                      { name: "Recoverable Operating Expenses" },
                    ],
                  },
                  {
                      name: "Total Income",
                      children: [
                        { name: "Total Management Fee" },
                        { name: "Total Taxes" },
                        { name: "Total Ground Lease" },
                        { name: "Total Insurance" },
                        { name: "Recoverable Operating Expenses" },
                      ],
                    },
                ],
              },
            ],
          },
          {
            name: "Property Sale",
            children: [],
          },
        ],
      },
      {
        name: "Total Financing Cashflow",
        children: [
          { name: "Loan issuance" },
          { name: "Loan origination fee" },
          { name: "Loan repayment" },
          { name: "Loan interest" },
          { name: "Loan amortization" },
          { name: "Loan prepayment penalty" },
        ],
      },
    ],
  };

export const USMFDevelopmentResultConfig: string[] = [
  "Levered IRR",
  "Unlevered IRR",
  "Total Financing Cashflow",
  "Unlevered Cashflow",
  "Levered Cashflow",
];
