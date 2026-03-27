import { useState } from "react";
import SearchModal from "./SearchModal";
import hero from "/images/hero.jpg";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import EventFilters from "../../components/HomePageComponent/DropdownEventFilters";
import { useAdminSidebar } from "../../context/AdminSidebarContext"; // ✅ Import custom hook

const HeroSection = ({ scrollToRef }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAdminOpen, toggleAdminSidebar } = useAdminSidebar(); // ✅ Destructure correctly

  const handleScroll = () => {
    const yOffset = -220;
    const y =
      scrollToRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <section
        className="relative h-[76vh] bg-cover bg-center bg-no-repeat flex items-center px-4 md:px-16"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

        {/* Main Content */}
        <div
          className={`relative px-4 md:px-16 container mx-auto z-10 w-full ${
            isSearchOpen ? "blur-sm pointer-events-none" : ""
          }`}
        >
          {/* Search bar with click handler */}
          <div className="flex justify-center">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="bg-[#020218] top-[14%] fixed border border-pink-600 rounded-full flex items-center px-4 py-2  w-fit sm:w-full max-w-xl cursor-pointer hover:ring-2 ring-pink-600 transition-all"
            >
              <CiSearch className="text-white mr-3 text-2xl" />
              <input
                type="text"
                placeholder="Search Events"
                className="bg-transparent outline-none text-white flex-grow placeholder-gray-400 text-sm cursor-pointer"
                readOnly
              />
              <button className="bgPinkColor text-white p-2 rounded-full ml-2">
                <LuSettings2 />
              </button>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex justify-end text-left">
            <div className="text-white w-full lg:w-[33%] max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Where events come alive!
              </h1>
              <p className="text-gray-200 mb-5 text-sm md:text-base">
                With Wooziee, buying, selling, or organizing event tickets is fast,
                easy, and secure. Join the movement and make every event
                unforgettable! From concerts to community gigs, Wooziee's got your
                ticket to a smoother experience.
              </p>
              <div className="flex gap-6">
                <button
                  onClick={handleScroll}
                  className="cursor-pointer bgPinkColor text-white px-6 md:px-8 py-1.5 rounded-full font-semibold text-md"
                >
                  Get Ticket
                </button>
                <button className="cursor-pointer border border-white text-white md:px-8 py-1.5 rounded-full px-6 font-semibold text-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        {isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen} />}
      </section>

      <EventFilters className="absolute top-3 right-4 text-2xl font-bold" />

    </>
  );
};

export default HeroSection;
