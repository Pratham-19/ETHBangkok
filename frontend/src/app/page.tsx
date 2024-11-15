"use client";
import { useCallback, useState } from "react";
import NotificationTop from "./_components/common/notification-top";
import PortalPopup from "./_components/common/portal-popup";
import TapModal from "./_components/common/tap-modal";
import UserProfile from "./_components/common/user-profile";

export default function Home() {
	const [isTapModalOpen, setTapModalOpen] = useState(false);

	const openTapModal = useCallback(() => {
		setTapModalOpen(true);
	}, []);

	const closeTapModal = useCallback(() => {
		setTapModalOpen(false);
	}, []);
	return (
		<>
			<div className="w-full relative overflow-hidden flex flex-col items-start justify-end pt-[39.25rem] px-[0.5rem] pb-[0.5rem] box-border gap-[1rem] bg-[url('/public/main@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
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
				<UserProfile />
			</div>
			{isTapModalOpen && (
				<PortalPopup
					overlayColor="rgba(113, 113, 113, 0.3)"
					placement="Centered"
					onOutsideClick={closeTapModal}
				>
					<TapModal onClose={closeTapModal} />
				</PortalPopup>
			)}
		</>
	);
}
