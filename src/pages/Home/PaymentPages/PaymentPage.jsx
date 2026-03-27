import { useState } from "react";
import { GoAlertFill } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { SiRazorpay } from "react-icons/si";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { event, totalPrice, tickets } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        forSomeoneElse: true,
        coupon: ""
    });

    const handleFinishPayment = () => {
        // alert("Redirecting to payment gateway...");
        navigate("/booking-success", {
            state: {
                title: event?.title,
                date: event?.date,
                venue: event?.venue,
                img: event?.img
            }
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    if (!event || !tickets) {
        return <div className="text-white text-center mt-20">Missing event data</div>;
    }

    return (
        <div className="bg-[#0e0e1a] text-white min-h-screen py-10">
            {/* <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-pink-500">wooziee</h1>
                <h2 className="text-lg md:text-xl font-semibold text-white">{event.title}</h2>
            </header> */}

            <div className="w-full text-center text-sm font-semibold bgPinkColor py-3 flex flex-wrap justify-center gap-4 sm:gap-10 text-gray-300">
                   <span className="">
                    <span className="block sm:hidden">Step 1: Tickets</span>
                    <span className="hidden sm:block">Step 1: Select Your Tickets</span>
                </span>
                <span className="text-white">
                    <span className="block sm:hidden">Step 2: Payment</span>
                    <span className="hidden sm:block">Step 2: Choose Payment Method</span>
                </span>
                <span className="">
                    <span className="block sm:hidden">Step 3: Finish</span>
                    <span className="hidden sm:block">Step 3: Finish Payment</span>
                </span>
            </div>

            <div className=" relative grid md:grid-cols-[1fr_2px_1fr] items-center gap-8 container mx-auto px-6 md:px-36 pt-12">

                {/* Back Arrow */}
                <MdOutlineKeyboardArrowLeft
                    className="cursor-pointer absolute left-8 md:left-12 top-9 text-4xl md:text-[55px] text-pink-600"
                    onClick={() => navigate(-1)}
                />

                {/* Billing Form */}
                <div>
                    <div className="border relative bg-[#1c1c2b] overflow-hidden border-pink-600 rounded-xl p-6">


                        {/* circles shape */}
                        <div className="absolute left-0 top-1/2 w-10 h-10 bg-[#0A0A1F] rounded-full border border-pink-600 -translate-y-1/2 -translate-x-1/2 z-10"></div>
                        <div className="absolute right-0 top-1/2 w-10 h-10 bg-[#0c1023] rounded-full border border-pink-600 -translate-y-1/2 translate-x-1/2 z-10"></div>


                        <h3 className="text-lg font-bold mb-4">Billing Details</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="bg-transparent border-b border-gray-500 py-1 px-2 text-white" />
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="bg-transparent border-b border-gray-500 py-1 px-2 text-white" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-gray-500 py-1 px-2 text-white" />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-gray-500 py-1 px-2 text-white" />
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <input type="checkbox" name="forSomeoneElse" checked={formData.forSomeoneElse} onChange={handleChange} className="accent-pink-600" />
                            <label className="text-sm">These tickets are for someone else</label>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-6">
                        <div className="bg-[#1c1c2b] p-4 rounded-lg flex justify-between border border-gray-600">
                            <div className="flex items-center gap-2">
                                <SiRazorpay className="text-blue-500 text-xl" />
                                <div className="inline-flex flex-col">
                                    <span>Pay with Razorpay</span>
                                    <span className="text-gray-400 text-sm">Debit Card, Credit Card, UPI & more</span>
                                </div>
                            </div>
                            <input type="radio" checked readOnly className="accent-white border-2" />
                        </div>
                    </div>

                    {/* Coupons */}
                    <div className="mt-6">
                        <label className="text-md mb-2 block">Coupons</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="coupon"
                                placeholder="Enter coupon code"
                                value={formData.coupon}
                                onChange={handleChange}
                                className="flex-1 rounded-l-xl bg-gradient-to-r from-[#4b004b] to-[#1e1e2e] text-white px-3 py-2 rounded"
                            />
                            <button className="bgPinkColor cursor-pointer hover:border hover:border-pink-600 hoverPinkColor rounded-r-xl px-4 py-1.5">Enter</button>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mt-6 bg-[#1c1c2b] border border-pink-600 p-4 rounded-lg text-md text-white flex items-start gap-2">
                        <GoAlertFill className="text-yellow-400 text-3xl mr-1" />
                        <p>
                            Note :
                            <span className="text-gray-400 block text-sm">
                                All tickets are non-refundable. If the event is cancelled, the total amount except the Wooziee fees shall be returned.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Vertical line */}
                <div className=" border border-pink-600 h-full hidden md:block"></div>

                {/* Summary Box */}
                <div className="h-[95%] border border-pink-600 overflow-hidden bg-no-repeat rounded-xl bg-cover bg-top relative p-6 flex flex-col justify-end"
                    // style={{ backgroundImage: `url(${event.img})` }}
                    style={{
                        backgroundImage: `url(images/paymetImg.jpeg)`,
                    }}
                >

                    {/* circles shape */}
                    <div className="absolute left-0 top-[75%] w-10 h-10 bg-[#0A0A1F] rounded-full border  border-pink-600 -translate-y-1/2 -translate-x-1/2 z-10"></div>
                    <div className="absolute right-0 top-[75%] w-10 h-10 bg-[#0c1023] rounded-full border border-pink-600 -translate-y-1/2 translate-x-1/2 z-10"></div>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-0"></div>


                    {/* Event Details & Amount */}
                    <div className="z-10 p-4">
                        {/* <img
                            src={event.img}
                            alt={event.title}
                            className="w-full h-40 object-cover rounded mb-4"
                        /> */}
                        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                        <p>{formData.firstName} {formData.lastName || "Guest"}</p>
                        <p className="text-sm text-gray-400 my-2">{event.date} | 20:00–23:59</p>
                        <p className="text-sm text-gray-400">{event.venue}</p>
                        <ul className="mt-2 text-sm text-gray-300 list-disc ml-5">
                            {tickets.map((t, idx) => (
                                <li key={idx}>
                                    {t.name} — {t.count} ticket{t.count > 1 ? "s" : ""}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="z-10 text-pink-600 my-4" />
                    <div className="z-10 px-4 py-2 mt-2 flex justify-between items-center">
                        <div>
                            <p className="text-xl font-bold">₹{totalPrice}</p>
                            <p className="text-sm text-gray-400">{tickets.reduce((sum, t) => sum + t.count, 0)} ticket(s)</p>
                        </div>
                        <button
                            onClick={handleFinishPayment}
                            className="px-8 bgPinkColor hover:border-pink-600 hover:border hoverPinkColor text-white py-2 rounded-full font-semibold"
                        >
                            Finish Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
