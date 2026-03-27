import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AdminSidebarProvider } from "./context/AdminSidebarContext";
import GlobalOverlays from "./components/HomePageComponent/ProfileDetails/GlobalOverlays";

function App() {
  return (
    <AdminSidebarProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
        {/* 👇 Global AdminSidebar and Modal, visible across all pages */}
        <GlobalOverlays />
      </BrowserRouter>
    </AdminSidebarProvider>
  );
}

export default App;
