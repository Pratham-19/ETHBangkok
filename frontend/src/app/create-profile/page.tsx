"use client";
import React, { useCallback, useState, useEffect } from "react";
import ThemeButton from "../_components/common/theme-button";
import Icon from "../_components/common/icon";
import Notificationheader from "../_components/common/notificationheader";
import { Input } from "../_components/ui/input";
import ImageUploader from "../_components/common/image-uploader";
import FrameComponent from "../_components/common/frame-component";
import { useSocialAccounts } from "@dynamic-labs/sdk-react-core";
import { ProviderEnum } from "@dynamic-labs/types";
import { useRouter } from "next/navigation";

interface ProfileData {
  username: string;
  profileImage: string;
  team: {
    primary: string;
    secondary: string;
  } | null;
  connectedAccounts: {
    twitter: boolean;
    worldcoin: boolean;
    google: boolean;
    farcaster: boolean;
    ethGlobal: boolean;
  };
}

interface TeamSelection {
  primary: string;
  secondary: string;
}

export default function CreateProfilePage() {
  const router = useRouter();
  const {
    error: socialError,
    isProcessing,
    signInWithSocialAccount,
    isLinked,
    getLinkedAccountInformation,
  } = useSocialAccounts();

  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData>({
    username: "",
    profileImage: "/profile-picture@3x.png",
    team: null,
    connectedAccounts: {
      twitter: false,
      worldcoin: false,
      google: false,
      farcaster: false,
      ethGlobal: false,
    },
  });

  const [next, setNext] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  // Check authentication status and redirect if necessary
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (typeof isLinked === "function") {
          const isTwitterConnected = isLinked(ProviderEnum.Twitter);

          if (isTwitterConnected) {
            // Get Twitter account information if available
            const accountInfo = getLinkedAccountInformation?.(
              ProviderEnum.Twitter
            );
            console.log("Twitter account info:", accountInfo);

            // Redirect to intro page if connected
            router.push("/intro");
            return;
          }

          // Update local state if not redirecting
          setProfileData((prev) => ({
            ...prev,
            connectedAccounts: {
              ...prev.connectedAccounts,
              twitter: isTwitterConnected,
            },
          }));
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setConnectionError("Failed to check authentication status");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [isLinked, getLinkedAccountInformation, router]);

  const handleConnect = async (provider: ProviderEnum) => {
    if (!signInWithSocialAccount || isConnecting) return;

    setIsConnecting(true);
    setConnectionError(null);

    try {
      await signInWithSocialAccount(provider);

      if (provider === ProviderEnum.Twitter) {
        // After successful connection, redirect to intro page
        router.push("/intro");
      }
    } catch (err) {
      console.error(`Failed to connect ${provider}:`, err);
      setConnectionError(`Failed to connect ${provider}. Please try again.`);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setProfileData((prev) => ({
      ...prev,
      profileImage: imageUrl,
    }));
  };

  const handleTeamSelect = useCallback(
    (selection: TeamSelection) => {
      setProfileData((prev) => ({
        ...prev,
        team: selection,
      }));
      router.push("/intro");
    },
    [router]
  );

  const handleSkip = () => {
    setNext(true);
  };

  // If initial loading, show loading state
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-purple-800">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Social connection buttons configuration
  const socialButtons = [
    {
      text: profileData.connectedAccounts.twitter ? "Connected" : "Connect X",
      icon: "/tablericonbrandx.svg",
      onClick: () => handleConnect(ProviderEnum.Twitter),
      isConnected: profileData.connectedAccounts.twitter,
    },
    {
      text: "World Connect",
      icon: "/worldcoinlogo-1.svg",
      onClick: undefined,
      isConnected: profileData.connectedAccounts.worldcoin,
    },
    {
      text: "Google Login",
      icon: "/icon-google.svg",
      onClick: undefined,
      isConnected: profileData.connectedAccounts.google,
    },
    {
      text: "Coinbase Login",
      icon: "/coinbase-logo-1.svg",
      onClick: undefined,
      isConnected: profileData.connectedAccounts.farcaster,
    },
  ];

  return (
    <div className="size-full relative bg-purple-800 overflow-y-auto flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
      <div>
        <Notificationheader />
      </div>
      {!next ? (
        <>
          <section className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[2rem] max-w-full text-left text-[1rem] text-primary  ">
            <h1 className="m-0 self-stretch relative text-[2rem] font-semibold  ">
              Create Profile
            </h1>
            <div className="self-stretch flex flex-col items-center justify-start text-[1.5rem] text-thistle">
              <ImageUploader onImageUpload={handleImageUpload} />
              <div className="self-stretch rounded-lg bg-purple-600 flex flex-col items-start justify-start p-[0.75rem] z-[1] mt-[-1.75rem] gap-2">
                <Input
                  type="text"
                  placeholder="Add User Name_"
                  value={profileData.username}
                  onChange={handleUsernameChange}
                  className="bg-transparent border-none text-primary placeholder:text-thistle focus-visible:ring-purple-400 text-2xl font-semibold  "
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="relative">
                Join 0xCity with any of the following accounts and start
                exploring to earn!
              </div>
              {connectionError && (
                <div className="text-red-500 text-sm">{connectionError}</div>
              )}
              <div className="self-stretch grid grid-cols-2 gap-[1rem] text-highlight">
                {socialButtons.map((button, index) => (
                  <div
                    key={index}
                    onClick={button.onClick}
                    className={`${button.onClick && !isConnecting ? "cursor-pointer" : "cursor-not-allowed"}`}
                  >
                    <ThemeButton
                      btn="large"
                      text={button.text}
                      className="w-full whitespace-nowrap text-ellipsis overflow-hidden"
                      tablerIconBrandX={button.icon}
                      defaultGap={"0.3rem"}
                    />
                  </div>
                ))}
              </div>
              <div className="self-stretch">
                <ThemeButton
                  btn="large"
                  text="Connect ETHGlobal Wristband"
                  tablerIconBrandX="/icon-ethglobal.svg"
                  defaultGap={"0.5rem"}
                />
              </div>
            </div>
            <div className="z-50 flex justify-center px-4">
              <div className="w-full max-w-md">
                <div className="self-stretch flex flex-row items-start justify-center gap-[1rem] max-w-full">
                  <div className="flex-1 relative inline-block min-w-[12.125rem] max-w-full box-border pl-[1.25rem] pr-[1.25rem]">
                    Save profile and continue without connecting accounts.
                  </div>
                  <div onClick={handleSkip}>
                    <Icon
                      property1="def"
                      tablerIconArrowBigRight="/tablericonarrowbigright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <h1 className="m-0 self-stretch relative text-[2rem] text-center font-semibold text-[#ffc9f3]">
            Join a team
          </h1>
          <section className="self-stretch h-[39.875rem] flex flex-col items-start justify-start gap-[1rem]">
            <FrameComponent
              to="/intro"
              frameDivBackgroundImage="url('/frame-26@3x.png')"
              amber="Amber"
              rootBackgroundImage="url('/root@3x.png')"
              azure="Azure"
              onTeamSelect={() =>
                handleTeamSelect({
                  primary: "Amber",
                  secondary: "Azure",
                })
              }
              isSelected={profileData.team?.primary === "Amber"}
            />
            <FrameComponent
              to="/intro"
              frameDivBackgroundImage="url('/frame-25@3x.png')"
              amber="Emerald"
              rootBackgroundImage="url('/frame-23@3x.png')"
              azure="Ruby"
              onTeamSelect={() =>
                handleTeamSelect({
                  primary: "Emerald",
                  secondary: "Ruby",
                })
              }
              isSelected={profileData.team?.primary === "Emerald"}
            />
          </section>
        </>
      )}
    </div>
  );
}
