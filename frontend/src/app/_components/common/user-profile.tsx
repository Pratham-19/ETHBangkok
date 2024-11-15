import { FunctionComponent } from "react";
import Menu from "./menu";

export type UserProfileType = {
  className?: string;
};

const UserProfile: FunctionComponent<UserProfileType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch rounded-lg bg-purple-800 border-primary border-[2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[0.312rem] px-[0.375rem] gap-[1rem] min-h-[10.5rem] text-left text-[1.5rem] text-primary font-h3 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem]">
        <img
          className="h-[5rem] w-[5rem] relative rounded-tl-2xl rounded-tr-81xl rounded-b-81xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/teams1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] box-border min-w-[10.75rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <h1 className="m-0 relative text-inherit font-extrabold font-[inherit]">
                UserName
              </h1>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-[0.75rem] text-mint">
                <div className="self-stretch h-[1.5rem] rounded bg-purple-800 border-rainbow border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.125rem] pl-[0.5rem] pr-[0.312rem]">
                  <div className="relative inline-block min-w-[4.438rem]">
                    Active Chest
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[1rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[0.25rem]">
                <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/tablericonflag3filled.svg"
                  />
                </div>
                <div className="relative inline-block min-w-[7.313rem]">
                  Earning LP Fees
                </div>
              </div>
              <div className="self-stretch h-[0.5rem] rounded-81xl border-primary border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
                <div className="h-full w-[3.313rem] absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] bg-primary overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu property1="Default" back={false} />
    </section>
  );
};

export default UserProfile;
