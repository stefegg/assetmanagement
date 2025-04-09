import { ModelConfig } from "../../types/config/ModelConfig";

export const USMFDevelopmentModelConfig: ModelConfig = {
  name: "Gross Levered Cashflow",
  children: [
    {
      name: "Unlevered Cashflow",
      children: [
        {
          name: "Unlevered Project Cost",
          children: [
            {
              name: "Land Cost",
            },
            {
              name: "Total Hard Cost",

              children: [
                { name: "Construction Costs" },
                { name: "Owner Contingency" },
                { name: "Development Fee" },
                { name: "Additional Hard Costs" },
              ],
            },
            {
              name: "Total Soft Cost",
              children: [
                { name: "Insurance Claim Expenses" },
                { name: "Taxes & Licensing Costs" },
                { name: "Property Taxes" },
                { name: "Legal and Related Fees" },
                { name: "Closing Costs" },
                { name: "Municipal Fees" },
                { name: "Architectural Costs" },
                { name: "Engineering & Consultants" },
                { name: "Pre-Leasing Costs" },
                { name: "Operating Deficit" },
                { name: "Marketing / Other Dev Costs" },
                { name: "Overhead Allocations" },
                { name: "Soft Cost Contingency" },
                { name: "Retail Costs" },
                { name: "Amenities" },
                { name: "Additional Soft Costs" },
              ],
            },
          ],
        },
        {
          name: "Net Operating Cashflow",
          children: [
            {
              name: "NOI After Replacement",
              children: [
                {
                  name: "Total Routine Replacement Expense",
                },
                {
                  name: "Total Capital / Renovation Expense",
                },
                {
                  name: "NOI Before Replacement",
                  children: [
                    {
                      name: "Total Income",
                      children: [
                        {
                          name: "Total Net Rental Income",
                          children: [{ name: "Potential Rent" }, { name: "Total Concession Loss" }, { name: "Total Vacancy Loss" }],
                        },
                        { name: "Total Other Income" },
                      ],
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
                  ],
                },
              ],
            },
            {
              name: "Total Rental & Other Inc. - Commercial",
            },
          ],
        },
        {
          name: "Property Cash Balance",
        },
        {
          name: "Residential Sale",
        },
        {
          name: "Commercial Sale",
        },
        {
          name: "PV of Remaining Tax Abaitment",
        },
        {
          name: "Closing Costs",
        },
        {
          name: "Disposition Fees",
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
