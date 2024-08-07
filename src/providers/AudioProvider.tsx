"use client";
import { createContext, useRef } from "react";

export const AudioContextProvider = createContext({});

export default function AudioProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	const playSound = (
		sound: string | null,
		volume: number = 1,
		skipAhead: number = 0,
	) => {
		if (!containerRef.current) return;
		if (!sound) return;

		const audio = new Audio();
		audio.volume = volume;
		audio.currentTime = skipAhead;
		audio.src = sound;
		audio.load();
		audio.play();
	};

	return (
		<AudioContextProvider.Provider
			value={{
				playSound,
			}}
		>
			<div ref={containerRef} className="hidden"></div>
			{children}
		</AudioContextProvider.Provider>
	);
}
