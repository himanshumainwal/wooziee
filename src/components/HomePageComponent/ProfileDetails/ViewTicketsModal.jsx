import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ticketImage from "/images/event.png"; 

const ViewTicketsModal = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState("upcoming");

    return (
        <div
            className="fixed inset-0 bg-black/20 top-16 backdrop-blur-md z-50 flex justify-end"
            onClick={(e) => {
                // ✅ Only call onBack if user clicks directly on the background (not inside the sidebar)
                if (e.target === e.currentTarget) {
                    onBack();
                }
            }}
        >
            <div
                className="fixed bg-[#0F0F24] text-white w-[20rem] sm:w-[22rem] md:w-[475px] rounded-l-xl h-full border border-r-0 border-pink-600 p-4 sm:p-6 flex flex-col"
            >
                {/* Back Arrow */}
                <MdKeyboardArrowLeft
                    className="absolute -left-12 md:-left-16 top-6 text-5xl text-pink-600 cursor-pointer"
                    onClick={onBack}
                />

                {/* Header */}
                <div className="relative px-2 sm:px-3 py-2 mb-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex-1">
                            <h2 className="text-base sm:text-lg font-semibold">My Tickets</h2>
                            <p className="text-sm text-gray-200">View your bookings here</p>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?img=3"
                            alt="Profile"
                            className="w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full border-2 border-pink-600 object-cover"
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-evenly mb-6 sm:mb-8 pb-2">
                    <button
                        className={`font-semibold text-sm sm:text-base p-2 sm:p-3 ${activeTab === "upcoming"
                            ? "text-white border-b-2 border-pink-600"
                            : "text-gray-400 hover:text-white"
                            }`}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        Upcoming
                    </button>
                    <button
                        className={`font-semibold text-sm sm:text-base p-2 sm:p-3 ${activeTab === "past"
                            ? "text-white border-b-2 border-pink-600"
                            : "text-gray-400 hover:text-white"
                            }`}
                        onClick={() => setActiveTab("past")}
                    >
                        Past
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto space-y-6 pr-1 sm:pr-0">
                    {activeTab === "upcoming" ? (
                        <TicketCard
                            variant="upcoming"
                            image={ticketImage}
                            title="The Weeknd: India Tour"
                            venue="Narendra Modi Stadium, Ahmedabad"
                            date="19 June 2025, 19:00 - 21:00"
                            quantity={3}
                            seats="A1, A2, A3"
                            amount="₹3000"
                            bookingDate="16 June 2025 3:00"
                            bookingId="ABCDEFGH1X"
                            paymentMode="Razorpay"
                        />
                    ) : (
                        <TicketCard
                            variant="past"
                            image={ticketImage}
                            title="Sunburn Festival 2024"
                            venue="Goa Beach Arena"
                            date="20 Dec 2024, 18:00 - 23:00"
                            quantity={2}
                            seats="B5, B6"
                            amount="₹2400"
                            bookingDate="10 Dec 2024 4:00"
                            bookingId="XYZ123ABCD"
                            paymentMode="UPI"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const TicketCard = ({
    variant,
    image,
    title,
    venue,
    date,
    quantity,
    seats,
    amount,
    bookingDate,
    bookingId,
    paymentMode,
}) => {
    const isPast = variant === "past";

    return (
        <>
            <div
                className={`px-3 sm:px-4 rounded-md py-4 relative space-y-2 
          ${isPast ? "bg-[#1e1e2f] border-gray-500" : "border-pink-600"} 
          border`}
            >

                {/* circles shape */}
                <div className={`absolute left-0 bottom-6 w-10 h-10 bg-[#0A0A1F] rounded-full border  ${isPast ? "bg-[#0F0F24] border-gray-500" : "border-pink-600"}  -translate-1/2 -translate-x-1/2 z-10`}></div>
                <div className={`absolute right-0 bottom-6 w-10 h-10 bg-[#0c1023] rounded-full border 
                ${isPast ? "bg-[#0F0F24] border-gray-500" : "border-pink-600"} 
               -translate-y-1/2 translate-x-1/2 z-10`}></div>


                <div className="flex gap-3 sm:gap-4 items-start">
                    <img
                        src={image}
                        alt="Event"
                        className="w-14 sm:w-16 h-16 sm:h-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                        <h3
                            className={`font-semibold text-sm sm:text-base ${isPast ? "text-gray-300" : "text-white"
                                }`}
                        >
                            {title}
                        </h3>
                        <p className="text-xs my-1 text-gray-400">{venue}</p>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                    <div
                        className={`border-l pl-3 ${isPast ? "border-gray-500" : "border-pink-600"
                            } border-dashed h-20`}
                    ></div>
                    <div className="text-right">
                        <p className="text-xl sm:text-2xl text-center font-bold text-white">
                            {quantity}
                        </p>
                        <p className="text-sm sm:text-lg">Tickets</p>
                    </div>
                </div>

                <div
                    className={`flex items-center w-[90%] mx-4 justify-between pt-2 border-t text-xs sm:text-sm text-gray-300 
            ${isPast ? "border-gray-500" : "border-pink-600"} border-dashed`}
                >
                    <div>
                        <p className="my-1">Quantity: {quantity}</p>
                        <p>Seat: {seats}</p>
                    </div>
                    <div>
                        <p className="text-right mt-1 text-white">Amount Paid</p>
                        <p className="font-bold text-white text-base sm:text-lg">{amount}</p>
                    </div>
                </div>
            </div>

            <div className="text-xs sm:text-sm pl-2 text-gray-400 my-3">
                <p>Booking Date: {bookingDate}</p>
                <p className="my-2">Booking ID: {bookingId}</p>
                <p>Payment Mode: {paymentMode}</p>
            </div>
        </>
    );
};

export default ViewTicketsModal;
