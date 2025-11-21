import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import CheckoutButton from "../components/ui/CheckoutButton.jsx";

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6 bg-gradient-to-br from-primary-light to-white rounded-3xl p-12">
        <h1 className="text-4xl font-heading font-bold text-primary-dark">
          Your Health. Your Care. Done Right.
        </h1>
        <p className="font-body text-neutral-dark max-w-2xl mx-auto text-sm leading-relaxed">
          Compassionate, affordable coverage for individuals, families, and small businesses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button className="bg-primary text-white hover:bg-primary-dark">Get a Free Quote</Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary-light">Schedule a Consultation</Button>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <SectionHeader 
          label="Our Services"
          title="Comprehensive Health & Wellness Plans"
          description="Compassionate care designed to support your health journey at every stage of life."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Health Insurance Plans</h3>
            <p className="text-neutral-dark mt-2 font-body">Flexible coverage options designed for every stage of life.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Family & Group Coverage</h3>
            <p className="text-neutral-dark mt-2 font-body">Comprehensive plans that protect your entire family.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Dental & Vision Benefits</h3>
            <p className="text-neutral-dark mt-2 font-body">Complete oral and vision care for optimal health.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Preventative Care Programs</h3>
            <p className="text-neutral-dark mt-2 font-body">Proactive wellness programs to keep you healthy.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Wellness & Nutrition Support</h3>
            <p className="text-neutral-dark mt-2 font-body">Guidance and resources for a healthier lifestyle.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-light">
            <h3 className="text-primary-dark font-heading font-semibold">Telehealth Consultations</h3>
            <p className="text-neutral-dark mt-2 font-body">Convenient virtual care from the comfort of your home.</p>
          </div>
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
        <h2 className="text-xl font-heading font-semibold text-primary-dark">Need help choosing the right plan?</h2>
        <p className="font-body text-neutral-dark text-sm mt-2">Speak with a licensed healthcare advisor.</p>
        <Button className="mt-4">Schedule a Consultation</Button>
      </section>
    </div>
  );
}

export default Home;
