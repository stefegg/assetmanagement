'use client'

import React, { useEffect, ChangeEvent } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useWizard } from '@/context/WizardContext';

const YEARS = Array.from({ length: 11 }, (_, i) => 2025 + i);

export const ValuationAssumptions = () => {
  const { capRates, setCapRates, capRateAdjustmentGroundLease, setCapRateAdjustmentGroundLease } = useWizard();

  useEffect(() => {
    if (!capRates?.residential?.length) {
      const initialResidential = YEARS.map(year => ({
        month: 1,
        year,
        baseRate: year === 2025 ? 4.50 : 0,
        hedgePercent: 0,
        hedgeBps: 0,
        totalHedge: 0,
        appliedCapRate: 0
      }));

      setCapRates({
        residential: initialResidential,
        commercial: {
          spotCapRateDate: '',
          spotCapRate: 0
        }
      });
    }
  }, []);

  const updateResidentialCapRate = (index: number, field: 'baseRate' | 'hedgeBps', value: string | number) => {
    if (!capRates?.residential) return;

    const newResidential = [...capRates.residential];
    newResidential[index] = {
      ...newResidential[index],
      [field]: Number(value),
      totalHedge: field === 'hedgeBps' ? Number(value) : newResidential[index].hedgeBps,
      appliedCapRate: field === 'baseRate' ? Number(value) + (newResidential[index].hedgeBps / 100) : newResidential[index].baseRate + (Number(value) / 100)
    };

    setCapRates({
      ...capRates,
      residential: newResidential
    });
  };

  const updateCommercialCapRate = (field: 'spotCapRateDate' | 'spotCapRate', value: string | number) => {
    if (!capRates?.commercial) return;

    setCapRates({
      ...capRates,
      commercial: {
        ...capRates.commercial,
        [field]: value
      }
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Month</th>
              <th className="text-left">Year</th>
              <th className="text-right">Base Rate</th>
              <th className="text-right">Hedge %</th>
              <th className="text-right">Hedge bps</th>
              <th className="text-right">Total Hedge</th>
              <th className="text-right">Applied Cap Rate</th>
            </tr>
          </thead>
          <tbody>
            {capRates?.residential?.map((rate, index) => (
              <tr key={rate.year}>
                <td>{rate.month}</td>
                <td>{rate.year}</td>
                <td>
                  <Input
                    type="number"
                    value={rate.baseRate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateResidentialCapRate(index, 'baseRate', e.target.value)}
                    className="bg-blue-50"
                    step={0.01}
                  />
                </td>
                <td className="text-right">{rate.hedgePercent}%</td>
                <td>
                  <Input
                    type="number"
                    value={rate.hedgeBps}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateResidentialCapRate(index, 'hedgeBps', e.target.value)}
                    className="bg-blue-50"
                    step={1}
                  />
                </td>
                <td className="text-right">{rate.totalHedge}</td>
                <td className="text-right">{rate.appliedCapRate.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="space-y-4">
          <h3 className="font-semibold">Cap Rate Adjustment for Ground Lease</h3>
          <div className="flex space-x-4">
            <div className="flex items-center gap-2">
              <label>
                bps
                <Input
                  type="number"
                  value={capRateAdjustmentGroundLease?.bps || 0}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCapRateAdjustmentGroundLease({ 
                    ...capRateAdjustmentGroundLease, 
                    bps: Number(e.target.value) 
                  })}
                  className="bg-blue-50"
                  step={1}
                />
              </label>
            </div>
            <div className="flex items-center gap-2">
              <label>
                %
                <Input
                  type="number"
                  value={capRateAdjustmentGroundLease?.percent || 0}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCapRateAdjustmentGroundLease({ 
                    ...capRateAdjustmentGroundLease, 
                    percent: Number(e.target.value) 
                  })}
                  className="bg-blue-50"
                  step={0.01}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Commercial</h3>
          <div className="flex space-x-4">
            <div className="flex items-center gap-2">
              <label>
                Spot Cap Rate as of
                <Input
                  type="date"
                  value={capRates?.commercial?.spotCapRateDate || ''}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updateCommercialCapRate('spotCapRateDate', e.target.value)}
                  className="bg-blue-50"
                />
              </label>
            </div>
            <div className="flex items-center gap-2">
              <label>
                Spot Cap Rate
                <Input
                  type="number"
                  value={capRates?.commercial?.spotCapRate || 0}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updateCommercialCapRate('spotCapRate', Number(e.target.value))}
                  className="bg-blue-50"
                  step={0.01}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}; 