// LoginModal.jsx
import { useState } from "react";
import OtpModal from "./OtpModal";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // cross icon for hover

const LoginModal = ({ onClose, event }) => {
    const [phone, setPhone] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [hovering, setHovering] = useState(false);

    const isValid = phone.length === 10 && isChecked;

    const handleSendOtp = () => {
        if (isValid) {
            setOtpSent(true);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div
                className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
                onClick={onClose}
                ></div>

                {/* Blur Background */}
            {/* Modal Panel */}
            <div className="fixed bottom-0 md:relative w-full md:w-[475px] h-1/2 md:h-screen bg-[#0f172a] border-2 md:border-r-0 border-b-0 rounded-t-xl md:rounded-l-xl border-pink-600 z-50 px-6 py-8 flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-white"
                >
                    <IoClose className="text-white text-2xl hoverPinkColor" />
                </button>

                {!otpSent ? (
                    <div className="w-full px-4 max-w-md">
                        <h1 className="textPinkColor font-bold text-4xl mb-6">wooziee</h1>
                        <h2 className="text-white text-2xl font-semibold mb-6">Login/Signup</h2>

                        <div className="flex items-center py-3 bg-[#0b195e] rounded-lg overflow-hidden mb-7">
                            <span className="text-white w-24 px-3">🇮🇳 +91</span>
                            <input
                                type="tel"
                                maxLength={10}
                                className="w-full bg-transparent px-3 text-white placeholder:text-gray-400 outline-none"
                                placeholder="Enter your number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="flex items-start gap-2 mb-4">
                            <input
                                type="checkbox"
                                className="mt-1"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <p className="text-sm text-gray-300">
                                By signing-up you accept our{" "}
                                <Link to="/policies/terms-and-conditions" className="underline text-white">Terms & Conditions</Link>{" "}
                                and{" "}
                                <Link to="/policies/privacy-policy" className="underline text-white">Privacy Policy</Link>
                            </p>
                        </div>

                        <button
                            onClick={handleSendOtp}
                            disabled={!isValid}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={`
                                flex items-center justify-center gap-2 
                                py-1.5 px-10 rounded-full 
                                float-end transition duration-200
                                ${isValid
                                    ? "bgPinkColor hoverPinkColor hover:border-pink-600 hover:border text-white cursor-pointer"
                                    : "bgPinkColor text-white/70 cursor-not-allowed relative"}
                            `}
                        >
                            {hovering && !isValid ? (
                                <>
                                    <FaTimes className="textPinkColor" />
                                    <span>Send OTP</span>
                                </>
                            ) : (
                                "Send OTP"
                            )}
                        </button>
                    </div>
                ) : (
                    <OtpModal phone={phone} onBack={() => setOtpSent(false)} event={event} />
                )}
            </div>
        </div>
    );
};

export default LoginModal;
