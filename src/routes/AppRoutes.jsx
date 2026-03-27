import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import TicketSelectionPage from "../pages/Home/PaymentPages/TicketSelectionPage";
import PaymentPage from "../pages/Home/PaymentPages/PaymentPage";
import BookingSuccess from "../pages/Home/PaymentPages/BookingSuccess";
import EventDetail from "../pages/Home/EventDetailPage/EventDetail";
import FeatureCards from "../pages/Home/FeatureCards/FeatureCards";
import ArtistProfile from "../pages/Home/ArtistProfile/ArtistProfile";
import VisionPage from "../pages/VisionPage/VisionPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import ShippingPolicy from "../pages/About/Policies/ShippingPolicy";
import TermsAndConditions from "../pages/About/Policies/TermsAndConditions";
import PrivacyPolicy from "../pages/About/Policies/PrivacyPolicy";
import RefundPolicy from "../pages/About/Policies/RefundPolicy";
import PartnerDashboard from "../pages/Dashboard/PartnerDashboard";
import PartnerDashboardForm from "../pages/Dashboard/PartnerDashboardForm";
// import AdminSidebar from "../components/HomePageComponent/ProfileDetails/AdminSidebar";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetail />} />

      <Route path="/event/:id/book" element={<TicketSelectionPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/booking-success" element={<BookingSuccess />} />

      <Route path="/feature-cards" element={<FeatureCards />} />
      
      <Route path="/artist-profile/:id" element={<ArtistProfile />} />

      {/* Vision Page */}
      <Route path="/vision" element={<VisionPage />} />

      {/* Dashboard  */}
      <Route path="/dashboard" element={<Dashboard /> } />
      <Route path="/partner-dashboard" element={<PartnerDashboard />} />
      <Route path="/partner-dashboard-form" element={<PartnerDashboardForm />} />


      {/* About  */}
      <Route path="/about-us" element={<About /> } />
      <Route path="/policies/shipping-policy" element={<ShippingPolicy /> } />
      <Route path="/policies/terms-and-conditions" element={<TermsAndConditions /> } />
      <Route path="/policies/privacy-policy" element={<PrivacyPolicy /> } />
      <Route path="/policies/refund-policy" element={<RefundPolicy /> } />

      {/* <Route path="/profile" element={<AdminSidebar />} /> */}
    </Routes>
  );
};

export default AppRoutes;
