import { Link } from "react-router-dom";
import enjoy from "/images/enjoy.png";
import party from "/images/party.png";
import { GiPartyPopper } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";







const About = () => {
    return (
        <div className="bg-[#0A0A1F] text-white overflow-hidden">
            {/* Marquee Section */}
            <div className="relative">
                <img
                    src={enjoy}
                    alt="Event Banner"
                    className="w-full  h-60 sm:h-72 md:h-80 object-center object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  bg-pink-600/55 backdrop-blur-md py-4 overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee min-w-full">
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                    </div>
                    <div className="inline-block animate-marquee min-w-full absolute right-0 left-full">
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                        <span className="mx-6 text-lg font-medium"><GiPartyPopper className="inline-block mr-2" /> Where Events Come Alive</span>
                    </div>
                </div>

            </div>

            {/* Hero Section */}
            <section className="pt-20 container mx-auto pb-16 px-4 md:px-10 lg:px-24">


                <div className="w-full flex justify-center py-4 mb-10">
                    <div className="w-full max-w-6xl flex flex-col md:flex-row justify-evenly items-center gap-2 md:gap-x-6 rounded-lg px-4 py-3 bg-gray-800/80 shadow-[0_4px_10px_0_rgba(255,255,255,0.3)] border border-gray-700 text-center">

                        <Link to="/policies/privacy-policy" className="text-gray-200 text-base md:text-lg hoverPinkColor transition-colors">
                            Privacy Policy
                        </Link>

                        <span className="hidden md:inline text-gray-500">|</span>

                        <Link to="/policies/terms-and-conditions" className="text-gray-200 text-base md:text-lg hoverPinkColor transition-colors">
                            Terms & Conditions
                        </Link>

                        <span className="hidden md:inline text-gray-500">|</span>

                        <Link to="/policies/shipping-policy" className="text-gray-200 text-base md:text-lg hoverPinkColor transition-colors">
                            Shipping Policy
                        </Link>

                        <span className="hidden md:inline text-gray-500">|</span>

                        <Link to="/policies/refund-policy" className="text-gray-200 text-base md:text-lg hoverPinkColor transition-colors">
                            Refund Policy
                        </Link>

                    </div>
                </div>

                <div className="max-w-6xl flex flex-col md:flex-row gap-16 justify-between">
                    {/* Image */}
                    <img
                        src={party}
                        alt="Party"
                        className="rounded-lg shadow-lg object-cover w-full h-[250px] sm:h-[300px]"
                    />

                    {/* Content */}
                    <div className="w-full md:w-[80%] h-full">
                        <h2 className="text-2xl md:text-3xl font-bold mb-5">
                            Experience Seamless <br />
                            Ticketing With
                            <span className="textPinkColor pl-1">Wooziee</span>
                        </h2>
                        <p className="text-gray-300 text-md leading-relaxed mt-4">
                            Wooziee is your go-to destination for seamless ticketing. Whether you're buying tickets for your next concert, securely reselling passes, or organizing your own event, Wooziee makes the process fast, secure, and stress-free. From live shows to exclusive events, Wooziee puts the power of ticketing in your hands. Enjoy a smooth, reliable experience—every step of the way.
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mt-16 text-center">
                    <div className="p-6 w-full max-w-md rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_10px_0_rgba(255,255,255,0.3)] ">
                        <h2 className="text-center text-xl font-semibold textPinkColor mb-2">Easy Purchases</h2>
                        <p className="text-center text-white/90">Buy tickets effortlessly for your favorite events.</p>
                    </div>
                    <div className="p-6 w-full max-w-md rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_10px_0_rgba(255,255,255,0.3)] ">
                        <h4 className="text-center text-xl font-semibold textPinkColor mb-2">Secure Resale</h4>
                        <p className="text-center text-white/90">Sell your tickets conveniently and securely.</p>
                    </div>
                    <div className="p-6 w-full max-w-md rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_10px_0_rgba(255,255,255,0.3)] ">
                        <h4 className="text-center text-xl font-semibold textPinkColor mb-2">Event Management</h4>
                        <p className="text-center text-white/90">Manage your events with our comprehensive tools.</p>
                    </div>
                </div>
            </section>

            {/* Why Wooziee */}
            <section className="bgPinkColor py-16 px-8 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Why Wooziee?
                </h2>

                <div className="max-w-5xl  container mx-auto grid gap-10 md:grid-cols-3 relative">
                    {[
                        {
                            title: "Hassle-Free Ticketing",
                            desc: "Enjoy a smooth ticketing experience tailored for event enthusiasts and organizers.",
                            img: "/images/party.png",
                            num: "1",
                        },
                        {
                            title: "Reliable Resale Marketplace",
                            desc: "Sell and buy tickets securely in our trusted marketplace designed for event lovers.",
                            img: "/images/concert.png",
                            num: "2",
                        },
                        {
                            title: "Comprehensive Organizer Tools",
                            desc: "Empowering organizers with essential tools for managing successful events effortlessly.",
                            img: "/images/comedy.png",
                            num: "3",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="shadow-xl relative z-10 group"
                        >
                            {/* Big Number in Background */}
                            <span className="absolute text-[120px] font-bold text-white/30 -bottom-16 -left-10 pointer-events-none z-0">
                                {item.num}
                            </span>

                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-52 object-cover object-center rounded-t-xl z-10 relative"
                            />

                            <div className="bg-[#0f0f24] h-1/2 rounded-b-xl relative z-10 px-4 md:px-7 py-4">
                                {/* Title */}
                                <h3 className="text-white w-3/4 font-semibold text-2xl mb-2 leading-tight">
                                    <span>
                                        {item.title.split(" ").slice(0, -1).join(" ")}
                                    </span>
                                    {" "}
                                    <span className="textPinkColor">
                                        {item.title.split(" ").slice(-1)}
                                    </span>
                                </h3>


                                {/* Description */}
                                <p className="text-sm text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Description */}
            <section className="py-12 px-4 md:px-10 lg:px-24 bg-[#0f0f24] text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                    <div className="text-md md:w-2/3 leading-relaxed text-gray-200">
                        <p>
                            Wooziee is a dynamic ticketing and event discovery app designed to make attending and hosting events seamless, social, and exciting. Whether you're a concert enthusiast, partygoer, or organizer, Wooziee helps you discover the hottest happenings around, grab tickets in seconds, and even create your own events effortlessly.
                        </p>
                        <p className="mt-4">
                            From underground gigs to mainstream festivals, Wooziee keeps you in the loop with personalized recommendations, real-time updates, and a smooth, clutter-free booking experience. With built-in community features, share plans with friends, RSVP with a tap, and never miss a beat.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="text-white flex flex-col justify-center items-center md:w-1/3">
                        <h4 className="md:text-3xl text-[42px] font-semibold mb-4">Follow Us:</h4>
                        <div className="flex gap-4 text-xl">
                            <Link to="#" className="md:text-4xl text-6xl hover:text-pink-500"><RiInstagramFill /></Link>
                            <Link to="#" className="md:text-4xl text-6xl hover:text-pink-500"><FaLinkedin /></Link>
                            <Link to="#" className="md:text-4xl text-6xl hover:text-pink-500"><FaSquareXTwitter /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
