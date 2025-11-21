import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";

function Quote() {
  const [type, setType] = useState("home");
  const [coverage, setCoverage] = useState(200000);
  const [age, setAge] = useState(30);
  const [history, setHistory] = useState("clean");
  const [discounts, setDiscounts] = useState({
    bundling: false,
    safeDriver: false,
    securitySystem: false,
  });

  // Premium Calculation
  function calculateQuote() {
    let base = 25;

    // Type multiplier
    const typeMultiplier = {
      home: 0.0004,
      auto: 0.0009,
      life: 0.0007,
      business: 0.0005,
    };

    let cost = base + coverage * typeMultiplier[type];

    // Age risk factor
    if (type === "auto") {
      if (age < 25) cost += 30;
      else if (age < 40) cost += 10;
    }

    // History
    if (history === "minor") cost += 15;
    if (history === "major") cost += 40;

    // Discounts
    if (discounts.bundling) cost -= 10;
    if (discounts.safeDriver) cost -= 8;
    if (discounts.securitySystem) cost -= 12;

    return Math.max(cost, 15).toFixed(2);
  }

  return (
    <div className="space-y-10">
      <SectionHeader
        label="Quote Tool"
        title="Estimate Your Monthly Premium"
        description="This calculator provides a quick estimate based on common coverage and risk factors."
      />

      <div className="space-y-6">
        {/* Insurance Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Insurance Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 w-full bg-white"
          >
            <option value="home">Home Insurance</option>
            <option value="auto">Auto Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="business">Business Insurance</option>
          </select>
        </div>

        {/* Coverage Slider */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Coverage Amount: ${coverage.toLocaleString()}
          </label>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="50000"
            value={coverage}
            onChange={(e) => setCoverage(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Age (Auto + Life logic) */}
        {(type === "auto" || type === "life") && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Age: {age}
            </label>
            <input
              type="range"
              min="18"
              max="75"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        )}

        {/* Driving / Claim History */}
        {type === "auto" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Driving History
            </label>
            <select
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              className="border border-slate-300 rounded-lg px-4 py-2 w-full"
            >
              <option value="clean">Clean Record</option>
              <option value="minor">Minor Violations</option>
              <option value="major">Major Violations</option>
            </select>
          </div>
        )}

        {/* Discounts */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700">Eligible Discounts</p>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={discounts.bundling}
              onChange={(e) =>
                setDiscounts({ ...discounts, bundling: e.target.checked })
              }
            />
            Bundling (Home + Auto)
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={discounts.safeDriver}
              onChange={(e) =>
                setDiscounts({ ...discounts, safeDriver: e.target.checked })
              }
            />
            Safe Driver Discount
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={discounts.securitySystem}
              onChange={(e) =>
                setDiscounts({ ...discounts, securitySystem: e.target.checked })
              }
            />
            Home Security System
          </label>
        </div>
      </div>

      {/* Output */}
      <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 w-full text-center">
        <p className="text-sm text-slate-500">Estimated Monthly Premium</p>
        <h2 className="text-3xl font-bold text-blue-600 mt-2">
          ${calculateQuote()}
        </h2>

        <Button className="mt-4">Start Application</Button>
      </div>
    </div>
  );
}

export default Quote;

