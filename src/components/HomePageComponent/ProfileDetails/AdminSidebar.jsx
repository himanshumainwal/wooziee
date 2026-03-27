import { useState } from "react";
import { FaTicketAlt, FaGift, FaBell, FaUserCog, FaInfoCircle, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useAdminSidebar } from "../../../context/AdminSidebarContext";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ onBack, onOpenTickets, onOpenCoupons, onOpenNotifications, setShowAccountSettingsModal }) => {
    const { user } = useAdminSidebar();
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-50 flex bg-black/20 backdrop-blur-sm top-16 justify-end" onClick={onBack}>

            <div onClick={(e) => e.stopPropagation()}
                className="fixed right-0 rounded-l-xl  w-[20rem] sm:w-[22rem] md:w-[475px] h-full bg-[#0F0F24] text-white z-50 border border-r-0 border-pink-600 flex flex-col">


                {/* Back Arrow */}
                <MdKeyboardArrowLeft
                    className="absolute -left-12 top-6 md:-left-16 text-5xl text-pink-600 cursor-pointer"
                    onClick={onBack}
                />


                {/* Header */}
                <div className="relative px-6 py-6 border-b border-gray-700">

                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">Hi {user?.name || 'Guest'}!</h2>
                            <p className="text-sm text-gray-200">Welcome to Wooziee!</p>
                            <p className="text-xs my-1 text-gray-300">{user?.email} | {user?.phone}</p>
                            <button className="text-xs text-gray-400 hover:underline">Edit my profile &gt;</button>
                        </div>
                        <img
                            src={user?.avatar || '/default-avatar.png'}
                            alt="Profile"
                            className="w-12 md:w-20 h-12 md:h-20 rounded-full border-2 border-pink-500 object-cover"
                        />
                    </div>
                </div>

                {/* Options */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
                    <Option icon={<FaTicketAlt />}
                        onClick={() => {
                            onBack(); // Close sidebar
                            onOpenTickets(); // Show ticket modal
                        }}
                        label="View My Tickets" />

                    <Option icon={<FaGift />}
                        onClick={() => {
                            onBack();           // Close sidebar
                            onOpenCoupons();  // Show coupons modal
                        }} label="View My Coupons" />

                    <Option icon={<FaBell />}
                        onClick={() => {
                            onBack();           // Close sidebar
                            onOpenNotifications(true);  // Show coupons modal
                        }} label="My Notifications" />

                    <Option icon={<FaUserCog />}
                        onClick={() => {
                            onBack();
                            setShowAccountSettingsModal(true);
                        }} label="My Account Settings" />

                    <Option
                        icon={<FaInfoCircle />}
                        label="About Us"
                        onClick={() => {
                            onBack();         // Close sidebar
                            navigate("/about-us"); // Navigate to About page
                        }}
                    />

                    <Option icon={<FaHeadset />} label="Help and Support" />
                </div>

                {/* Sign Out */}
                <div className="px-4 py-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white text-sm font-semibold py-3 rounded-md transition duration-200">
                        <FaSignOutAlt />
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

const Option = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="w-full flex cursor-pointer items-center gap-4 bg-[#131A2F] hover:bg-[#1b223c] transition duration-200 px-4 py-3 rounded-md text-left text-sm font-medium">
        <span className="text-pink-500 text-lg">{icon}</span>
        {label}
    </button>
);

export default AdminSidebar;
