import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useWizard } from "@/context/WizardContext"

export function IncomeAndExpenses() {
  const {
    stabilizedOccupancy,
    setStabilizedOccupancy,
    propertyMinCash,
    setPropertyMinCash,
    propertyMaxCash,
    setPropertyMaxCash,
    propertyMgmtFeePercent,
    setPropertyMgmtFeePercent,
    propertyMgmtFeeMin,
    setPropertyMgmtFeeMin,
    assetMgmtFeePercent,
    setAssetMgmtFeePercent,
    assetMgmtFeeMin,
    setAssetMgmtFeeMin,
    assetMgmtFeeStart,
    setAssetMgmtFeeStart,
    marketRentGrowth,
    setMarketRentGrowth,
    gainLossToLeaseGrowth,
    setGainLossToLeaseGrowth,
    downUnitLossGrowth,
    setDownUnitLossGrowth,
    miscOtherRentsGrowth,
    setMiscOtherRentsGrowth,
    recurringConcessionsGrowth,
    setRecurringConcessionsGrowth,
    concessionsGrowth,
    setConcessionsGrowth,
    vacancyLossGrowth,
    setVacancyLossGrowth,
    nonRevenueUnitsGrowth,
    setNonRevenueUnitsGrowth,
    badDebtGrowth,
    setBadDebtGrowth,
    badDebtRecoveryGrowth,
    setBadDebtRecoveryGrowth,
    miscDirectIncomeGrowth,
    setMiscDirectIncomeGrowth,
    otherIncResidentialGrowth,
    setOtherIncResidentialGrowth,
    expenseShoppingCommercialGrowth,
    setExpenseShoppingCommercialGrowth,
    rentalOtherIncomeGrowth,
    setRentalOtherIncomeGrowth,
    miscIncomeGrowth,
    setMiscIncomeGrowth,
    payrollBenefitsGrowth,
    setPayrollBenefitsGrowth,
    repairsMaintenanceGrowth,
    setRepairsMaintenanceGrowth,
    outsideServicesGrowth,
    setOutsideServicesGrowth,
    makeReadyGrowth,
    setMakeReadyGrowth,
    recreationalAmenitiesGrowth,
    setRecreationalAmenitiesGrowth,
    contractServicesGrowth,
    setContractServicesGrowth,
    corporateHousingGrowth,
    setCorporateHousingGrowth,
    guestSuiteGrowth,
    setGuestSuiteGrowth,
    foodServiceGrowth,
    setFoodServiceGrowth,
    advertisingMarketingGrowth,
    setAdvertisingMarketingGrowth,
    officeExpensesGrowth,
    setOfficeExpensesGrowth,
    otherGeneralAdminGrowth,
    setOtherGeneralAdminGrowth,
    generalAdminGrowth,
    setGeneralAdminGrowth,
    utilitiesGrowth,
    setUtilitiesGrowth,
    propertyGrowth,
    setPropertyGrowth,
    recoverableOpExpGrowth,
    setRecoverableOpExpGrowth,
    routineReplacementGrowth,
    setRoutineReplacementGrowth,
    capitalRenovationGrowth,
    setCapitalRenovationGrowth,
    otherNonOpExpGrowth,
    setOtherNonOpExpGrowth,
    otherExpensesGrowth,
    setOtherExpensesGrowth,
    partnershipOwnerGrowth,
    setPartnershipOwnerGrowth,
    debtServiceGroundLeaseGrowth,
    setDebtServiceGroundLeaseGrowth,
  } = useWizard()

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Income & Expenses</h3>
        
        <div className="grid grid-cols-4 gap-x-8">
          {/* Occupancy Section */}
          <div className="space-y-2">
            <h4 className="font-medium">Occupancy:</h4>
            <div className="grid grid-cols-2 gap-2 items-center">
              <span>Stabilized Occupancy</span>
              <Input
                type="number"
                step="0.01"
                className="bg-blue-50"
                value={stabilizedOccupancy}
                onChange={(e) => setStabilizedOccupancy(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Property Cash Section */}
          <div className="space-y-2">
            <h4 className="font-medium">Property Cash:</h4>
            <div className="grid grid-cols-2 gap-2 items-center">
              <span>Minimum</span>
              <Input
                type="number"
                className="bg-blue-50"
                value={propertyMinCash}
                onChange={(e) => setPropertyMinCash(Number(e.target.value))}
              />
              <span>Cap</span>
              <Input
                type="number"
                className="bg-blue-50"
                value={propertyMaxCash}
                onChange={(e) => setPropertyMaxCash(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Property Management Fee Section */}
          <div className="space-y-2">
            <h4 className="font-medium">Property Management Fee:</h4>
            <div className="grid grid-cols-2 gap-2 items-center">
              <span>% of EGI</span>
              <Input
                type="number"
                step="0.01"
                className="bg-blue-50"
                value={propertyMgmtFeePercent}
                onChange={(e) => setPropertyMgmtFeePercent(Number(e.target.value))}
              />
              <span>Minimum</span>
              <Input
                type="number"
                className="bg-blue-50"
                value={propertyMgmtFeeMin}
                onChange={(e) => setPropertyMgmtFeeMin(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Asset Management Fee Section */}
          <div className="space-y-2">
            <h4 className="font-medium">Asset Management Fee:</h4>
            <div className="grid grid-cols-2 gap-2 items-center">
              <span>% of EGI</span>
              <Input
                type="number"
                step="0.01"
                className="bg-blue-50"
                value={assetMgmtFeePercent}
                onChange={(e) => setAssetMgmtFeePercent(Number(e.target.value))}
              />
              <span>Minimum</span>
              <Input
                type="number"
                className="bg-blue-50"
                value={assetMgmtFeeMin}
                onChange={(e) => setAssetMgmtFeeMin(Number(e.target.value))}
              />
              <span>Fee Start</span>
              <Input
                type="date"
                className="bg-blue-50"
                value={assetMgmtFeeStart}
                onChange={(e) => setAssetMgmtFeeStart(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* P&L Growth Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="px-2"></th>
                {Array.from({ length: 18 }, (_, i) => 2022 + i).map((year, i) => (
                  <th key={`year-${i}`} className="px-2">{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Revenue Section */}
              <tr>
                <td colSpan={19} className="font-medium pt-4">Revenue</td>
              </tr>
              <tr>
                <td className="px-2">Market Rent</td>
                {marketRentGrowth.map((value, i) => (
                  <td key={`market-rent-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...marketRentGrowth];
                        newValues[i] = Number(e.target.value);
                        setMarketRentGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Gain / Loss to Lease</td>
                {gainLossToLeaseGrowth.map((value, i) => (
                  <td key={`gain-loss-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...gainLossToLeaseGrowth];
                        newValues[i] = Number(e.target.value);
                        setGainLossToLeaseGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Down Unit Loss</td>
                {downUnitLossGrowth.map((value, i) => (
                  <td key={`down-unit-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...downUnitLossGrowth];
                        newValues[i] = Number(e.target.value);
                        setDownUnitLossGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Misc Other Rents</td>
                {miscOtherRentsGrowth.map((value, i) => (
                  <td key={`misc-rents-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...miscOtherRentsGrowth];
                        newValues[i] = Number(e.target.value);
                        setMiscOtherRentsGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Recurring Concessions</td>
                {recurringConcessionsGrowth.map((value, i) => (
                  <td key={`recurring-concessions-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...recurringConcessionsGrowth];
                        newValues[i] = Number(e.target.value);
                        setRecurringConcessionsGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Concessions</td>
                {concessionsGrowth.map((value, i) => (
                  <td key={`concessions-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...concessionsGrowth];
                        newValues[i] = Number(e.target.value);
                        setConcessionsGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Vacancy Loss</td>
                {vacancyLossGrowth.map((value, i) => (
                  <td key={`vacancy-loss-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...vacancyLossGrowth];
                        newValues[i] = Number(e.target.value);
                        setVacancyLossGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Non Revenue Units</td>
                {nonRevenueUnitsGrowth.map((value, i) => (
                  <td key={`non-revenue-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...nonRevenueUnitsGrowth];
                        newValues[i] = Number(e.target.value);
                        setNonRevenueUnitsGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Bad Debt</td>
                {badDebtGrowth.map((value, i) => (
                  <td key={`bad-debt-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...badDebtGrowth];
                        newValues[i] = Number(e.target.value);
                        setBadDebtGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Bad Debt Recovery</td>
                {badDebtRecoveryGrowth.map((value, i) => (
                  <td key={`bad-debt-recovery-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...badDebtRecoveryGrowth];
                        newValues[i] = Number(e.target.value);
                        setBadDebtRecoveryGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Other Misc Direct Income</td>
                {miscDirectIncomeGrowth.map((value, i) => (
                  <td key={`misc-direct-income-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...miscDirectIncomeGrowth];
                        newValues[i] = Number(e.target.value);
                        setMiscDirectIncomeGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Other Inc - Residential</td>
                {otherIncResidentialGrowth.map((value, i) => (
                  <td key={`total-other-inc-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...otherIncResidentialGrowth];
                        newValues[i] = Number(e.target.value);
                        setOtherIncResidentialGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Expense Shopping - Commercial</td>
                {expenseShoppingCommercialGrowth.map((value, i) => (
                  <td key={`total-expense-shopping-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...expenseShoppingCommercialGrowth];
                        newValues[i] = Number(e.target.value);
                        setExpenseShoppingCommercialGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Rental & Other Income</td>
                {rentalOtherIncomeGrowth.map((value, i) => (
                  <td key={`total-rental-income-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...rentalOtherIncomeGrowth];
                        newValues[i] = Number(e.target.value);
                        setRentalOtherIncomeGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Misc Income</td>
                {miscIncomeGrowth.map((value, i) => (
                  <td key={`total-misc-income-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...miscIncomeGrowth];
                        newValues[i] = Number(e.target.value);
                        setMiscIncomeGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>

              {/* Expenses Section */}
              <tr>
                <td colSpan={19} className="font-medium pt-4">Expenses</td>
              </tr>
              <tr>
                <td className="px-2">Total Payroll & Benefits</td>
                {payrollBenefitsGrowth.map((value, i) => (
                  <td key={`payroll-benefits-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...payrollBenefitsGrowth];
                        newValues[i] = Number(e.target.value);
                        setPayrollBenefitsGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Repairs & Maintenance</td>
                {repairsMaintenanceGrowth.map((value, i) => (
                  <td key={`repairs-maintenance-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...repairsMaintenanceGrowth];
                        newValues[i] = Number(e.target.value);
                        setRepairsMaintenanceGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Outside Services</td>
                {outsideServicesGrowth.map((value, i) => (
                  <td key={`outside-services-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...outsideServicesGrowth];
                        newValues[i] = Number(e.target.value);
                        setOutsideServicesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Make - Ready / Redecorating</td>
                {makeReadyGrowth.map((value, i) => (
                  <td key={`make-ready-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...makeReadyGrowth];
                        newValues[i] = Number(e.target.value);
                        setMakeReadyGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Recreational Amenities</td>
                {recreationalAmenitiesGrowth.map((value, i) => (
                  <td key={`recreational-amenities-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...recreationalAmenitiesGrowth];
                        newValues[i] = Number(e.target.value);
                        setRecreationalAmenitiesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Contract Services</td>
                {contractServicesGrowth.map((value, i) => (
                  <td key={`contract-services-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...contractServicesGrowth];
                        newValues[i] = Number(e.target.value);
                        setContractServicesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Corporate Housing Expense</td>
                {corporateHousingGrowth.map((value, i) => (
                  <td key={`corporate-housing-expense-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...corporateHousingGrowth];
                        newValues[i] = Number(e.target.value);
                        setCorporateHousingGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Guest Suite Expense</td>
                {guestSuiteGrowth.map((value, i) => (
                  <td key={`guest-suite-expense-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...guestSuiteGrowth];
                        newValues[i] = Number(e.target.value);
                        setGuestSuiteGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Food Service Expense</td>
                {foodServiceGrowth.map((value, i) => (
                  <td key={`food-service-expense-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...foodServiceGrowth];
                        newValues[i] = Number(e.target.value);
                        setFoodServiceGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Advertising / Marketing / Promotions</td>
                {advertisingMarketingGrowth.map((value, i) => (
                  <td key={`advertising-marketing-promotions-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...advertisingMarketingGrowth];
                        newValues[i] = Number(e.target.value);
                        setAdvertisingMarketingGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Office Expenses</td>
                {officeExpensesGrowth.map((value, i) => (
                  <td key={`office-expenses-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...officeExpensesGrowth];
                        newValues[i] = Number(e.target.value);
                        setOfficeExpensesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Other General & Administrative</td>
                {otherGeneralAdminGrowth.map((value, i) => (
                  <td key={`other-general-administrative-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...otherGeneralAdminGrowth];
                        newValues[i] = Number(e.target.value);
                        setOtherGeneralAdminGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total General & Administrative</td>
                {generalAdminGrowth.map((value, i) => (
                  <td key={`general-administrative-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...generalAdminGrowth];
                        newValues[i] = Number(e.target.value);
                        setGeneralAdminGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Utilities</td>
                {utilitiesGrowth.map((value, i) => (
                  <td key={`utilities-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...utilitiesGrowth];
                        newValues[i] = Number(e.target.value);
                        setUtilitiesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Property</td>
                {propertyGrowth.map((value, i) => (
                  <td key={`property-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...propertyGrowth];
                        newValues[i] = Number(e.target.value);
                        setPropertyGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Recoverable Operating Expenses</td>
                {recoverableOpExpGrowth.map((value, i) => (
                  <td key={`recoverable-operating-expenses-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...recoverableOpExpGrowth];
                        newValues[i] = Number(e.target.value);
                        setRecoverableOpExpGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Routine Replacement Expense</td>
                {routineReplacementGrowth.map((value, i) => (
                  <td key={`routine-replacement-expense-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...routineReplacementGrowth];
                        newValues[i] = Number(e.target.value);
                        setRoutineReplacementGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Capital / Renovation Expense</td>
                {capitalRenovationGrowth.map((value, i) => (
                  <td key={`capital-renovation-expense-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...capitalRenovationGrowth];
                        newValues[i] = Number(e.target.value);
                        setCapitalRenovationGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Other Non-Operating Expenses</td>
                {otherNonOpExpGrowth.map((value, i) => (
                  <td key={`other-non-operating-expenses-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...otherNonOpExpGrowth];
                        newValues[i] = Number(e.target.value);
                        setOtherNonOpExpGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Other Expenses</td>
                {otherExpensesGrowth.map((value, i) => (
                  <td key={`other-expenses-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...otherExpensesGrowth];
                        newValues[i] = Number(e.target.value);
                        setOtherExpensesGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Total Partnership/Owner Expenses</td>
                {partnershipOwnerGrowth.map((value, i) => (
                  <td key={`partnership-owner-expenses-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...partnershipOwnerGrowth];
                        newValues[i] = Number(e.target.value);
                        setPartnershipOwnerGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-2">Debt Service - Ground Lease</td>
                {debtServiceGroundLeaseGrowth.map((value, i) => (
                  <td key={`debt-service-ground-lease-${i}`} className="px-2">
                    <Input
                      type="number"
                      step="0.01"
                      className="bg-blue-50 w-20"
                      value={value}
                      onChange={(e) => {
                        const newValues = [...debtServiceGroundLeaseGrowth];
                        newValues[i] = Number(e.target.value);
                        setDebtServiceGroundLeaseGrowth(newValues);
                      }}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
} 