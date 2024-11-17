"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/tabs";
import NotificationComponent from "../../_components/common/notificaitons-component";
import { useAccount } from "wagmi";

// Interface for completed quest data
interface CompletedQuest {
  timestamp: number;
  transactionHash: string;
}

const Completed: FunctionComponent = () => {
  const { address } = useAccount();
  const [completedQuests, setCompletedQuests] = useState<CompletedQuest[]>([]);

  // Load completed quests from localStorage on component mount
  useEffect(() => {
    if (address) {
      const storageKey = `quest_completions_${address}`;
      const storedQuests = localStorage.getItem(storageKey);
      if (storedQuests) {
        setCompletedQuests(JSON.parse(storedQuests));
      }
    }
  }, [address]);

  return (
    <div>
      {/* Quest Title and Tabs */}
      <section className="flex flex-col items-start p-4 text-left text-primary">
        <h1 className="text-5xl font-semibold mb-4">Quest</h1>

        {/* Shadcn Tabs */}
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="flex gap-2 mb-4 bg-purple-600 h-fit rounded-full">
            <TabsTrigger
              value="completed"
              className="flex-1 text-center rounded-full font-semibold text-[1.5rem] 
                 transition-colors duration-300 
                 bg-primary text-primary
                 data-[state=active]:bg-primary data-[state=active]:text-purple-900
                 data-[state=inactive]:bg-purple-600"
            >
              Completed ({completedQuests.length})
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="flex-1 text-center rounded-full font-semibold text-[1.5rem]
                 transition-colors duration-300 
                 bg-purple-600 text-primary 
                 data-[state=active]:bg-primary 
                 data-[state=inactive]:bg-purple-600"
            >
              Ongoing
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto w-full space-y-4">
            <TabsContent value="completed">
              {completedQuests.length > 0 ? (
                <div className="space-y-4">
                  {completedQuests.map((quest, index) => (
                    <NotificationComponent
                      key={quest.transactionHash}
                      title="Quest Completed"
                      category="DeFi"
                      time={formatTimeAgo(quest.timestamp)}
                      cta="You got rewarded!"
                      description={`Transaction: ${quest.transactionHash.slice(0, 6)}...${quest.transactionHash.slice(-4)}`}
                      collected={true}
                      tickerOne="$SHIB"
                      tickerTwo=""
                      link=""
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No completed quests yet
                </div>
              )}
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="text-center py-8 text-gray-400">
                No ongoing quests available
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </div>
  );
};

// Helper function to format time ago
const formatTimeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
};

export default Completed;