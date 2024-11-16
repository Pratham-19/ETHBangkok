"use client";
import { FunctionComponent, useCallback } from "react";
import ChatStrip from "../../_components/common/chat-strip";

const Friends: FunctionComponent = () => {
  return (
    <div>
      <section className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.437rem] pr-[0.375rem] box-border max-w-full text-left text-[2rem] text-primary  ">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold  ">
            0x Frens
          </h1>
          <div className="self-stretch h-[37.25rem] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
            <ChatStrip
              time="0h"
              userName="UserName"
              summay="Last message summary here"
              id="1"
              summaryEnabled={true}
            />
            <ChatStrip
              time="0h"
              userName="UserName"
              summay="Last message summary here"
              id="2"
              summaryEnabled={true}
            />
            <ChatStrip
              time="0h"
              userName="UserName"
              summay="Last message summary here"
              id="3"
              summaryEnabled={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friends;
