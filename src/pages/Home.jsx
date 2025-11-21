import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import CheckoutButton from "../components/ui/CheckoutButton.jsx";

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Insurance That Protects What Matters Most
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
          From home and auto to life and business coverage — SafeShield Insurance 
          helps you safeguard your future with clarity, transparency, and affordable plans.
        </p>
        <Button className="mt-4">Get a Free Quote</Button>
      </section>

      {/* Services Overview */}
      <section>
        <SectionHeader 
          label="Our Coverage"
          title="Comprehensive Insurance Plans"
          description="Clear, flexible protection designed to match your lifestyle and needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card title="Home Insurance">
            Protect your home from fire, theft, water damage, and unexpected events.
          </Card>
          <Card title="Auto Insurance">
            Affordable coverage for daily drivers, families, and commercial vehicles.
          </Card>
          <Card title="Life Insurance">
            Secure your family's financial future with flexible life plans.
          </Card>
          <Card title="Business Insurance">
            Coverage for freelancers, small businesses, and enterprises.
          </Card>
          <Card title="Health Insurance">
            Simple, direct health coverage with nationwide provider access.
          </Card>
          <Card title="Travel Insurance">
            Protect your trips, luggage, and health abroad with ease.
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-16">
        <SectionHeader
          label="Pricing"
          title="Choose the Right Package"
          description="Launch today with the basic template or upgrade to the full premium experience."
        />

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <CheckoutButton tier="basic" />
          <CheckoutButton tier="premium" />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="text-xl font-semibold text-slate-900">Need help choosing the right plan?</h2>
        <p className="text-slate-600 text-sm mt-2">Speak with a licensed insurance advisor.</p>
        <Button className="mt-4">Schedule a Call</Button>
      </section>
    </div>
  );
}

export default Home;
