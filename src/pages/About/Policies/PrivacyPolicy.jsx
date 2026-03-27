// PrivacyPolicy.jsx

import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
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

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>

                <div className="text-gray-400 mb-4">
                    <p>
                        Wooziee website is owned by Wooziee Technologies Pvt Ltd, which is a data controller of your personal data.
                    </p>
                    <p>
                        We have adopted this Privacy Policy, which determines how we are processing the information collected by Wooziee, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using Wooziee website.
                    </p>
                    <p>
                        We take care of your personal data and undertake to guarantee its confidentiality and security..
                    </p>
                </div>

                {/* Personal Information We Collect */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Personal Information We Collect</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        When you visit the Wooziee, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as  <strong>“Device Information.”</strong>
                    </p>
                    <p>
                        Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
                    </p>
                </div>

                {/* Why Do We Process Your Data ? */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Why Do We Process Your Data ?</h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
                    </p>
                    <p>
                        You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via <a
                            href="mailto:team@wooziee.com"
                            className="text-gray-300 underline"
                        >
                            team@wooziee.com
                        </a>.
                    </p>
                </div>

                {/* Your Rights */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Your Rights </h2>
                <div className="text-gray-400 mb-4">
                    <p>
                        If you are a European resident, you have the following rights related to your personal data:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>The right to be informed</li>
                        <li>The right of access</li>
                        <li>The right to rectification</li>
                        <li>The right to erasure</li>
                        <li>The right to restrict processing</li>
                        <li>The right to data portability</li>
                        <li>The right to object</li>
                        <li>Rights in relation to automated decision-making and profiling.</li>
                    </ul>
                </div>

                <div className="text-gray-400 mb-4">
                    <p>
                        If you would like to exercise this right, please contact us through the contact information below.
                    </p>
                    <p>
                        Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
                    </p>
                </div>

                {/* Links to other websites: */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Links to Other Websites</h2>
                <p className="text-gray-400 mb-4">
                    Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                </p>

                {/* Information security: */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Information Security</h2>
                <p className="text-gray-400 mb-4">
                    We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                </p>

                {/* Data Deletion */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Data Deletion</h2>
                <div className="text-gray-400 mb-4">
                    <p>Data that can be deleted by users.</p>
                    <ul className="list-disc list-inside text-gray-400 ml-3 mt-1 space-y-1">
                        <li>
                            Delete app account
                            <p>
                                You can submit a request to delete your account and associated data for this app  {" "}
                                <a href="https://wooziee.com/privacy-policy" blank_target="_blank" rel="noopener noreferrer" className="text-gray-300 underline"> https://wooziee.com/privacy-policy</a>.
                            </p>
                        </li>
                        <li>
                            Manage app data
                            <p>
                                You can submit a request to delete certain data that the developer collected through this app, without deleting your entire account. This data can include things like activity history, transaction history and images and video.  {" "} <a href="https://wooziee.com/privacy-policy" blank_target="_blank" rel="noopener noreferrer" className="text-gray-300 underline"> https://wooziee.com/privacy-policy</a>.

                            </p>
                        </li>
                    </ul>
                </div>

                {/* Legal disclosure: */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Legal disclosure</h2>
                <p className="text-gray-400 mb-4">
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </p>

                {/* Contact Information */}
                <h2 className="text-xl font-semibold text-gray-300 mt-6 mb-2">Contact Information</h2>
                <p className="text-gray-400 mb-4">
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to email to {" "}
                    <a href="mailto:team@wooziee.com" className="text-gray-300 underline">team@wooziee.com</a>.
                </p>

                {/* <div className="mt-8 border-t border-gray-600 pt-3 text-sm text-gray-400">
                    Last updated: July 22, 2025
                </div> */}
            </div>
        </div>
    );
}

export default PrivacyPolicy;
