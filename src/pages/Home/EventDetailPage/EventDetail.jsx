import React, { useEffect, useState } from "react";
import { sampleEvents } from "../../../data/events"; // 🔥 Importing sample events data
import { Link, useNavigate, useParams } from "react-router-dom";
import LoginModal from "../../../components/HomePageComponent/LoginModal";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { MdOutline18UpRating, MdMusicVideo } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { HiArrowUturnRight } from "react-icons/hi2";
import EventSlider from "../../../components/HomePageComponent/EventSlider";


const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const event = sampleEvents.find((e) => String(e.id) === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return <div className="text-white text-center mt-20">Event Not Found</div>;
    }

    return (
        <div className={`bg-[#0e0e1a] text-white min-h-screen pb-5 ${showLogin ? "overflow-hidden" : ""}`}>
            {/* Breadcrumbs */}
            <div className="bgPinkColor text-lg py-1 text-white">
                <div className="container mx-auto flex px-4 md:px-12 items-center gap-2">
                    <Link to="/" className="text-white px-3 py-1">Home</Link>
                    <span>&gt;</span>
                    <button onClick={() => navigate(-1)} className="text-white px-3 py-1">Search</button>
                    <span>&gt;</span>
                    <span className="font-medium">{event.title}</span>
                </div>
            </div>

            {/* Top Section */}
            <div className="relative bg-cover bg-center bg-no-repeat pb-8 h-auto min-h-[65vh] mb-10 px-4 md:px-16 pt-6"
                style={{ backgroundImage: `url(${event.img})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

                {/* Title */}
                <h2 className="relative z-10 text-xl px-0 md:px-16 md:text-2xl font-semibold mt-6 mb-10">
                    {event.title}
                </h2>

                {/* Main Content */}
                <div className="relative z-10 container justify-between mx-auto flex flex-col md:flex-row items-center gap-8 px-0 md:px-12">
                    {/* Event Image */}
                    <img
                        src={event.img}
                        alt={event.title}
                        className="w-full md:w-1/2 h-60 md:h-72 object-cover rounded-xl"
                    />

                    {/* Event Details Box */}
                    <div className="w-full md:w-2/5 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-pink-600">
                        <p>
                            <FaRegCalendarAlt className="inline-block -ml-1 text-[21px] mr-5" />
                            Sunday, June 21 2025
                        </p>
                        <p className="my-2">
                            <FaRegClock className="inline-block -ml-1 text-[21px] mr-5" />
                            20:00–23:59
                        </p>
                        <p>
                            <MdOutline18UpRating className="inline-block -ml-1 text-[24px] mr-5" />
                            18+ (Proof Required)
                        </p>
                        <p className="my-2">
                            <GrLanguage className="inline-block text-[20px] mr-5" />
                            English, Hindi
                        </p>
                        <p className="mb-4">
                            <MdMusicVideo className="inline-block text-[22px] mr-5" />
                            Bollywood, DJ
                        </p>
                        <hr className="border-pink-600 mb-4" />

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                            <div>
                                <p>Starting From</p>
                                <p className="text-white font-semibold text-xl">₹500</p>
                            </div>
                            <button
                                className="bgPinkColor hover:border-pink-600 hover:border hoverPinkColor cursor-pointer py-2 px-8 rounded-full font-semibold"
                                onClick={() => setShowLogin(true)}
                            >
                                Book Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* About the Event */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6 mb-10 p-4 md:px-12">
                {/* Text Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-6">About the Event</h2>
                    <p className="text-gray-300 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* Image */}
                <img
                    src={event.img}
                    alt="About"
                    className="w-full md:w-2/5 h-60 object-cover rounded-lg"
                />
            </div>


            {/* Age Restriction */}
            <div className="bg-[#1c1c2b] border border-pink-500 container mx-auto mb-10 rounded-md flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:px-10 w-[90%] md:w-[83%]">
                <span className="text-yellow-400 text-4xl">⚠️</span>
                <div>
                    <h1 className="text-white text-xl mb-1.5">Age Restriction</h1>
                    <p className="text-sm text-gray-300">
                        This event’s host has placed age restrictions according to their needs & requirements. Please carry your ID along (Aadhar or any equivalent ID) to enter along with the ticket.
                    </p>
                </div>
            </div>


            {/* Venue */}
            <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8 mb-12 items-start md:items-center justify-between px-4 md:px-12">

                {/* Text Section */}
                <div className="md:w-2/6 w-full">
                    <h2 className="text-xl font-bold mb-5">Venue</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Button Section */}
                <div className="w-full md:w-1/5">
                    <button className="bgPinkColor cursor-pointer w-full  px-4 py-2 rounded-full font-semibold text-sm text-white flex items-center justify-center">
                        <HiArrowUturnRight className="text-lg  mr-2" />
                        Get Directions
                    </button>
                </div>

                {/* Map Image */}
                <div className="w-full md:w-2/6">
                    <img
                        src="/images/map.png"
                        alt="Map"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>
            </div>



            {/* Artists Performing */}
            <div className="mb-12 px-4 md:px-12 container mx-auto">
                <h2 className="text-xl font-bold mb-6">Artists Performing</h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-16">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="text-center w-32">
                            <img
                                src={`/images/artist${idx + 1}.png`}
                                alt={`Artist ${idx + 1}`}
                                className="w-28 h-28 rounded-full object-cover mb-3 mx-auto"
                            />
                            <p className="text-md font-medium text-white">Artist Name {idx + 1}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Similar Events */}
            <EventSlider  title="Similar Events Near You" events={sampleEvents} />
            {/* <div className="px-4 md:px-12 container mx-auto">
                <h2 className="text-xl font-bold mb-4">Similar Events Near You</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sampleEvents.slice(0, 3).map((ev, idx) => (
                        <Link key={idx} to={`/event/${ev.id}`}>
                            <div className="bg-[#1c1c2b] rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition">
                                <img src={ev.img} alt={ev.title} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <p className="text-xs text-gray-400">{ev.date}</p>
                                    <h3 className="text-sm font-semibold mt-1">{ev.title}</h3>
                                    <p className="text-xs text-gray-300">{ev.location}</p>
                                    <p className="mt-1 text-[11px] text-gray-400">{ev.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}

            {/* Login Modal (only when showLogin === true) */}
            {showLogin && (
                <LoginModal
                    onClose={() => setShowLogin(false)}
                    event={{
                        id: event.id,
                        title: event.title,
                        date: "Sunday, June 21 2025",
                        venue: event.location,
                        img: event.img,
                    }}
                />
            )}
        </div>
    );
};

export default EventDetail;
