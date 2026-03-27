
import { MdKeyboardArrowLeft } from "react-icons/md";

const ViewCouponsModal = ({ onBack }) => {
    return (
        <div
            className="fixed inset-0 bg-black/20 top-16 backdrop-blur-md z-50 flex justify-end"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onBack();
                }
            }}
        >
            <div className="fixed bg-[#0F0F24] text-white w-[20rem] sm:w-[22rem] md:w-[475px] rounded-l-xl h-full border border-r-0 border-pink-600 p-6 flex flex-col">

                {/* Back Arrow */}
                <MdKeyboardArrowLeft
                    className="absolute -left-12 md:-left-16 top-6 text-5xl text-pink-600 cursor-pointer"
                    onClick={onBack}
                />

                {/* Header */}
                <div className="relative px-2 sm:px-3 py-2 mb-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-1">
                            <h2 className="text-base sm:text-lg font-semibold">My Coupons</h2>
                            <p className="text-sm text-gray-200">View your coupons here</p>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?img=3"
                            alt="Profile"
                            className="w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full border-2 border-pink-600 object-cover"
                        />
                    </div>
                </div>

                {/* Coupon Card */}
                <div className="border border-pink-600 rounded-md py-5 mt-5 px-8 space-y-2 relative">

                    {/* circles shape */}
                    <div className="absolute left-0 bottom-6 w-10 h-10 bg-[#0A0A1F] rounded-full border  border-pink-600 -translate-y-1/2 -translate-x-1/2 z-10"></div>
                    <div className="absolute right-0 bottom-6 w-10 h-10 bg-[#0c1023] rounded-full border border-pink-600 -translate-y-1/2 translate-x-1/2 z-10"></div>


                    <h3 className="text-white font-bold text-base">Buy 1 Get 1 Free</h3>
                    <p className="text-sm text-gray-400">
                        Use at checkout, only for select shows
                    </p>
                    <div className="flex items-center mt-3">
                        <code className="bg-[#1a1a30] border border-dashed border-pink-600 text-gray-200 px-3 py-1 rounded-l-md">
                            BOGO123
                        </code>
                        <button className="bgPinkColor text-sm px-3 py-[7px] rounded-r-md hoverPinkColor">
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCouponsModal;
