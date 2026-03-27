import { useAdminSidebar } from "../../../context/AdminSidebarContext";
import AdminSidebar from "./AdminSidebar";
import ViewTicketsModal from "./ViewTicketsModal";
import ViewCouponsModal from "./ViewCouponsModal";
import NotificationsModal from "./NotificationsModal";
import AccountSettingsModal from "./AccountSettingsModal";

const GlobalOverlays = () => {
    const {
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
    } = useAdminSidebar();

    return (
        <>
            {/* Admin Sidebar */}
            {isAdminOpen && (
                <AdminSidebar
                    onBack={() => toggleAdminSidebar(false)}
                    onOpenTickets={() => {
                        setShowTicketsModal(true);
                        toggleAdminSidebar(false);
                    }}
                    onOpenCoupons={() => {
                        setShowCouponsModal(true);
                        toggleAdminSidebar(false);
                    }}
                    onOpenNotifications={() => {
                        setShowNotificationsModal(true);
                        toggleAdminSidebar(false);
                    }}
                    setShowAccountSettingsModal={() => {
                        setShowAccountSettingsModal(true);
                        toggleAdminSidebar(false);
                    }}
                />
            )}

            {/* View Tickets Modal */}
            {showTicketsModal && (
                <ViewTicketsModal onBack={() => setShowTicketsModal(false)} />
            )}

            {/* View Coupons Modal */}
            {showCouponsModal && (
                <ViewCouponsModal onBack={() => setShowCouponsModal(false)} />
            )}
            {/* View Notifications Modal */}
            {showNotificationsModal && (
                <NotificationsModal onBack={() => setShowNotificationsModal(false)} />
            )}
            {/* View AccountSettings Modal */}
            {showAccountSettingsModal && (
                <AccountSettingsModal onBack={() => setShowAccountSettingsModal(false)} />
            )}
        </>
    );
};

export default GlobalOverlays;
