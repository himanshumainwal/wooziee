import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";

const EventSlider = ({ title, events }) => {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const cardWidth = 345; // Adjust this value based on your card width
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-10 px-4 md:px-16 container mx-auto text-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>
      <div className=" flex items-center">


        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="border border-pink-600 cursor-pointer p-2 rounded-full mr-2"
        >
          <FaArrowLeft className="text-pink-600 w-5 h-5" />
        </button>


        {/* Card Slider */}
        <div
          ref={containerRef}
          className="flex gap-16 overflow-x-auto py-2 scroll-smooth scrollbar-hide px-auto md:px-10"
        >
          {events.map((event, index) => (
            <Link to={`/event/${event.id}`} key={index}>
              <div className="relative w-[246px] border border-gray-500 lg:w-[280px] bg-[#1a1a3c] rounded-xl overflow-hidden transition-transform hover:scale-105 duration-400 hover:shadow-md cursor-pointer">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />

                {/* Heart Button - always visible, hover icon only on heart */}
                <button className="group absolute top-2 right-2 cursor-pointer bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-md transition">
                  <AiOutlineHeart className="w-5 h-5 text-pink-600 group-hover:hidden" />
                  <IoHeart className="w-5 h-5 text-pink-600 hidden group-hover:block" />
                </button>

                <div className="p-4 flex gap-3">
                  <div>
                    <p className="text-[8px] text-center text-indigo-300">{event.month}</p>
                    <p className="text-xl text-white">{event.date}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{event.title}</h3>
                    <p className="text-xs text-gray-300 mb-2">{event.location}</p>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className=" border border-pink-600 cursor-pointer p-2 ml-2 rounded-full"
        >
          <FaArrowRight className="text-pink-600 w-5 h-5" />
        </button>

      </div>
    </section>
  );
};

export default EventSlider;
