import { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const TicketSelectionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const event = location.state?.event;
    const [tickets, setTickets] = useState([]);
    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsFixed(scrollY < 100); // 👈 Adjust this threshold as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (event) {
            // You can fetch or use ticket options from event object if available
            // Or define default tickets for this event
            setTickets([
                { id: 1, name: "Early Bird Pass", price: 3000, count: 0 },
                { id: 2, name: "General Pass - Phase 1", price: 3000, count: 0 },
                { id: 3, name: "General Pass - Phase 2", price: 3000, count: 0 },
            ]);
        }
    }, [event]);

    if (!event) {
        return <div className="text-white text-center mt-20">Event Not Found</div>;
    }

    const increment = (index) => {
        const newTickets = [...tickets];
        newTickets[index].count += 1;
        setTickets(newTickets);
    };

    const decrement = (index) => {
        const newTickets = [...tickets];
        if (newTickets[index].count > 0) newTickets[index].count -= 1;
        setTickets(newTickets);
    };

    const totalPrice = tickets.reduce((sum, t) => sum + t.count * t.price, 0);
    const totalCount = tickets.reduce((sum, t) => sum + t.count, 0);

    return (
        <div className="bg-[#0e0e1a] relative pt-10 text-white min-h-screen">
            {/* <header className="flex md:px-16 container mx-auto justify-between items-center p-6">
                <h1 className="text-2xl font-bold text-pink-500">wooziee</h1>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                    {event.title}
                </h2>
            </header> */}

            <div className="bgPinkColor flex md:gap-10 gap-5 justify-center text-center text-gray-400 py-2 text-sm font-semibold">
                <span className="text-white">
                    <span className="block sm:hidden">Step 1: Tickets</span>
                    <span className="hidden sm:block">Step 1: Select Your Tickets</span>
                </span>
                <span className="">
                    <span className="block sm:hidden">Step 2: Payment</span>
                    <span className="hidden sm:block">Step 2: Choose Payment Method</span>
                </span>
                <span className="">
                    <span className="block sm:hidden">Step 3: Finish</span>
                    <span className="hidden sm:block">Step 3: Finish Payment</span>
                </span>
            </div>

            <div className="px-10 py-6 md:px-36 relative container mx-auto">

                {/* Back Arrow */}
                <div className="flex items-start gap-4 flex-col md:flex-row">
                    <MdOutlineKeyboardArrowLeft
                        className="cursor-pointer absolute left-8 md:left-12 top-6 text-4xl md:text-[55px] text-pink-600"
                        onClick={() => navigate(-1)}
                    />

                    {/* Event Details */}
                    <div className="pl-12 md:pl-0">
                        <h2 className="text-lg md:text-xl font-semibold text-white">{event.title}</h2>
                        <h3 className="text-white text-xl font-bold mb-1">{event.venue}</h3>
                        <p className="text-gray-400 mb-6">{event.date} | 20.00–23.59</p>
                    </div>
                </div>

                <div className="space-y-6 mt-4">
                    {tickets.map((ticket, idx) => (
                        <div
                            key={ticket.id}
                            className="bg-[#121e36] rounded-lg p-5 flex justify-between items-center"
                        >
                            <div>
                                <h4 className="text-lg font-semibold">{ticket.name}</h4>
                                <p className="text-sm text-gray-300">
                                    ₹{ticket.price} (excluding taxes & charges)
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Sales end on Feb 7, 2025
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => decrement(idx)}
                                    className="w-8 h-8 rounded-full cursor-pointer bgPinkColor text-white flex items-center justify-center"
                                >
                                    <IoIosRemove />
                                </button>
                                <span className="text-lg font-bold">{ticket.count}</span>
                                <button
                                    onClick={() => increment(idx)}
                                    className="w-8 h-8 rounded-full cursor-pointer bgPinkColor text-white flex items-center justify-center"
                                >
                                    <IoIosAdd />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price View */}
            <div
                className={`bg-[#0f172a] z-30 py-4 px-6 md:px-16 border-t border-gray-700 ${isFixed ? "fixed bottom-0 left-0 w-full" : "sticky mt-24"
                    }`}
            >                <div className="container mx-auto flex md:px-10 justify-between items-center w-full">
                    <div>
                        <p className="text-lg font-semibold">₹{totalPrice}</p>
                        <p className="text-sm text-gray-400">
                            {totalCount} ticket{totalCount !== 1 && "s"} | Excluding Taxes
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            navigate("/payment", {
                                state: {
                                    event,
                                    totalPrice,
                                    tickets: tickets.filter((t) => t.count > 0),
                                },
                            })
                        }
                        className="bgPinkColor hover:border-pink-600 hover:border hoverPinkColor text-white font-semibold px-6 py-2 rounded-full"
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketSelectionPage;
