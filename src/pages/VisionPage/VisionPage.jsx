import React from "react";
import eventImg from "/images/event.png"; // Placeholder for event image
import eventBanner from "/images/event-banner.png"; // Placeholder for event image
import enjoy from "/images/enjoy.png"; // Placeholder for event image
import apple from "/images/apple.png"; // Placeholder for event image
import google from "/images/google.png"; // Placeholder for event image
import QRCode from "/images/QRCode.png"; // Placeholder for event image


const VisionPage = () => {
    return (
        <div className="bg-[#0A0A1F] text-white font-sans">
            {/* Hero Section */}
            <div className="relative w-full bg-no-repeat flex flex-col justify-center px-4 sm:px-10 md:px-20 bg-cover bg-center h-60 sm:h-72 md:h-80"
                style={{ backgroundImage: `url(${eventImg})` }} >

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

                <div className="text-center z-10 max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        India’s most awaited ticketing partner
                    </h1>
                    <p className="text-lg sm:text-2xl w-[60%] mx-auto text-gray-200">
                        <span className="textPinkColor font-semibold">Wooziee</span> – for secure, accessible ticket buying, selling, and event management for everyone.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="px-4 md:px-12 mt-16 container mx-auto space-y-8">
                <p className="text-gray-100 text-lg sm:text-base">
                    Majority of the event-goers in India have faced issues with the current ticketing platforms.
                </p>
                <div className="flex flex-col sm:flex-row justify-around gap-10">
                    <div className="w-1/5 text-center">
                        <h2 className="text-5xl font-bold textPinkColor">60%</h2>
                        <p className="text-md text-gray-100 mt-4">people find the existing platforms’ convenience fees to be very high.</p>
                    </div>
                    <div className="w-1/5 text-center">
                        <h2 className="text-5xl font-bold textPinkColor">85%</h2>
                        <p className="text-md text-gray-100 mt-4">people would want a secure and standardised platform for reselling their tickets.</p>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="mt-16 container mx-auto px-4 md:px-12 relative">
                <p className="text-white text-right mb-8 pr-2 text-xl sm:text-base">Wooziee gives you that and more...</p>
                <img
                    src={eventBanner} // replace with actual path
                    alt="Concert Crowd"
                    className="w-full rounded-xl object-cover"
                />
            </div>

            {/* Innovative Solutions Section */}
            <div className="mt-20 container mx-auto px-4 md:px-12 grid md:grid-cols-2 items-center gap-10">
                <img
                    src={enjoy}// replace with actual path
                    alt="People with drinks"
                    className="rounded-xl w-full"
                />
                <div className="w-2/3 mx-auto">
                    <h3 className="text-2xl font-semibold mb-5">
                        Innovative <span className="textPinkColor">Solutions</span>
                    </h3>
                    <p className="text-gray-300 text-md">
                        Our platform offers innovative tools for event organizers and enthusiasts alike, ensuring a secure and efficient ticketing experience that caters to everyone’s needs in the event industry.
                    </p>
                </div>
            </div>

            {/* Connect Section */}
            <div className="mt-20 grid md:grid-cols-2 container mx-auto px-4 md:px-12  items-center gap-10">
                <div className="w-2/3 mx-auto">
                    <h3 className="text-2xl font-semibold mb-5">
                        Connect <span className="textPinkColor">With Us</span>
                    </h3>
                    <p className="text-gray-300 text-md">
                        Connect with us and get to know the passionate team behind Wooziee, dedicated to transforming the ticketing landscape and providing exceptional service to both event organizers and attendees.
                    </p>
                </div>
                <img
                    src={enjoy} // same image repeated
                    alt="Team celebration"
                    className="rounded-xl w-full"
                />
            </div>
            {/* Footer Section */}
            <div className="mt-20 container mx-auto px-4 md:px-12  flex justify-end">
                <div className="flex items-center gap-6 bg-gradient-to-br from-[#0A0A1F] to-[#09091A] p-6 rounded-lg shadow-md">
                    <div>
                        <p className="text-white font-medium text-base mb-2">
                            Scan the QR Code here <br /> to download the app!
                        </p>
                        <div className="flex items-end gap-1 mt-2">
                            <img src={apple} alt="App Store" className="w-[7rem]" />
                            <img src={google} alt="Play Store" className="w-28" />
                        </div>
                    </div>
                    <img src={QRCode} alt="QR Code" className="w-24 h-24" />
                </div>
            </div>
        </div>
    );
};

export default VisionPage;
