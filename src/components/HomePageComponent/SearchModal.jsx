import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { sampleEvents } from "../../data/events"; // 🔥 Importing sample events data

const filters = ["All", "Music", "Dance", "Sports", "Comedy"];

const SearchModal = ({ setIsSearchOpen }) => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredEvents =
        selectedFilter === "All"
            ? sampleEvents
            : sampleEvents.filter((event) => event.tags.includes(selectedFilter));

    return (
        <div className="fixed top-16 inset-0 z-50 flex items-start justify-center bg-black/15 bg-opacity-70 backdrop-blur-sm pt-10 px-4">
            {/* <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-20 left-40 text-2xl font-bold"
                >
                    &times;
                </button> */}
            <MdOutlineKeyboardArrowLeft onClick={() => setIsSearchOpen(false)} className="cursor-pointer absolute top-16 left-36 text-4xl text-pink-600 w-10 h-12" />
            <div className=" w-full px-4 md:px-16  mt-8 container mx-auto max-w-5xl p-12 bg-[#0A1626] rounded-lg text-white border border-pink-600 relative max-h-[90vh] overflow-y-auto">
                {/* Close Button */}

                {/* Heading */}
                {/* <h2 className="text-2xl font-semibold mb-4">Search Events</h2> */}

                {/* Search Input */}
                <div
                    className="bg-[#020218] border-2 border-pink-600 rounded-full flex items-center px-4 py-2 mx-auto w-full sm:w-full max-w-xl cursor-pointer hover:ring-2 ring-pink-600 transition-all"
                >
                    <CiSearch className="text-white mr-3 text-2xl" />
                    <input
                        type="text"
                        placeholder="Search Events"
                        className="bg-transparent outline-none text-white flex-grow placeholder-gray-400 text-sm cursor-pointer"
                    />
                </div>
                {/* <input
                    type="text"
                    placeholder="Search Events"
                    className="w-2/3 px-4 py-2 border border-pink-600 rounded-full focus:outline-none mb-4"
                /> */}

                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {filters.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedFilter(tag)}
                            className={`px-7 py-1 rounded-lg text-sm transition ${selectedFilter === tag
                                ? "bgPinkColor text-white"
                                : "border bgPinkColor text-white hover:border-pink-600 hoverPinkColor"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>


                {/* Heading */}
                <h2 className="text-2xl font-medium my-9">Tranding in Mumbai</h2>

                {/* Event List: 2 Per Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {filteredEvents.slice(0, 6).map((event) => (
                        <Link to={`/event/${event.id}`} key={event.id}>
                            <div className="h-3/4 rounded-xl shadow flex overflow-hidden hover:shadow-pink-600 transition cursor-pointer">
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="w-[19%] rounded-lg object-cover h-auto"
                                />
                                <div className="p-4 w-2/3 flex flex-col justify-center">
                                    <h3 className="text-md font-bold text-white mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Category: {event.tags[0]}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {filteredEvents.length === 0 && (
                        <p className="col-span-full text-center text-gray-600">
                            No events found for "{selectedFilter}"
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SearchModal;
