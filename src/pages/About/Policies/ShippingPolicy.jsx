import React from "react";
import { Link } from "react-router-dom";

function ShippingPolicy() {
    return (
       <div className="min-h-screen">
       
                   {/* Breadcrumbs */}
                   <div className="bgPinkColor text-white text-sm sm:text-base md:text-lg py-2">
                       <div className="container mx-auto px-4 md:px-12 flex flex-wrap items-center gap-1 sm:gap-2">
                           <Link to="/" className="px-2 sm:px-3 py-1 hover:underline">Home</Link>
                           <span className="text-white">&gt;</span>
                           <Link to="/about-us" className="px-2 sm:px-3 py-1 hover:underline">About Us</Link>
                           <span className="text-white">&gt;</span>
                           <span className="px-2 sm:px-3 py-1">Privacy Policy</span>
                       </div>
                   </div>

            <div className="w-full container mx-auto px-4 md:px-20 py-10">


                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Shipping Policy</h1>

                <p className="text-gray-400 mb-5">
                    At Wooziee, we’re committed to delivering a smooth, secure, and instant ticketing experience. Since all our event tickets are digital, here’s how our shipping and delivery process works:
                    </p>

                {/* 1. Ticket Delivery Method */}
                <div className="mb-2">
                    <span className="font-semibold text-gray-300">1. Ticket Delivery Method</span>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>All tickets purchased on Wooziee are delivered electronically.</li>
                        <li>E-Tickets will be sent to your registered email address immediately upon successful payment.</li>
                        <li>You can also access your tickets anytime via your Wooziee account dashboard under  &quot;My Tickets.&quot;</li>
                        <li>A QR code or unique ticket ID will be included, which must be presented at the venue for entry (either printed or displayed on your mobile device).</li>
                    </ul>
                </div>

                {/* 2. Delivery Time */}
                <div className="mb-2 mt-3">
                    <span className="font-semibold text-gray-300">2. Delivery Time</span>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>Most tickets are delivered within 5-10 minutes of payment confirmation.</li>
                        <li>
                           In rare cases (due to system delays or high traffic), delivery may take up to 1 hour. If you haven’t received your ticket after 1 hour, please contact our support team.
                        </li>
                    </ul>
                </div>

                {/* 3. Delivery Charges */}
                <div className="mb-2 mt-3">
                    <span className="font-semibold text-gray-300">3. Delivery Charges</span>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>Free Delivery: As our tickets are digital, there are no delivery charges involved.</li>
                    </ul>
                </div>

                {/* 4. Issues with Delivery */}
                <div className="mb-2 mt-3">
                    <span className="font-semibold text-gray-300">4. Issues with Delivery</span>
                    <p className="text-gray-400">If you haven’t received your ticket or are facing trouble accessing it:</p>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>Double-check your email inbox (and spam folder).</li>
                        <li>Log into your Wooziee account and go to &quot;My Tickets.&quot;</li>
                        <li>Still no luck? Reach out to us at <a href="mailto:team@wooziee.com" className="text-gray-300 underline">team@wooziee.com</a>  or use the live chat on our website.</li>
                    </ul>
                </div>

                {/* 5. Physical Merchandise */}
                <div className="mb-2 mt-3">
                    <span className="font-semibold text-gray-300">5. Physical Merchandise or Tickets (if applicable)</span>
                    <p className="text-gray-400">If Wooziee offers any physical merchandise or printed tickets in the future:</p>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>Standard and express shipping options will be available at checkout.</li>
                        <li>Shipping charges and estimated delivery time will be clearly displayed before you make the payment.</li>
                        <li>You will receive a tracking link once the package is shipped.</li>
                    </ul>
                </div>

                {/* 6. Event Cancellation */}
                <div className="mb-2 mt-3">
                    <span className="font-semibold text-gray-300">6. Event Cancellation or Rescheduling</span>
                    <p className="text-gray-400">If an event is canceled or rescheduled, Wooziee will notify all ticket holders via email with further instructions. Depending on the organizer’s policy, this may include:</p>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>Full refund</li>
                        <li>Ticket transfer to a new date</li>
                        <li>Credit for future events</li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="border-t border-gray-600 mt-6 pt-4">
                    <p className="text-gray-400">Need Help?  </p>
                    <span className="text-gray-400">Our support team is available 24/7 at </span>
                    <a href="mailto:team@wooziee.com" className="text-gray-300 underline">team@wooziee.com</a>
                </div>
            </div>
        </div>
    );
}

export default ShippingPolicy;
