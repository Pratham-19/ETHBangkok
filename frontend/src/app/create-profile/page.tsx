"use client";
import React, { useCallback, useState, useEffect } from "react";
import ThemeButton from "../_components/common/theme-button";
import Icon from "../_components/common/icon";
import Notificationheader from "../_components/common/notificationheader";
import { Input } from "../_components/ui/input";
import ImageUploader from "../_components/common/image-uploader";
import FrameComponent from "../_components/common/frame-component";
import {
  useDynamicContext,
  useSocialAccounts,
} from "@dynamic-labs/sdk-react-core";
import { ProviderEnum } from "@dynamic-labs/types";
import { useRouter } from "next/navigation";

interface UserProfile {
  username: string;
  profileImage: string;
  team?: {
    primary: string;
    secondary: string;
  };
  isWorldcoinVerified: boolean;
}

export default function CreateProfilePage() {
  const router = useRouter();
  const { user } = useDynamicContext();
  const { error: socialError, signInWithSocialAccount } = useSocialAccounts();

  // const [isLoading, setIsLoading] = useState(true);
  const [showTeamSelection, setShowTeamSelection] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  // Only store minimal profile data in localStorage
  const [profileData, setProfileData] = useState<UserProfile>({
    username: "",
    profileImage: "",
    isWorldcoinVerified: false,
  });
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
  }, []);

  // useEffect(() => {
  //   const checkExistingProfile = async () => {
  //     try {
  //       const savedProfile = localStorage.getItem("userProfile");
  //       if (savedProfile) {
  //         const parsedProfile = JSON.parse(savedProfile);
  //         setProfileData(parsedProfile);

  //         if (!parsedProfile.team) {
  //           setShowTeamSelection(true);
  //         } else {
  //           router.push("/intro");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Profile check error:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkExistingProfile();
  // }, [router]);

  const saveProfile = useCallback((profile: UserProfile) => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, []);

  const handleConnect = async (provider: ProviderEnum) => {
    if (!signInWithSocialAccount || isConnecting) return;

    setIsConnecting(true);
    setConnectionError(null);

    try {
      await signInWithSocialAccount(provider);
    } catch (err) {
      console.error(`Failed to connect ${provider}:`, err);
      setConnectionError(`Failed to connect ${provider}. Please try again.`);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedProfile = {
      ...profileData,
      username: e.target.value,
    };
    setProfileData(updatedProfile);
    saveProfile(updatedProfile);
  };

  const handleImageUpload = (imageUrl: string) => {
    const updatedProfile = {
      ...profileData,
      profileImage: imageUrl,
    };
    setProfileData(updatedProfile);
    saveProfile(updatedProfile);
  };

  const handleTeamSelect = useCallback(
    (selection: { primary: string; secondary: string }) => {
      const updatedProfile = {
        ...profileData,
        team: selection,
      };
      setProfileData(updatedProfile);
      saveProfile(updatedProfile);
      router.push("/intro");
    },
    [profileData, saveProfile, router]
  );

  const handleSkip = () => {
    setShowTeamSelection(true);
  };

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center bg-purple-800">
  //       <div className="text-white">Loading...</div>
  //     </div>
  //   );
  // }
  useEffect(() => {
    if (user) {
      setShowTeamSelection(true);
    }
  }, [user]);
  const socialButtons = [
    {
      text: "Connect X",
      icon: "/tablericonbrandx.svg",
      onClick: () => handleConnect(ProviderEnum.Twitter),
    },
    {
      text: profileData.isWorldcoinVerified
        ? "Verified  World ID"
        : "VerifyWorld ID",
      icon: "/worldcoinlogo-1.svg",
      onClick: undefined,
    },
    {
      text: "Connect Google",
      icon: "/icon-google.svg",
      onClick: () => handleConnect(ProviderEnum.Google),
    },
    {
      text: "Coinbase Login",
      icon: "/coinbase-logo-1.svg",
      onClick: undefined,
    },
  ];

  return (
    <div className="size-full relative bg-purple-800 overflow-y-auto flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
      <div>
        <Notificationheader />
      </div>
      {!showTeamSelection ? (
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
                Join token trek with any of the following accounts and start
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
