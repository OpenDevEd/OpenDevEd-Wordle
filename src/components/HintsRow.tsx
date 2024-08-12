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
			playSound("deny");
			return;
		}
		playSound("correct", 0.5);
		setCheats(newArray);
	}, [attempts, randomWord, cheats, setCheats, playSound]);

	return (
		<div className="flex select-none gap-4 sm:gap-8">
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
				data-testid="hint-button"
				onClick={addCheat}
				className="relative flex size-11 cursor-pointer items-center justify-center rounded-full bg-primary-400 transition-all hover:bg-primary-300 active:scale-95"
			>
				<Lightbulb className="stroke-text" />
			</div>
		</div>
	);
}
