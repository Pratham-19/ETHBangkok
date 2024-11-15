"use client";
import { FunctionComponent } from "react";
import Notificationheader from "../_components/common/notificationheader";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../_components/ui/tabs";
import NotificationComponent from "../_components/common/notificaitons-component";
import Menu from "../_components/common/menu";

const Completed: FunctionComponent = () => {
	return (
		<div className="w-full h-screen flex flex-col bg-purple-800 overflow-hidden">
			{/* Notification Header */}
			<Notificationheader
				notificationheaderBackdropFilter="blur(30px)"
				notificationheaderBackgroundColor="rgba(26, 1, 26, 0.3)"
				notificationheaderHeight="4.688rem"
				notificationheaderPadding="1rem 0rem"
				notificationheaderGap="0.5rem"
				notificationheaderAlignSelf="stretch"
				notificationheaderWidth="unset"
				tablerIcon3dCubeSphereHeight="2.5rem"
				tablerIcon3dCubeSphereWidth="2.5rem"
				appNameMargin="0"
				appNameTextDecoration="unset"
				appNameFontSize="2rem"
			/>

			{/* Quest Title and Tabs */}
			<section className="flex flex-col items-start p-4 text-left text-primary font-h3">
				<h1 className="text-5xl font-extrabold mb-4">Quest</h1>

				{/* Shadcn Tabs */}
				<Tabs defaultValue="completed" className="w-full">
					<TabsList className="flex gap-2 mb-4 bg-purple-600 h-fit rounded-full">
						<TabsTrigger
							value="completed"
							className="flex-1 text-center rounded-full font-extrabold text-[1.5rem] 
					   transition-colors duration-300 
					   bg-primary text-primary
					   data-[state=active]:bg-primary data-[state=active]:text-purple-900
					   data-[state=inactive]:bg-purple-600"
						>
							Completed
						</TabsTrigger>
						<TabsTrigger
							value="ongoing"
							className="flex-1 text-center rounded-full font-extrabold text-[1.5rem]
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

			{/* Bottom Menu */}
			<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
				<Menu property1="Default" back to="/" />
			</div>
		</div>
	);
};

export default Completed;
