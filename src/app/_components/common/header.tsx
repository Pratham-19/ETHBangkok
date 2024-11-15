import Image from "next/image";
import React from "react";

export default function Header() {
	return (
		<div className="flex items-center justify-center gap-3">
			<Image
				src="/logo.svg"
				alt="alt"
				width={500}
				height={500}
				className="size-10"
			/>
			<h1 className="bg-rainbow bg-clip-text text-transparent font-semibold">
				appName
			</h1>
		</div>
	);
}
