import { FaArrowRightLong } from "react-icons/fa6";
import eventImage from "/images/enjoy.png";
import { useNavigate } from "react-router-dom";


const PartnerDashboard = () => {  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/partner-dashboard-form');
    };
    return (

        <div className="bg-[#0A0A1F] overflow-y-scroll relative overflow-hidden mb-8 text-white min-h-[125vh]">

            {/* Hero Section */}
            <div
                className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-10 h-60 sm:h-72 md:h-96 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${eventImage})` }}
            >
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="max-w-5xl w-3/4 absolute left-1/2 transform -translate-x-1/2 top-10 bg-white/5 backdrop-blur-md py-8 px-6 sm:px-10 md:px-20 rounded-xl shadow-lg border border-[#26243A] z-10">

                <h1 className="text-[28px] sm:text-[42px] font-bold mb-4">
                    Welcome to the <span className="textPinkColor">Wooziee</span>  Hosting Experience!
                </h1>
                <p className="text-gray-300 text-sm mb-6">
                    A smoother, faster and more secure way to <span className="">
                        seamlessly host events.
                    </span>
                </p>

                <div className="text-center mb-5">
                    <button  onClick={handleClick}
                     className="cursor-pointer bgPinkColor w-4/5 hoverPinkColor hover:border-pink-600 hover:border py-2.5 rounded-lg text-white font-medium transition">
                        Become a Partner
                    </button>
                </div>

                <h2 className="mt-10 text-md text-gray-300 mb-4">How to become a partner in 3 steps:</h2>
                <div className="flex flex-col items-center justify-between gap-1 text-center text-white mb-8 sm:flex-row rounded-lg border-2 border-white/50 bg-gradient-to-r from-[#2b0f3b] via-[#1d183f] to-[#1e193c] backdrop-blur-lg overflow-x-auto">
                    <div className="p-6 w-full sm:w-1/3">
                        <p className="text-xl font-bold">01</p>
                        <p className="text-sm mt-2">Sign up as an organiser in a minute!</p>
                    </div>
                    <FaArrowRightLong className="text-3xl rotate-90 sm:rotate-0 transition-transform duration-300" />

                    <div className="p-6 w-full sm:w-1/3">
                        <p className="text-xl font-bold">02</p>
                        <p className="text-sm mt-2">Send us your basic details</p>
                    </div>
                    <FaArrowRightLong className="text-3xl rotate-90 sm:rotate-0 transition-transform duration-300" />
                    <div className="p-6 w-full sm:w-1/3">
                        <p className="text-xl font-bold">03</p>
                        <p className="text-sm mt-2">Wait for us to respond!</p>
                    </div>
                </div>


                <div className="container px-4 md:px-7 mx-auto">
                    <ol className="list-decimal ml-6 text-sm text-gray-200 space-y-2">
                        <li>List events for free and quickly.</li>
                        <li>Scan tickets on Wooziee directly—no third party needed.</li>
                        <li>Interactive dashboard with real-time data, ready to export.</li>
                    </ol>

                    <h3 className="mt-10 text-md font-semibold">Wooziee provides a platform for:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-center">
                        <div className="p-4">
                            <img src="/images/music-events.png" alt="Music Events" className="mx-auto mb-2" />
                            <p>Music Events</p>
                        </div>
                        <div className="p-4">
                            <img src="/images/concerts.png" alt="Concerts" className="mx-auto mb-2" />
                            <p>Concerts</p>
                        </div>
                        <div className="p-4">
                            <img src="/images/sports.png" alt="Sports" className="mx-auto mb-2" />
                            <p>Sports</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerDashboard;
