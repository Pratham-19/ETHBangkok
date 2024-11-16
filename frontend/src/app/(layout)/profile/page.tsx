"use client";

import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import ThemeButton from "../../_components/common/theme-button";
import Menu from "../../_components/common/menu";
import PlayerProfile from "../../_components/common/player-profile";
import PlayerSkins from "../../_components/common/player-skins";
import PlayerTokens from "../../_components/common/player-tokens";

const Profile: FunctionComponent = () => {
  return (
    <div>
      <section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0.375rem] pb-[2.937rem] box-border gap-[1rem] max-w-full">
        <PlayerProfile />
        <PlayerSkins />

        <PlayerTokens />
      </section>
    </div>
  );
};

export default Profile;
