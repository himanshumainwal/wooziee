import { MdKeyboardArrowLeft } from "react-icons/md";
import { useAdminSidebar } from "../../../context/AdminSidebarContext";
import { useState, useEffect } from "react";

const AccountSettingsModal = ({ onBack }) => {
    const { user, updateUser } = useAdminSidebar();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || ""
            });
        }
    }, [user]);

    useEffect(() => {
        // Compare form data with original user data
        if (
            formData.name !== user?.name ||
            formData.email !== user?.email ||
            formData.phone !== user?.phone
        ) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [formData, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        updateUser(formData);
        alert("Profile Updated!!");
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 top-16 flex justify-end">
            <div
                className="w-[20rem] sm:w-[22rem] md:w-[475px] bg-[#0A0A1F] border-r-0 text-white p-6 rounded-l-xl fixed h-full border border-pink-600"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Back Arrow */}
                <MdKeyboardArrowLeft
                    className="absolute -left-12 md:-left-16 top-6 text-5xl text-pink-600 cursor-pointer"
                    onClick={onBack}
                />

                {/* Header */}
                <div className="flex px-2 sm:px-3 py-2.5 justify-between items-start mb-6">
                    <div>
                        <h2 className="text-lg mb-1.5 font-semibold">My Account Settings</h2>
                        <p className="text-sm text-gray-200">Get notified with everything Wooziee!</p>
                    </div>
                    <img
                        src={user?.avatar}
                        className="w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full border-2 border-pink-600 object-cover"
                    />
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            className="w-full bg-[#131A2F] px-4 py-2 rounded-md border border-transparent focus:outline-pink-600"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email Address</label>
                        <input
                            className="w-full focus:outline-pink-600 bg-[#131A2F] px-4 py-2 rounded-md border border-transparent"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Phone Number</label>
                        <div className="flex gap-2">
                            <div className="bg-[#131A2F] px-1 md:px-4 py-2 rounded-md text-sm flex items-center">
                                🇮🇳 +91
                            </div>
                            <input
                                className="flex-1 focus:outline-pink-600 bg-[#131A2F] px-4 py-2 rounded-md border border-transparent"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            Contact the Wooziee team to edit your phone number.
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleUpdate}
                    disabled={!isChanged}
                    className={`cursor-pointer mt-10 text-white px-6 md:px-10 py-2 rounded-full font-semibold text-md float-end
                        ${isChanged
                            ? "bgPinkColor"
                            : "bg-gray-700 cursor-not-allowed"}
                    `}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default AccountSettingsModal;
