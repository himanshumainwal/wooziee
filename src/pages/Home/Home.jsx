// import Navbar from "../../components/Navbar/Navbar";
import React, { useRef, useState } from "react";
import HeroSection from "../../components/HomePageComponent/HeroSection";
import CategorySection from "../../components/HomePageComponent/CategorySection";
import Artists from "../../components/HomePageComponent/Artists";
import EventSlider from "../../components/HomePageComponent/EventSlider";
import CTASection from "../../components/HomePageComponent/CTASection";
import { sampleEvents, artistData, categoryData } from "../../data/events"; // 🔥 Importing sample events data
// import Footer from "../../components/Footer/Footer";


const Home = () => {
  const eventSliderRef = useRef(null);

  return (
    <div className="bg-[#020218] text-white min-h-screen">
      {/* <Navbar setShowAdmin={setIsAdminSidebarOpen} /> */}
      <HeroSection scrollToRef={eventSliderRef}  />
      <CategorySection title="Categories" categories={categoryData} />

      {/* Event Slider */}
      {/* Using the ref to scroll to the event slider when needed */}
      <div ref={eventSliderRef} className="">
        <EventSlider title="Top Picks" events={sampleEvents} />
      </div>

      <EventSlider title="Upcoming Events" events={sampleEvents} />
      <CTASection />

      <EventSlider title="Events Near You" events={sampleEvents} />
      {/* <CategorySection title="Artists Near You" categories={artistData} /> */}
      <Artists title="Artists Near You" artistData={artistData} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
