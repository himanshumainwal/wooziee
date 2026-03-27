import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dropdown = ({ label, value, options, isOpen, setOpenIndex, index }) => {
  const dropdownRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenIndex]);

  return (
    <div ref={dropdownRef} className="relative w-full z-10">
      <label className="text-sm text-gray-300 mb-1 block">{label}</label>

      {/* Trigger */}
      <div
        className="flex items-center justify-between border-b border-gray-400 pb-2 cursor-pointer"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="font-bold ">{value}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[90px] bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl w-full p-3"
          >
            {options.map((option, i) => (
              <div
                key={i}
                className="py-2 border-b border-white/20 hover:rounded-2xl text-sm hover:bg-white/10 px-2 cursor-pointer last:border-none"
                onClick={() => {
                  console.log(`Selected: ${option}`);
                  setOpenIndex(null);
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
