import { useLocation, useNavigate } from "react-router-dom";

const BookingSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { title, date, venue } = location.state || {
        title: "Unknown Event",
        date: "Date not available",
        venue: "Venue not available",
    };

    return (
        <div className="bg-[#0e0e1a] text-white min-h-screen pt-10 flex flex-col">
            {/* Stepper Navigation */}
            <div className="w-full text-center text-sm font-semibold bgPinkColor py-3 flex flex-wrap justify-center gap-4 sm:gap-10 text-gray-300">
                <span>
                    <span className="block sm:hidden">Step 1: Tickets</span>
                    <span className="hidden sm:block">Step 1: Select Your Tickets</span>
                </span>
                <span>
                    <span className="block sm:hidden">Step 2: Payment</span>
                    <span className="hidden sm:block">Step 2: Choose Payment Method</span>
                </span>
                <span className="text-white">
                    <span className="block sm:hidden">Step 3: Finish</span>
                    <span className="hidden sm:block">Step 3: Finish Payment</span>
                </span>
            </div>

            {/* Confirmation Section */}
            <div className="flex-1 flex flex-col items-center justify-evenly px-6 sm:px-10 md:px-20">
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-600 rounded-full flex items-center justify-center mb-6">
                        <span className="text-4xl sm:text-5xl">✔️</span>
                    </div>

                    {/* Text */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Booking Confirmed!</h2>
                    <p className="text-gray-400 text-center text-sm sm:text-base leading-relaxed">
                        {title}
                        <br />
                        {date} | {venue}
                    </p>
                </div>


                {/* Buttons */}
                <div className="flex flex-col justify-end items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="text-md sm:text-md text-gray-400 hover:text-white hover:underline transition"
                    >
                        Go to Home
                    </button>
                    <button
                        onClick={() => alert("Support coming soon!")}
                        className="text-md sm:text-md text-gray-400 hover:text-white hover:underline transition"
                    >
                        Help and Support
                    </button>
                </div>
            </div>


        </div>
    );
};

export default BookingSuccess;
