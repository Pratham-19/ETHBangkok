"use client";
import React, { useState, useEffect } from "react";
import MapComponent from "@/app/_components/map/map";
import { User, Token, Crate } from "@/types/types";

export default function PlayableMap() {
  // State for the current user
  const [currentUser, setCurrentUser] = useState<User>({
    id: "current",
    latitude: 0, // Default value until geolocation is retrieved
    longitude: 0, // Default value until geolocation is retrieved
    name: "You",
    avatarUrl: "/game-assets/pp-dog.png",
  });

  // List of other users on the map
  const users: User[] = [
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
  ];

  // Tokens available on the map
  const tokens: Token[] = [
    {
      id: "1",
      latitude: 13.723239281363,
      longitude: 100.55939609285565,
      symbol: "SHIB",
      name: "Shiba Inu",
      logoUrl: "/game-assets/token-pic.png",
      backgroundColor: "#8A2BE2",
    },
    // {
    //   id: "2",
    //   latitude: 13.723702,
    //   longitude: 100.55939609285565,
    //   symbol: "USDT",
    //   name: "Tether",
    //   logoUrl:
    //     "https://www.iconarchive.com/download/i109679/cjdowner/cryptocurrency-flat/Tether-USDT.1024.png",
    //   backgroundColor: "#28A745",
    // },
  ];

  // Crates available on the map
  const crates: Crate[] = [
    {
      id: "1",
      latitude: 13.726441,
      longitude: 100.55939609285565,
    },
  ];

  // Function to handle clicking on a user
  const handleUserClick = (user: User) => {
    console.log("User clicked:", user);
    // Add your user interaction logic here
  };

  // Function to handle clicking on a token
  const handleTokenClick = (token: Token) => {
    console.log("Token clicked:", token);
    // Add your token interaction logic here
  };

  // Fetch the current user's location using the browser's geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentUser((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error("Error retrieving geolocation:", error);
        }
      );
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <MapComponent
        tokens={tokens}
        crates={crates}
        users={users}
        currentUser={currentUser}
        onTokenClick={handleTokenClick}
        onUserClick={handleUserClick}
      />
    </main>
  );
}
