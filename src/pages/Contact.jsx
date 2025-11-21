import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";

function Contact() {
  return (
    <div className="space-y-10">
      <SectionHeader
        label="Contact Us"
        title="Speak With an Advisor"
        description="Have questions about coverage? Our licensed experts are here to help."
      />

      <form className="space-y-6 text-sm">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-slate-300 rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-slate-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-slate-300 rounded-lg px-4 py-2 w-full"
        />
        <textarea
          placeholder="How can we help?"
          className="border border-slate-300 rounded-lg px-4 py-2 w-full h-28"
        />
        <Button className="w-full sm:w-auto">Submit Inquiry</Button>
      </form>
    </div>
  );
}

export default Contact;
