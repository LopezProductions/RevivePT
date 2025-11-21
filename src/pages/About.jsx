import SectionHeader from "../components/ui/SectionHeader.jsx";

function About() {
  return (
    <div className="space-y-10">
      <SectionHeader
        label="About Us"
        title="Built on Care. Driven by Compassion."
        description="ShieldCare has helped over 12,000 families access quality healthcare and wellness services. Our mission is simple: provide health coverage that makes sense, with transparent pricing and compassionate support every step of the way."
      />

      <p className="text-sm leading-relaxed font-body text-neutral-dark">
        For over a decade, we've partnered with top-rated healthcare providers to bring our clients
        transparent pricing, flexible coverage options, and stress-free access to care.
        Whether you're an individual, a growing family, or a small business, our dedicated team
        helps you navigate every step of your health journey with clarity and confidence.
      </p>

      <p className="text-sm leading-relaxed font-body text-neutral-dark">
        Our licensed healthcare advisors are committed to providing honest 
        recommendations—not upsells. We believe healthcare should support you, 
        not confuse you. Your health and wellness are our top priorities.
      </p>
    </div>
  );
}

export default About;
