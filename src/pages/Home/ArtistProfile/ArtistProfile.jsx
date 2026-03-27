import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { artistData, sampleEvents } from "../../../data/events"; // Importing artist data
import eventImg from "/images/event.png"; // Placeholder for event image
import EventSlider from "../../../components/HomePageComponent/EventSlider";

const ArtistProfile = () => {
    const [artist, setArtist] = useState(null);
    const [activeTab, setActiveTab] = useState("about");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //  console.log("Route param ID:", id);
        // console.log("artistData:", artistData);
        const selectedArtist = artistData.find((artist) => {
            return artist && artist.id && id && artist.id.toString() === id.toString();
        });

        setArtist(selectedArtist);
    }, [id]);

    if (!artist) {
        return <div className="text-white p-8">Loading or artist not found...</div>;
    }

    // ...existing code...
    return (
        <div className="bg-[#0A0A1A] min-h-screen text-white">
            {/* Top Banner */}
            <div
                className="relative w-full bg-no-repeat bg-cover bg-center h-60 sm:h-72 md:h-80"
                style={{ backgroundImage: `url(${eventImg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

                {/* Content */}
                <div className="absolute container mx-auto inset-0 flex items-center px-4 sm:px-6 md:px-20 z-10">
                    <div className="flex items-start w-full gap-4">
                        {/* Back Arrow */}
                        <MdOutlineKeyboardArrowLeft
                            className="cursor-pointer text-4xl md:mr-8 sm:text-5xl text-pink-600 shrink-0"
                            onClick={() => navigate(-1)}
                        />

                        {/* Artist Info */}
                        <div className="flex items-center gap-4 w-full">
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-lg sm:text-xl font-bold">{artist.name}</h2>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    Indian Artist from {artist.location}, India | Performed over {artist.shows} Shows
                                </p>
                                <p className="text-xs sm:text-sm text-gray-300">
                                    Follow {artist.name} to never miss updates on where {artist.name} is performing!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-[#0F0F24] border-b px-4 sm:px-8 md:px-16 border-gray-700">
                <div className="flex justify-evenly container mx-auto sm:space-x-10 pt-6 text-sm sm:text-base md:text-lg font-semibold">
                    <button
                        className={`pb-2 ${activeTab === "about"
                            ? "text-white border-b-2 border-pink-600"
                            : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("about")}
                    >
                        About DJ
                    </button>
                    <button
                        className={`pb-2 ${activeTab === "upcoming"
                            ? "text-white border-b-2 border-pink-600"
                            : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        Upcoming
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="sm:px-3 md:px-16 py-10">
                {activeTab === "about" && (
                    <div className="container mx-auto md:px-16">
                        <p className="text-gray-300 mb-6 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4">Photo Gallery:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                            {artist.gallery.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Event ${index + 1}`}
                                    className="rounded-lg shadow-md object-cover h-40 sm:h-48 w-full"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "upcoming" && (
                    <EventSlider events={sampleEvents} />
                    // <>
                    //     {artist?.upcomingEvents && artist.upcomingEvents.length > 0 ? (
                    //         <ul className="space-y-4">
                    //             {artist.upcomingEvents.map((event, idx) => (
                    //                 <li key={idx} className="bg-[#1a1a2e] p-4 rounded-lg">
                    //                     <h4 className="text-base sm:text-lg font-semibold text-pink-400">{event.title}</h4>
                    //                     <p className="text-gray-300 text-xs sm:text-sm">
                    //                         {event.date} at {event.location}
                    //                     </p>
                    //                 </li>
                    //             ))}
                    //         </ul>
                    //     ) : (
                    //         <p className="text-gray-300 text-sm">No upcoming events yet. Stay tuned!</p>
                    //     )}
                    // </>
                )}
            </div>
        </div>
    );

};

export default ArtistProfile;
