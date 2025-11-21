import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import CheckoutButton from "../components/ui/CheckoutButton.jsx";

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-revive-soft to-white py-24 rounded-3xl">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-revive-green">
            Restore Your Motion.<br />Reclaim Your Life.
          </h1>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-body">
            Personalized physical therapy designed to heal injuries, improve mobility,
            and build long-term strength — so you can get back to what you love.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-revive-teal text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-revive-green transition font-body"
            >
              Book Evaluation
            </a>
            <a
              href="#"
              className="bg-revive-peach text-revive-green px-8 py-3 rounded-full font-semibold shadow-sm hover:bg-revive-tint transition font-body"
            >
              Free Movement Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <SectionHeader 
          label="Our Services"
          title="Comprehensive Physical Therapy Services"
          description="Evidence-based treatment programs designed to restore your movement, reduce pain, and help you return to the activities you love."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Sports Injury Rehab</h3>
            <p className="text-gray-600 mt-2 font-body">
              Evidence-based rehab programs to restore strength and mobility after injury.
            </p>
          </div>
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Post-Surgical Rehabilitation</h3>
            <p className="text-gray-600 mt-2 font-body">
              Specialized recovery programs to help you heal safely and effectively after surgery.
            </p>
          </div>
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Chronic Pain Management</h3>
            <p className="text-gray-600 mt-2 font-body">
              Comprehensive approaches to reduce pain and improve your quality of life.
            </p>
          </div>
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Mobility & Movement Training</h3>
            <p className="text-gray-600 mt-2 font-body">
              Improve flexibility, balance, and functional movement patterns for daily activities.
            </p>
          </div>
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Geriatric Physical Therapy</h3>
            <p className="text-gray-600 mt-2 font-body">
              Gentle, personalized care to maintain independence and prevent falls as you age.
            </p>
          </div>
          <div className="bg-white border border-revive-soft p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-heading text-xl text-revive-green font-semibold">Workplace Ergonomics</h3>
            <p className="text-gray-600 mt-2 font-body">
              Ergonomic assessments and interventions to prevent work-related injuries and discomfort.
            </p>
          </div>
        </div>
      </section>

      {/* Template Purchase Section */}
      <section className="mt-16 bg-gradient-to-br from-revive-tint to-revive-soft p-8 rounded-3xl border border-revive-soft">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            label="Website Template"
            title="Buy This RevivePT Template"
            description="This is a fully functional website template ready for your physical therapy practice. All buttons and features are live and working. After purchase, you'll complete an intake form and receive your customized website within 48 hours."
          />
          
          <div className="mt-8 p-6 bg-white rounded-2xl border border-revive-soft shadow-sm">
            <div className="space-y-4 mb-6">
              <p className="text-sm text-slate-600 font-body">
                <strong className="text-revive-green">✓ Fully Functional:</strong> All buttons, forms, and navigation are live and working
              </p>
              <div className="bg-revive-soft p-4 rounded-xl border border-revive-aqua/30">
                <p className="text-sm font-semibold text-revive-green font-heading mb-2">How It Works:</p>
                <ol className="text-sm text-slate-700 font-body text-left space-y-2 list-decimal list-inside">
                  <li>Purchase your template package below</li>
                  <li>Complete the intake form with your business details</li>
                  <li>Receive your customized website within <strong className="text-revive-green">48 hours</strong> after intake completion</li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CheckoutButton tier="basic" />
              <CheckoutButton tier="premium" />
            </div>
            <p className="text-xs text-slate-500 mt-4 font-body">
              After purchase, you'll receive an intake form to provide your business information. Your website will be ready in 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="text-xl font-heading font-semibold text-revive-green">Ready to start your recovery journey?</h2>
        <p className="font-body text-slate-700 text-sm mt-2">Speak with one of our licensed physical therapists to discuss your treatment options.</p>
        <Button className="mt-4">Schedule a Consultation</Button>
        <p className="text-xs text-slate-400 mt-4 font-body italic">
          *Example content - customize with your own services and contact information
        </p>
      </section>
    </div>
  );
}

export default Home;
