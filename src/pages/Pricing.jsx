import SectionHeader from "../components/ui/SectionHeader.jsx";
import CheckoutButton from "../components/ui/CheckoutButton.jsx";

function Pricing() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <SectionHeader
        label="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the package that fits your project. No hidden fees, no complexity."
      />

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Package */}
        <div className="border border-slate-200 rounded-2xl p-8 shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-slate-900">Basic Template</h3>
          <p className="text-sm text-slate-600 mt-1">Perfect for quick launches</p>

          <p className="text-4xl font-bold text-blue-600 mt-4">$50</p>

          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>✔ Full React + Vite Template</li>
            <li>✔ Home / About / Services / Contact Pages</li>
            <li>✔ Clean SEO-Friendly Design</li>
            <li>✔ Responsive Mobile Layout</li>
            <li>✔ 1-Click Setup Script</li>
            <li className="line-through text-red-400">✖ Custom Services Page</li>
            <li className="line-through text-red-400">✖ Custom Branding</li>
            <li className="line-through text-red-400">✖ Integrations Setup</li>
          </ul>

          <div className="mt-6">
            <CheckoutButton tier="basic" />
          </div>
        </div>

        {/* Premium Package */}
        <div className="border border-blue-200 rounded-2xl p-8 shadow-lg bg-blue-50">
          <h3 className="text-xl font-semibold text-slate-900">Premium Package</h3>
          <p className="text-sm text-slate-600 mt-1">Best for agencies & businesses who want the full buildout</p>

          <p className="text-4xl font-bold text-blue-700 mt-4">$250</p>

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>✔ Everything in Basic +</li>
            <li>✔ Fully Customized Services Page</li>
            <li>✔ Custom Brand Colors</li>
            <li>✔ Custom Copywriting</li>
            <li>✔ Integrations Setup (Email, Forms, CRM)</li>
            <li>✔ One Revision Included</li>
            <li>✔ Priority Setup</li>
          </ul>

          <div className="mt-6">
            <CheckoutButton tier="premium" />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <section>
        <SectionHeader
          label="Comparison"
          title="What's Included"
        />

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="text-left p-3">Feature</th>
                <th className="text-center p-3">Basic</th>
                <th className="text-center p-3">Premium</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Full Template</td>
                <td className="text-center">✔</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Custom Services Page</td>
                <td className="text-center">✖</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Brand Color Integration</td>
                <td className="text-center">✖</td>
                <td className="text-center">✔</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">CRM + Email Setup</td>
                <td className="text-center">✖</td>
                <td className="text-center">✔</td>
              </tr>
              <tr>
                <td className="p-3">Revisions</td>
                <td className="text-center">0</td>
                <td className="text-center">1 Included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-14 space-y-8">
        <SectionHeader label="Testimonials" title="What Clients Say" />

        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <p className="text-slate-700 italic">
              "Clean, fast, and professional. I used this template for my insurance agency website — saved me days of work."
            </p>
            <p className="mt-3 font-semibold text-slate-900">— J. Martinez</p>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <p className="text-slate-700 italic">
              "The premium package was 100% worth it. I got custom branding + integrations done without lifting a finger."
            </p>
            <p className="mt-3 font-semibold text-slate-900">— A. Simmons</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />

        <div className="mt-6 space-y-4 text-sm">
          <details className="border border-slate-200 rounded-lg p-4 bg-white">
            <summary className="font-semibold cursor-pointer">Do I need hosting?</summary>
            <p className="mt-2 text-slate-600">
              No — you can deploy this on Netlify, Vercel, or any static hosting provider.
            </p>
          </details>

          <details className="border border-slate-200 rounded-lg p-4 bg-white">
            <summary className="font-semibold cursor-pointer">Can you help me customize it?</summary>
            <p className="mt-2 text-slate-600">
              Yes — the $250 premium package includes customization.
            </p>
          </details>

          <details className="border border-slate-200 rounded-lg p-4 bg-white">
            <summary className="font-semibold cursor-pointer">Can I add more pages?</summary>
            <p className="mt-2 text-slate-600">
              Absolutely — add as many as you want with React Router.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Pricing;


