import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";

function Quote() {
  const [planType, setPlanType] = useState("individual");
  const [age, setAge] = useState(30);
  const [coverageLevel, setCoverageLevel] = useState("standard");
  const [dependents, setDependents] = useState(0);
  const [deductible, setDeductible] = useState("medium");
  const [preexisting, setPreexisting] = useState("none");
  const [discounts, setDiscounts] = useState({
    wellness: false,
    nonSmoker: false,
    employer: false,
  });

  // Health Insurance Premium Calculation
  function calculateQuote() {
    let base = 200; // Base monthly premium

    // Plan type multiplier
    const planMultipliers = {
      individual: 1.0,
      family: 2.5,
      group: 0.85,
    };
    base *= planMultipliers[planType];

    // Age factor (health insurance typically increases with age)
    if (age < 30) base *= 0.7;
    else if (age < 40) base *= 0.85;
    else if (age < 50) base *= 1.0;
    else if (age < 60) base *= 1.4;
    else base *= 2.0;

    // Coverage level
    const coverageMultipliers = {
      basic: 0.7,
      standard: 1.0,
      premium: 1.5,
    };
    base *= coverageMultipliers[coverageLevel];

    // Dependents (for family plans)
    if (planType === "family") {
      base += dependents * 150;
    }

    // Deductible impact (higher deductible = lower premium)
    const deductibleMultipliers = {
      low: 1.3,    // Low deductible = higher premium
      medium: 1.0,
      high: 0.75,  // High deductible = lower premium
    };
    base *= deductibleMultipliers[deductible];

    // Pre-existing conditions
    if (preexisting === "minor") base += 50;
    if (preexisting === "moderate") base += 120;
    if (preexisting === "major") base += 250;

    // Discounts
    if (discounts.wellness) base -= 20;
    if (discounts.nonSmoker) base -= 30;
    if (discounts.employer) base *= 0.9; // 10% employer contribution

    return Math.max(base, 100).toFixed(2);
  }

  return (
    <div className="space-y-10">
      <SectionHeader
        label="Health Insurance Quote"
        title="Get Your Health Insurance Estimate"
        description="Get a personalized estimate for your health insurance premium based on your coverage needs and preferences."
      />

      <div className="space-y-6">
        {/* Plan Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 font-heading">
            Plan Type
          </label>
          <select
            value={planType}
            onChange={(e) => setPlanType(e.target.value)}
            className="border border-revive-soft rounded-lg px-4 py-2 w-full bg-white focus:border-revive-teal focus:ring-2 focus:ring-revive-teal/20 transition"
          >
            <option value="individual">Individual Plan</option>
            <option value="family">Family Plan</option>
            <option value="group">Group/Employer Plan</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 font-heading">
            Primary Applicant Age: {age} years
          </label>
          <input
            type="range"
            min="18"
            max="75"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-revive-teal"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>18</span>
            <span>75</span>
          </div>
        </div>

        {/* Coverage Level */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 font-heading">
            Coverage Level
          </label>
          <select
            value={coverageLevel}
            onChange={(e) => setCoverageLevel(e.target.value)}
            className="border border-revive-soft rounded-lg px-4 py-2 w-full bg-white focus:border-revive-teal focus:ring-2 focus:ring-revive-teal/20 transition"
          >
            <option value="basic">Basic (Essential Coverage)</option>
            <option value="standard">Standard (Comprehensive)</option>
            <option value="premium">Premium (Full Coverage)</option>
          </select>
        </div>

        {/* Dependents (for family plans) */}
        {planType === "family" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2 font-heading">
              Number of Dependents: {dependents}
            </label>
            <input
              type="range"
              min="0"
              max="5"
              value={dependents}
              onChange={(e) => setDependents(Number(e.target.value))}
              className="w-full accent-revive-teal"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0</span>
              <span>5+</span>
            </div>
          </div>
        )}

        {/* Deductible */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 font-heading">
            Annual Deductible Preference
          </label>
          <select
            value={deductible}
            onChange={(e) => setDeductible(e.target.value)}
            className="border border-revive-soft rounded-lg px-4 py-2 w-full bg-white focus:border-revive-teal focus:ring-2 focus:ring-revive-teal/20 transition"
          >
            <option value="low">Low ($500-$1,000) - Higher Premium</option>
            <option value="medium">Medium ($2,000-$3,000) - Balanced</option>
            <option value="high">High ($5,000+) - Lower Premium</option>
          </select>
        </div>

        {/* Pre-existing Conditions */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 font-heading">
            Pre-existing Conditions
          </label>
          <select
            value={preexisting}
            onChange={(e) => setPreexisting(e.target.value)}
            className="border border-revive-soft rounded-lg px-4 py-2 w-full bg-white focus:border-revive-teal focus:ring-2 focus:ring-revive-teal/20 transition"
          >
            <option value="none">None</option>
            <option value="minor">Minor (Controlled)</option>
            <option value="moderate">Moderate</option>
            <option value="major">Major</option>
          </select>
        </div>

        {/* Discounts */}
        <div className="space-y-3 p-4 bg-revive-tint rounded-xl border border-revive-soft">
          <p className="text-sm font-medium text-revive-green font-heading">Eligible Discounts</p>

          <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer hover:text-revive-green transition-colors">
            <input
              type="checkbox"
              checked={discounts.wellness}
              onChange={(e) =>
                setDiscounts({ ...discounts, wellness: e.target.checked })
              }
              className="w-4 h-4 accent-revive-teal"
            />
            <span className="font-body">Wellness Program Participation</span>
          </label>

          <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer hover:text-revive-green transition-colors">
            <input
              type="checkbox"
              checked={discounts.nonSmoker}
              onChange={(e) =>
                setDiscounts({ ...discounts, nonSmoker: e.target.checked })
              }
              className="w-4 h-4 accent-revive-teal"
            />
            <span className="font-body">Non-Smoker Discount</span>
          </label>

          <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer hover:text-revive-green transition-colors">
            <input
              type="checkbox"
              checked={discounts.employer}
              onChange={(e) =>
                setDiscounts({ ...discounts, employer: e.target.checked })
              }
              className="w-4 h-4 accent-revive-teal"
            />
            <span className="font-body">Employer Contribution (10% off)</span>
          </label>
        </div>
      </div>

      {/* Output */}
      <div className="p-8 border border-revive-soft rounded-2xl bg-gradient-to-br from-revive-soft to-white w-full text-center shadow-sm">
        <p className="text-sm text-slate-600 font-body">Estimated Monthly Premium</p>
        <h2 className="text-4xl font-bold text-revive-green mt-2 font-heading">
          ${calculateQuote()}
        </h2>
        <p className="text-xs text-slate-500 mt-2 font-body">
          *This is an estimate. Final premium may vary based on underwriting.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button>Get Full Quote</Button>
          <Button variant="outline">Compare Plans</Button>
        </div>
      </div>
    </div>
  );
}

export default Quote;

