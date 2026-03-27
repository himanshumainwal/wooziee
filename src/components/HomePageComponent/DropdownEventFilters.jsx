import { useState } from "react";
import Dropdown from "./Dropdown";

const EventFilters = () => {
  const [openIndex, setOpenIndex] = useState(null); // Only one open at a time

  return (
    <section className="flex justify-center px-4 md:px-16 mt-[-40px] relative">
      <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl w-full max-w-5xl p-6 flex flex-col md:flex-row gap-6 md:gap-8 shadow-lg border border-white/10">
        <Dropdown
          label="Search Event"
          value="Event Name"
          options={[
            "Most Popular Event",
            "Music Shows",
            "Stand-up Comedy",
            "Bollywood Nights",
            "Tech Events",
          ]}
          isOpen={openIndex === 0}
          setOpenIndex={setOpenIndex}
          index={0}
        />
        <Dropdown
          label="Place"
          value="Mumbai"
          options={["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"]}
          isOpen={openIndex === 1}
          setOpenIndex={setOpenIndex}
          index={1}
        />
        <Dropdown
          label="Time"
          value="Any date"
          options={["Today", "This Weekend", "Next Week", "This Month"]}
          isOpen={openIndex === 2}
          setOpenIndex={setOpenIndex}
          index={2}
        />
      </div>
    </section>
  );
};

export default EventFilters;
