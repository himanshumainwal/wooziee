import { createContext, useContext, useState } from "react";

const AdminSidebarContext = createContext();

export const AdminSidebarProvider = ({ children }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showTicketsModal, setShowTicketsModal] = useState(false);
  const [showCouponsModal, setShowCouponsModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showAccountSettingsModal, setShowAccountSettingsModal] = useState(false);


 const [user, setUser] = useState({
  name: "Himanshu",
  email: "himanshu@example.com",
  phone: "9876543210",
  avatar: "/images/artist3.png"
});

const updateUser = (newUserData) => {
  setUser(prev => ({ ...prev, ...newUserData }));
};

  const toggleAdminSidebar = (value) => {
    if (typeof value === "function") {
      setIsAdminOpen(value);
    } else {
      setIsAdminOpen(!!value);
    }
  };

  return (
    <AdminSidebarContext.Provider value={{
      isAdminOpen,
      toggleAdminSidebar,
      showTicketsModal,
      setShowTicketsModal,
      showCouponsModal,
      setShowCouponsModal,
      showNotificationsModal,
      setShowNotificationsModal,
      showAccountSettingsModal,
      setShowAccountSettingsModal,
      user,  // ✅ Add this line
      updateUser
    }}>
      {children}
    </AdminSidebarContext.Provider>
  );
};

export const useAdminSidebar = () => useContext(AdminSidebarContext);
