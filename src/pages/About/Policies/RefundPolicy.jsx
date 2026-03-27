// RefundPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";

function RefundPolicy() {
    return (
        <div className="min-h-screen">

            {/* Breadcrumbs */}
            <div className="bgPinkColor text-white text-sm sm:text-base md:text-lg py-2">
                <div className="container mx-auto px-4 md:px-12 flex flex-wrap items-center gap-1 sm:gap-2">
                    <Link to="/" className="px-2 sm:px-3 py-1 hover:underline">Home</Link>
                    <span className="text-white">&gt;</span>
                    <Link to="/about-us" className="px-2 sm:px-3 py-1 hover:underline">About Us</Link>
                    <span className="text-white">&gt;</span>
                    <span className="px-2 sm:px-3 py-1">Cancellations & Refunds Policy</span>
                </div>
            </div>


            <div className="w-full container mx-auto px-4 md:px-20 py-10">

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Cancellations & Refunds Policy</h1>

                <p className="text-gray-400 mb-4">
                    At Wooziee, we strive to offer a seamless and transparent ticketing experience. Please read our cancellation and refund policy carefully before booking tickets through our platform.
                </p>

                {/* 1. Can I Cancel My Ticket? */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">1. Can I Cancel My Ticket ?</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        As a general rule, tickets once booked on Wooziee are non-cancellable and non-refundable unless the event organizer explicitly allows cancellations.
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>
                            If the organizer permits cancellations, it will be mentioned on the event page under the <strong>“Refund Policy”</strong> section.
                        </li>
                        <li>
                            If eligible, cancellation requests must be made at least 24 hours before the event start time.
                        </li>
                    </ul>
                </div>

                {/* 2. Refunds for Event Cancellations or Postponements */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">2. Refunds for Event Cancellations or Postponements</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        In the unlikely event that an event is cancelled, rescheduled, or significantly changed, the following applies:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>
                            <strong>cancelled Events:</strong> A full refund will be issued automatically to your original payment method within 7-10 business days.
                        </li>
                        <li>
                            <strong>Rescheduled Events:</strong> Your ticket will remain valid for the new date. If you’re unable to attend, you may request a refund by contacting us.
                        </li>
                        <li>
                            <strong>Changes to Line-up/Venue:</strong> Partial or full refunds may be offered depending on the extent of changes and the organizer’s discretion.
                        </li>
                    </ul>
                </div>

                {/* 3. Refund Process */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">3. Refund Process</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        If your booking qualifies for a refund:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Refunds are processed to the original payment method (credit/debit card, UPI, net banking, etc.).</li>
                        <li>Refund timelines vary by bank/payment gateway but typically take 7-10 business days.</li>
                        <li>You will receive a confirmation email once your refund has been initiated.</li>
                    </ul>
                </div>

                {/* 4. Service Fees */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">4. Service Fees</h2>
                <div className="text-gray-400 mb-4">
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>
                            Wooziee’s service and convenience fees are non-refundable, unless the event is cancelled or there is a technical fault on our end.
                        </li>
                    </ul>
                </div>

                {/* 5. Exceptions */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">5. Exceptions</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        We reserve the right to deny refund requests if:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>The event occurred as scheduled and there was no fault in ticket delivery.</li>
                        <li>You failed to attend the event due to personal reasons.</li>
                        <li>The refund request is made after the event has passed.</li>
                    </ul>
                </div>

                {/* 6. How to Request a Refund */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">6. How to Request a Refund</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        To check your eligibility or request a refund, contact us at:
                    </p>
                    <p>
                        📧{" "}
                        <a href="mailto:team@wooziee.com" className="text-gray-400 underline">
                            team@wooziee.com
                        </a>
                    </p>
                </div>


                <div className="text-gray-400 mb-4">
                    <p>When reaching out, please include:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Your registered email ID</li>
                        <li>Event name</li>
                        <li>Ticket order ID</li>
                        <li>Reason for refund request</li>
                    </ul>
                </div>

{/* 7. Organizer-Initiated Refunds */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">7. Organizer-Initiated Refunds</h2>
                <p className="text-gray-400 mb-4">
                    In some cases, event organizers may offer their own refund terms. In such cases, Wooziee will act as a facilitator, and refunds will be processed as per the organizer’s instructions.
                </p>

                {/* <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-gray-400">
                    Last updated: July 22, 2025
                </div> */}
            </div>
        </div>
    );
}

export default RefundPolicy;
