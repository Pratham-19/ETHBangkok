"use client";
import ChatComponent from "@/app/_components/common/ai-chat";
import ChatStrip from "@/app/_components/common/chat-strip";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="self-stretch flex flex-col gap-y-4">
        <ChatStrip time="0h" userName="UserName" id="" summaryEnabled={false} />
        <div>
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}
