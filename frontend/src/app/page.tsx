"use client";
import { useCallback, useState } from "react";
import NotificationTop from "./_components/common/notification-top";
import PortalPopup from "./_components/common/portal-popup";
import TapModal from "./_components/common/tap-modal";
import UserProfile from "./_components/common/user-profile";
import PlayableMap from "./_components/map/playable-map";

export default function Home() {
  const [isTapModalOpen, setTapModalOpen] = useState(false);

  const openTapModal = useCallback(() => {
    setTapModalOpen(true);
  }, []);

  const closeTapModal = useCallback(() => {
    setTapModalOpen(false);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
   
      {/* <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <NotificationTop
          property1="Default"
          category="meme"
          cta="Share"
          description="our most recent post"
          time="0h"
          title="TokenName"
          collected={false}
          land={false}
          map
          participants={false}
          pool={false}
          tokens
          showNotification
          to="/quest"
          showChips={false}
        />
      </div> */}

      {/* UserProfile */}
      <div className="absolute bottom-4 left-4 z-50">
        <UserProfile />
      </div>

      {/* Map */}
      <div className="absolute inset-0 z-10">
        <PlayableMap />
      </div>

      {/* TapModal */}
      {isTapModalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTapModal}
        >
          <TapModal onClose={closeTapModal} />
        </PortalPopup>
      )}
    </div>
  );
}
