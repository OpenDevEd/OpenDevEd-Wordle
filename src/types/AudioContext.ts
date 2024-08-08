import { SFX } from "@/constants/game";

export type AudioContextReturn = {
	playSound: (
		sound: keyof typeof SFX,
		volume?: number,
		skipAhead?: number,
	) => void;
};
