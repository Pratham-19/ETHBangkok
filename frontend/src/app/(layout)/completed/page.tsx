"use client";
import { FunctionComponent } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../_components/ui/tabs";
import NotificationComponent from "../../_components/common/notificaitons-component";
import Menu from "../../_components/common/menu";

const Completed: FunctionComponent = () => {
	return (
		<div>
			{/* Quest Title and Tabs */}
			<section className="flex flex-col items-start p-4 text-left text-primary font-h3">
				<h1 className="text-5xl font-semibold mb-4">Quest</h1>

				{/* Shadcn Tabs */}
				<Tabs defaultValue="completed" className="w-full">
					<TabsList className="flex gap-2 mb-4 bg-purple-600 h-fit rounded-full">
						<TabsTrigger
							value="completed"
							className="flex-1 text-center rounded-full font-semibold text-[1.5rem] 
					   transition-colors duration-300 
					   bg-primary text-primary
					   data-[state=active]:bg-primary data-[state=active]:text-purple-900
					   data-[state=inactive]:bg-purple-600"
						>
							Completed
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
							{/* List of completed notifications */}
							<div className="space-y-4">
								<NotificationComponent
									title="CoinName"
									category="DeFi"
									time="0h"
									cta="You got rewarded!"
									description="You got rewarded!"
									collected={true}
									tickerOne="$TKN1"
									tickerTwo="$TKN2"
									link="uniswap"
								/>
							</div>
						</TabsContent>

						<TabsContent value="ongoing">
							{/* List of ongoing notifications */}
							<div className="space-y-4">
								<NotificationComponent
									title="CoinName"
									category="DeFi"
									time="1h"
									cta="You got rewarded!"
									description="You got rewarded!"
									collected={true}
									tickerOne="$TKN1"
									tickerTwo="$TKN2"
									link="uniswap"
								/>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</section>
		</div>
	);
};

export default Completed;
