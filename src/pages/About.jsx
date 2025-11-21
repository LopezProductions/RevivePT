import SectionHeader from "../components/ui/SectionHeader.jsx";

function About() {
  return (
    <div className="space-y-10">
      <SectionHeader
        label="About Us"
        title="Built on Trust. Driven by Protection."
        description="SafeShield Insurance has helped over 12,000 families protect their homes, vehicles, and financial futures. Our mission is simple: provide insurance that makes sense, without the hidden fees or confusing fine print."
      />

      <p className="text-sm leading-relaxed">
        For over a decade, we've worked with top-rated carriers to bring our clients
        transparent pricing, flexible coverage, and stress-free claims support.
        Whether you're a first-time homeowner or a growing business, our advisors
        help you navigate every step of the process with clarity and confidence.
      </p>

      <p className="text-sm leading-relaxed">
        Our dedicated team of licensed experts is committed to providing honest 
        recommendations—not upsells. We believe insurance should protect you, 
        not confuse you.
      </p>
    </div>
  );
}

export default About;
