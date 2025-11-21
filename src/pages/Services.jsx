import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

function Services() {
  return (
    <div className="space-y-12">
      <SectionHeader
        label="Coverage Plans"
        title="Our Insurance Services"
        description="Choose from a wide range of personal and commercial insurance options."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Home Insurance">
          Safeguard your home from fire, theft, storms, and more.
        </Card>
        <Card title="Auto Insurance">
          Affordable coverage for drivers of all experience levels.
        </Card>
        <Card title="Life Insurance">
          Protect your family's financial future.
        </Card>
        <Card title="Business Liability">
          Peace of mind for business owners and entrepreneurs.
        </Card>
        <Card title="Health Plans">
          Simple, flexible health coverage for you and your family.
        </Card>
        <Card title="Travel Protection">
          Coverage for trips, cancellations, and emergencies abroad.
        </Card>
      </div>

      <div className="text-center">
        <Button>Request a Quote</Button>
      </div>
    </div>
  );
}

export default Services;
