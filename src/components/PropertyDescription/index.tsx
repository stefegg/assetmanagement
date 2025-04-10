'use client'

import { useWizard } from '@/context/WizardContext'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

export function PropertyDescription() {
  const {
    propertyName,
    address,
    city,
    state,
    isr,
    submarket,
    productType,
    goDataId,
    yardiCode1,
    yardiCode2,
    marketRateUnits,
    affordableUnits,
    totalNRSF,
    grossLandArea,
    netLandArea,
    investmentVehicle,
    setPropertyName,
    setAddress,
    setCity,
    setState,
    setIsr,
    setSubmarket,
    setProductType,
    setGoDataId,
    setYardiCode1,
    setYardiCode2,
    setMarketRateUnits,
    setAffordableUnits,
    setTotalNRSF,
    setGrossLandArea,
    setNetLandArea,
    setInvestmentVehicle,
  } = useWizard()

  // Calculate total units
  const totalUnits = marketRateUnits + affordableUnits
  
  // Calculate average NRSF per unit
  const avgNRSFPerUnit = totalUnits > 0 ? Math.round(totalNRSF / totalUnits) : 0

  return (
    <Card className="p-6">
      <h2 className="text-lg font-bold mb-4">Property Description</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <Label>Property Name</Label>
            <Input
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>City | ST</Label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-blue-50"
              />
            </div>
            <div>
              <Label>&nbsp;</Label>
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-blue-50"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>ISR MSA | Submarket</Label>
              <Input
                value={isr}
                onChange={(e) => setIsr(e.target.value)}
                className="bg-blue-50"
              />
            </div>
            <div>
              <Label>&nbsp;</Label>
              <Input
                value={submarket}
                onChange={(e) => setSubmarket(e.target.value)}
                className="bg-blue-50"
              />
            </div>
          </div>
          <div>
            <Label>Product Type</Label>
            <Input
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>GO data ID</Label>
            <Input
              value={goDataId}
              onChange={(e) => setGoDataId(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Yardi Code 1</Label>
            <Input
              value={yardiCode1}
              onChange={(e) => setYardiCode1(e.target.value)}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Yardi Code 2</Label>
            <Input
              value={yardiCode2}
              onChange={(e) => setYardiCode2(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <div>
            <Label>Residential</Label>
            <div className="h-10 flex items-center">Residential</div>
          </div>
          <div>
            <Label>Market Rate Units</Label>
            <Input
              type="number"
              value={marketRateUnits}
              onChange={(e) => setMarketRateUnits(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Affordable Units</Label>
            <Input
              type="number"
              value={affordableUnits}
              onChange={(e) => setAffordableUnits(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Number of Units</Label>
            <div className="h-10 flex items-center">{totalUnits}</div>
          </div>
          <div>
            <Label>Total NRSF</Label>
            <Input
              type="number"
              value={totalNRSF}
              onChange={(e) => setTotalNRSF(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Avg. NRSF / Unit</Label>
            <div className="h-10 flex items-center">{avgNRSFPerUnit}</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <Label>Gross Land Area (Acres)</Label>
            <Input
              type="number"
              value={grossLandArea}
              onChange={(e) => setGrossLandArea(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Net Land Area (Acres)</Label>
            <Input
              type="number"
              value={netLandArea}
              onChange={(e) => setNetLandArea(Number(e.target.value))}
              className="bg-blue-50"
            />
          </div>
          <div>
            <Label>Loan Abstract</Label>
            <div className="h-10 flex items-center text-blue-600 underline cursor-pointer">
              Link
            </div>
          </div>
          <div>
            <Label>Investment Vehicle</Label>
            <Input
              value={investmentVehicle}
              onChange={(e) => setInvestmentVehicle(e.target.value)}
              className="bg-blue-50"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
