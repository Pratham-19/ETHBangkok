// ChatComponent.jsx
"use client";
import { useEffect, useState } from "react";
import { Client } from "@xmtp/browser-sdk";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { MousePointer2Icon, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/app/_components/ui/alert";

const ChatComponent = ({ peerAddress, primaryWallet }: any) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const [client, setClient] = useState(null);
	const [conversation, setConversation] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isSending, setIsSending] = useState(false);

	// Initialize XMTP client
	useEffect(() => {
		const initXmtp = async () => {
			if (!primaryWallet || !peerAddress) {
				setIsLoading(false);
				return;
			}

			try {
				setIsLoading(true);
				setError(null);

				// Create a signer
				const signer = {
					getAddress: () => primaryWallet.address,
					signMessage: async (message) =>
						primaryWallet.signMessage(message),
				};

				// Create XMTP client without encryption
				const xmtpClient = await Client.create(signer, { env: "dev" });
				setClient(xmtpClient);

				// Start conversation
				const conv = await xmtpClient.conversations.newDm(peerAddress);
				setConversation(conv);

				// Load existing messages
				const msgs = await conv.messages();
				setMessages(msgs);

				// Stream new messages
				const stream = await conv.streamMessages();

				(async () => {
					try {
						for await (const message of stream) {
							setMessages((prev) => [...prev, message]);
						}
					} catch (streamError) {
						console.error("Message stream error:", streamError);
						setError("Lost connection to chat. Please refresh.");
					}
				})();
			} catch (error) {
				console.error("XMTP initialization error:", error);
				setError(error.message || "Failed to initialize chat");
			} finally {
				setIsLoading(false);
			}
		};

		initXmtp();
	}, [primaryWallet, peerAddress]);

	const sendMessage = async () => {
		if (!newMessage.trim() || !client || !conversation || isSending) return;

		try {
			setIsSending(true);
			await conversation.send(newMessage);
			setNewMessage("");
		} catch (error) {
			console.error("Failed to send message:", error);
			setError("Failed to send message. Please try again.");
		} finally {
			setIsSending(false);
		}
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-[calc(100svh-17rem)] bg-purple-800">
				<Loader2 className="w-8 h-8 text-white animate-spin" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="h-[calc(100svh-17rem)] bg-purple-800 p-4">
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			</div>
		);
	}

	if (!primaryWallet) {
		return (
			<div className="h-[calc(100svh-17rem)] bg-purple-800 p-4">
				<Alert>
					<AlertDescription>
						Please connect your wallet to chat.
					</AlertDescription>
				</Alert>
			</div>
		);
	}

	return (
		<div className="flex flex-col h-[calc(100svh-17rem)] bg-purple-800">
			<div className="flex-1 p-4 overflow-auto space-y-4">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={`max-w-[75%] p-3 rounded-lg ${
							msg.senderAddress === client?.address
								? "ml-auto bg-purple-600"
								: "bg-purple-700"
						}`}
					>
						<p className="text-white break-words">{msg.content}</p>
						<span className="text-xs text-gray-300 mt-1 block">
							{new Date(msg.sentAt).toLocaleTimeString()}
						</span>
					</div>
				))}
			</div>

			<div className="p-4 bg-purple-400 flex gap-2">
				<Input
					value={newMessage}
					onChange={(e: any) => setNewMessage(e.target.value)}
					onKeyDown={(e: any) =>
						e.key === "Enter" && !e.shiftKey && sendMessage()
					}
					placeholder="Type a message..."
					className="flex-1 bg-purple-800 text-white"
					disabled={isSending}
				/>
				<Button
					onClick={sendMessage}
					className="bg-primary rounded-full"
					disabled={isSending}
				>
					{isSending ? (
						<Loader2 className="w-4 h-4 animate-spin" />
					) : (
						<MousePointer2Icon className="rotate-90" />
					)}
				</Button>
			</div>
		</div>
	);
};

export default ChatComponent;
