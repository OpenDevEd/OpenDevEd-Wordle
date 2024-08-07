export type AudioContextReturn = {
	playSound: (
		sound: string | null,
		volume?: number,
		skipAhead?: number,
	) => void;
};
