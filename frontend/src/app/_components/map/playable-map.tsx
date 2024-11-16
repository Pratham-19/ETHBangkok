"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import MapComponent from "@/app/_components/map/map";
import TapModal from "@/app/_components/common/tap-modal";
import { User, Token, Crate } from "@/types/types";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/app/_components/ui/dialog";
import ThemeButton from "../common/theme-button";
import RainbowBorder from "../common/rainbow-border";
import Image from "next/image";

export default function PlayableMap() {
	// Static data memoization remains the same
	const users = useMemo<User[]>(
		() => [
			{
				id: "1",
				latitude: 13.719483,
				longitude: 100.558878,
				name: "Alice",
				avatarUrl: "/u1.png",
			},
			{
				id: "2",
				latitude: 13.722651,
				longitude: 100.555686,
				name: "Bob",
				avatarUrl: "/u2.png",
			},
		],
		[]
	);

	const tokens = useMemo<Token[]>(
		() => [
			{
				id: "1",
				latitude: 13.723239281363,
				longitude: 100.55939609285565,
				symbol: "SHIB",
				name: "Shiba Inu",
				logoUrl: "/game-assets/token-pic.png",
				backgroundColor: "#8A2BE2",
			},
		],
		[]
	);

	const crates = useMemo<Crate[]>(
		() => [
			{
				id: "1",
				latitude: 13.726441,
				longitude: 100.55939609285565,
			},
		],
		[]
	);

	// State management
	const [currentUser, setCurrentUser] = useState<User>({
		id: "current",
		latitude: 0,
		longitude: 0,
		name: "You",
		avatarUrl: "/game-assets/pp-dog.png",
	});

	const [modalState, setModalState] = useState({
		isOpen: false,
		selectedItem: null as User | Token | null,
	});

	// Memoized handlers
	const handleUserClick = useCallback((user: User) => {
		setModalState({
			isOpen: true,
			selectedItem: user,
		});
	}, []);

	const handleTokenClick = useCallback((token: Token) => {
		setModalState({
			isOpen: true,
			selectedItem: token,
		});
	}, []);

	const handleModalClose = useCallback(() => {
		setModalState({
			isOpen: false,
			selectedItem: null,
		});
	}, []);

	// Geolocation effect
	useEffect(() => {
		if (!navigator.geolocation) return;

		const successHandler = (position: GeolocationPosition) => {
			setCurrentUser((prev) => ({
				...prev,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			}));
		};

		const errorHandler = (error: GeolocationPositionError) => {
			console.error("Error retrieving geolocation:", error);
		};

		navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
	}, []);

	// Memoize MapComponent props
	const mapProps = useMemo(
		() => ({
			tokens,
			crates,
			users,
			currentUser,
			onTokenClick: handleTokenClick,
			onUserClick: handleUserClick,
		}),
		[tokens, crates, users, currentUser, handleTokenClick, handleUserClick]
	);

	return (
		<>
			<main className="flex flex-col items-center justify-center h-screen">
				<MapComponent {...mapProps} />
			</main>

			<Dialog
				open={modalState.isOpen}
				onOpenChange={(open) => !open && handleModalClose()}
			>
				<DialogContent className="bg-transparent border-none">
					<DialogTitle className="sr-only">
						{modalState.selectedItem?.name || "Item Details"}
					</DialogTitle>
					<div className="mb-4">
						{modalState.selectedItem && (
							<div className="space-y-4">
								{"avatarUrl" in modalState.selectedItem && (
									<RainbowBorder>
										<div className="w relative rounded-lg bg-purple-800 overflow-hidden flex flex-col items-center justify-between gap-y-2 py-[11px] px-3 max-w-full max-h-full text-left text-13xl text-primary font-h3">
											<h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit]">
												{modalState.selectedItem.name}
											</h1>
											<Image
												className="size-46 rounded-[3000px] overflow-hidden shrink-0 object-cover"
												alt={`${modalState.selectedItem.name}'s profile picture`}
												src={
													modalState.selectedItem
														.avatarUrl
												}
												width={500}
												height={500}
											/>
											<h3 className="m-0 relative text-5xl font-semibold font-[inherit]">
												Building in web3, catching all
												the tokens.
											</h3>
											<div className="flex flex-row items-center justify-center gap-1 text-base">
												<div className="flex flex-row items-center justify-center py-2 px-[29px]">
													<DialogClose className="relative inline-block min-w-[37px] data-[state=open]:ring-none">
														Back
													</DialogClose>
												</div>
												<ThemeButton
													text="Send Request"
													defaultPadding="8px 16px"
													defaultGap="2px"
													tablerIconBrandX="/tablericonhearthandshake1.svg"
													tablerIconBrandXWidth="24px"
													brandLabelHeight="21px"
													brandLabelDisplay="inline-block"
													brandLabelFontSize="14px"
													brandLabelWidth="unset"
												/>
											</div>
										</div>
									</RainbowBorder>
								)}
								{"logoUrl" in modalState.selectedItem && (
									<img
										src={modalState.selectedItem.logoUrl}
										alt={modalState.selectedItem.name}
										className="w-20 h-20 rounded-full mx-auto"
									/>
								)}
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
