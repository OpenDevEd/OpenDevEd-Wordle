"use client";
import { SFX } from "@/constants/game";
import { createContext } from "react";

export const AudioContextProvider = createContext({});

export default function AudioProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const playSound = (
		sound: keyof typeof SFX,
		volume: number = 1,
		skipAhead: number = 0,
	) => {
		if (!sound) return;

		const audio = new Audio(SFX[sound]);
		audio.volume = volume;
		audio.currentTime = skipAhead;
		audio.play();
	};

	return (
		<AudioContextProvider.Provider
			value={{
				playSound,
			}}
		>
			{Object.values(SFX).map((sound) => (
				<audio preload="auto" src={sound} key={sound} />
			))}
			{children}
		</AudioContextProvider.Provider>
	);
}
