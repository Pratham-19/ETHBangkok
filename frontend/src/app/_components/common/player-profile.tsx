import { FunctionComponent, useState, useCallback } from "react";
import PortalPopup from "./portal-popup";
import ProfileModal from "./profile-modal";

export type PlayerProfileType = {
  className?: string;
};

const PlayerProfile: FunctionComponent<PlayerProfileType> = ({
  className = "",
}) => {
  const [isModalvrOpen, setModalvrOpen] = useState(false);

  const openModalvr = useCallback(() => {
    setModalvrOpen(true);
  }, []);

  const closeModalvr = useCallback(() => {
    setModalvrOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch rounded-lg bg-purple-600 border-rainbow border-[2px] border-solid box-border overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-[0.562rem] px-[0.625rem] gap-[0.625rem] min-h-[7rem] cursor-pointer text-left text-[2rem] text-primary   ${className}`}
        onClick={openModalvr}
      >
        <img
          className="h-[5rem] w-[5rem] relative rounded-tl-2xl rounded-tr-81xl rounded-b-81xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/teams2@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-center gap-[0.25rem] min-w-[9.438rem]">
          <h1 className="m-0 self-stretch relative text-inhfont-semiboldabold  ">
            UserName
          </h1>
          <div className="relative text-[0.75rem] overflow-hidden text-ellipsis whitespace-nowrap">
            Building in web3, catching all the tokens.
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[8.125rem] gap-[0.25rem] text-[1rem]">
            <img
              className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/tablericonwallet.svg"
            />
            <div className="relative">$1,553.06</div>
          </div>
        </div>
      </div>
      {isModalvrOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalvr}
        >
          <ProfileModal onClose={closeModalvr} />
        </PortalPopup>
      )}
    </>
  );
};

export default PlayerProfile;
