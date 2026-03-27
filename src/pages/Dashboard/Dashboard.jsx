import React from "react";
import eventImage from "/images/enjoy.png";
import partyImage from "/images/enjoy.png";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/partner-dashboard');
    };

    return (
        <div className="bg-[#0A0A1F] text-white min-h-screen">

            {/* Hero Section */}
            <div
                className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-10 h-60 sm:h-72 md:h-80 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${eventImage})` }}
            >
                <div className="absolute inset-0 bg-black/80" />
                <h1 className="relative z-10 text-center text-xl sm:text-2xl md:text-3xl font-bold">
                    Your Event, Your Rules — Host with <span className="textPinkColor">Wooziee</span>
                </h1>
            </div>

            {/* Content Section */}
            <div className="bg-gradient-to-b from-[#0a0a2a] to-[#0a0a1a] py-12 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-5">
                        <h3 className="text-xl sm:text-2xl font-bold">Are you looking to host an event?</h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Got an idea for an unforgettable event? We’re here to help you bring it to life. Whether
                            you’re throwing a rooftop gig, launching a creative workshop, hosting a campus fest, or
                            building the next big pop-up, Wooziee gives you everything you need to turn your vision into
                            a packed house.
                        </p>
                        <p className="text-sm sm:text-base text-gray-300">
                            With Wooziee, listing your event takes just a few clicks. Our smooth, intuitive dashboard
                            lets you manage tickets, monitor real-time sales, and keep track of your guest list—without
                            any of the stress.
                        </p>
                        <p className="text-sm sm:text-base text-gray-300">
                            No more juggling spreadsheets, DMs, and QR codes. From planning to promotion to entry
                            check-ins, Wooziee streamlines the entire process. You stay in control, your guests stay
                            excited, and your event runs exactly the way you imagined—if not better.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 space-y-6">
                        <h3 className="text-lg sm:text-xl font-semibold">Wooziee Dashboard Login</h3>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <button className="bgPinkColor text-white px-6 py-2 cursor-pointer rounded-full text-sm sm:text-base hover:border hover:border-pink-600 hoverPinkColor transition">
                                Go to Dashboard
                            </button>
                            <button className="border border-pink-600 text-pink-600 px-6 py-2 rounded-full text-sm sm:text-base cursor-pointer hover:bg-pink-600 hover:text-white transition" onClick={handleDashboardClick}>
                                Host an Event
                            </button>
                        </div>

                        {/* Responsive Image */}
                        <img
                            src={partyImage}
                            alt="Event preview"
                            className="rounded-xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
