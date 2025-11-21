import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

function Services() {
  return (
    <div className="space-y-12">
      <SectionHeader
        label="Our Services"
        title="Health & Wellness Plans"
        description="Comprehensive healthcare solutions designed to support your well-being at every stage of life."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="text-center">
        <Button>Request a Quote</Button>
      </div>
    </div>
  );
}

export default Services;
