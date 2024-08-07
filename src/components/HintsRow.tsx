"use client";
import { WORD_LENGTH } from "@/constants/game";
import { useAudio } from "@/hooks/game";
import { newCheat } from "@/utils/game";
import { useCallback } from "react";
import HintCharacter from "./HintCharacter";
import { Lightbulb } from "lucide-react";

export default function HintsRow({
	randomWord,
	attempts,
	cheats,
	setCheats,
}: {
	randomWord: string;
	attempts: string[];
	cheats: string[];
	setCheats: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const { playSound } = useAudio();

	const addCheat = useCallback(() => {
		const newArray = newCheat(attempts, randomWord, cheats);
		if (newArray === cheats) {
			playSound("/deny.mp3");
			return;
		}
		playSound("/correct.wav", 0.5);
		setCheats(newArray);
	}, [attempts, randomWord, cheats, setCheats, playSound]);

	return (
		<div className="flex gap-8">
			{Array(WORD_LENGTH)
				.fill(null)
				.map((_, index) => (
					<HintCharacter
						key={index}
						index={index}
						randomWord={randomWord}
						attempts={attempts}
						cheats={cheats}
					/>
				))}
			<div
				onClick={addCheat}
				className="bg-primary-400 hover:bg-primary-300 relative flex size-11 cursor-pointer items-center justify-center rounded-full transition-all active:scale-95"
			>
				<Lightbulb className="stroke-text" />
			</div>
		</div>
	);
}
