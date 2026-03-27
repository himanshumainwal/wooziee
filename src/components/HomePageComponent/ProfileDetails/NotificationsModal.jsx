// components/NotificationsModal.jsx
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const NotificationsModal = ({ onBack }) => {
    return (
        <div className="fixed inset-0 bg-black/30 top-16 backdrop-blur-sm z-50 flex justify-end">
            <div
                onClick={(e) => e.stopPropagation()}
                className="fixed bg-[#0F0F24] text-white w-[20rem] sm:w-[22rem]  md:w-[475px] rounded-l-xl h-full border border-r-0 border-pink-600 py-6 md:px-8 px-4 flex flex-col"
            >
                {/* Back Arrow */}
                <MdKeyboardArrowLeft
                    className="absolute -left-12 md:-left-16 top-6 text-5xl text-pink-600 cursor-pointer"
                    onClick={onBack}
                />

                {/* Header */}
                <div className="relative px-2 sm:px-3 py-1.5 mb-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-1">
                            <h2 className="text-base sm:text-lg font-semibold">My Notifications</h2>
                            <p className="text-sm text-gray-200">Get notified with everything Wooziee!</p>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?img=3"
                            alt="Profile"
                            className="w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full border-2 border-pink-500 object-cover"
                        />
                    </div>
                </div>

                {/* Notification item */}
                <div className="bg-[#11182D] px-4 py-5 mt-4  rounded-lg flex items-center justify-between cursor-pointer">
                    <div className="flex gap-4 items-start">
                        <FaBell className="textPinkColor text-xl mt-1" />
                        <p className="text-sm text-white">
                            Your ticket <span className="font-semibold">#123456</span> has
                            been cancelled due to operational reasons. Refunds...
                        </p>
                    </div>
                    <span className="text-sm text-white">&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default NotificationsModal;
