"use client";

import { useState } from "react";

interface ShippingRate {
  service: string;
  price: number;
  estimatedDays: string;
}

export default function ShippingCalculator() {
  const [zipCode, setZipCode] = useState("");
  const [packageType, setPackageType] = useState<'standard' | 'oversized'>('standard');
  const [rates, setRates] = useState<ShippingRate[] | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateShipping = async () => {
    if (!zipCode || zipCode.length < 5) {
      alert("Please enter a valid ZIP code");
      return;
    }

    setLoading(true);
    
    // Simulate API call - in production this would call a real shipping API
    setTimeout(() => {
      const mockRates: ShippingRate[] = packageType === 'standard' 
        ? [
            { service: 'USPS Priority Mail', price: 1850, estimatedDays: '2-3' },
            { service: 'UPS Ground', price: 2100, estimatedDays: '3-5' },
            { service: 'FedEx Ground', price: 2200, estimatedDays: '3-5' },
          ]
        : [
            { service: 'UPS Ground', price: 3500, estimatedDays: '3-5' },
            { service: 'FedEx Ground', price: 3650, estimatedDays: '3-5' },
            { service: 'Freight', price: 5200, estimatedDays: '5-7' },
          ];
      
      setRates(mockRates);
      setLoading(false);
    }, 800);
  };

  return (
    <div>
      <h3 className="text-sm tracking-widest uppercase mb-4">
        Estimate Shipping
      </h3>
      
      <div className="space-y-4">
        {/* Package Type */}
        <div>
          <label className="text-sm text-charcoal/70 block mb-2">
            Package Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPackageType('standard')}
              className={`py-2 px-4 border text-sm transition-colors ${
                packageType === 'standard'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-charcoal/20 hover:border-charcoal'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setPackageType('oversized')}
              className={`py-2 px-4 border text-sm transition-colors ${
                packageType === 'oversized'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-charcoal/20 hover:border-charcoal'
              }`}
            >
              Oversized
            </button>
          </div>
        </div>

        {/* ZIP Code Input */}
        <div>
          <label htmlFor="zipCode" className="text-sm text-charcoal/70 block mb-2">
            Destination ZIP Code
          </label>
          <div className="flex gap-3">
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="85001"
              className="flex-1 py-3 px-4 border border-charcoal/20 focus:outline-none focus:border-charcoal"
              maxLength={5}
            />
            <button
              onClick={calculateShipping}
              disabled={loading}
              className="px-6 py-3 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Calculating...' : 'Calculate'}
            </button>
          </div>
        </div>

        {/* Shipping Rates */}
        {rates && (
          <div className="mt-6 pt-6 border-t border-charcoal/10">
            <p className="text-sm tracking-widest uppercase mb-4 text-charcoal/70">
              Available Options
            </p>
            <div className="space-y-3">
              {rates.map((rate, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 border border-charcoal/10"
                >
                  <div>
                    <p className="font-medium">{rate.service}</p>
                    <p className="text-sm text-charcoal/60">
                      {rate.estimatedDays} business days
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(rate.price / 100).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
