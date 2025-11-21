import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

function Services() {
  return (
    <div className="space-y-12">
      <SectionHeader
        label="Our Services"
        title="Comprehensive Physical Therapy Services"
        description="Evidence-based treatment programs designed to restore your movement, reduce pain, and help you return to the activities you love."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="text-center">
        <Button>Book an Evaluation</Button>
      </div>
    </div>
  );
}

export default Services;
