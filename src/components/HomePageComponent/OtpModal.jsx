import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const OtpModal = ({ phone, onBack, event }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const { id } = useParams(); // event id from URL

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleLogin = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length === 6) {
            // ✅ Navigate with event details after OTP verification
            navigate(`/event/${id}/book`, {
                state: {
                    event,
                },
            });
        } else {
            alert("Please enter a valid 6-digit OTP");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Blur */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onBack}
            ></div>

            {/* OTP Modal */}
            <div className="fixed bottom-0 md:relative flex flex-col justify-center z-50 w-full h-1/2 md:w-[475px] bg-[#0f172a] border-2 md:border-r-0 border-b-0 md:rounded-l-xl rounded-t-xl border-pink-600 p-6 md:h-screen overflow-auto">
                <button
                    onClick={onBack}
                    className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-white"
                >
                    <IoClose className="text-white text-2xl hoverPinkColor" />
                </button>

                <h2 className="text-white px-4 text-2xl font-semibold mb-6">
                    Enter Your OTP
                </h2>
                <p className="text-sm px-4 text-gray-400">
                    Please enter the OTP sent to your registered mobile number.
                </p>

                {/* OTP Fields */}
                <div className="flex gap-2 justify-center my-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="w-10 h-10 text-center text-white bg-[#0b195e] rounded"
                        />
                    ))}
                </div>

                {/* Resend and Submit */}
                <div className="mt-2 flex px-4 items-center justify-between">
                    <p className="text-xs text-gray-400 text-center hover:underline cursor-pointer">
                        Resend Code
                    </p>
                    <button
                        onClick={handleLogin}
                        className="bgPinkColor px-10 py-1.5 rounded-full text-white hoverPinkColor hover:border hover:border-pink-600"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpModal;
