"use client";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useCharacterBox } from "@/hooks/game";
import type { CharacterBoxProps } from "@/types/CharacterBox";

export default function CharacterBox({
	isKeyDown,
	attemptColors,
	...props
}: CharacterBoxProps & { isKeyDown: boolean; attemptColors: string[][] }) {
	const { rowIndex, columnIndex } = props;
	const { isCurrentWord, isCurrentCharacter, character, attemptExists } =
		useCharacterBox(props);
	const attemptColor = useMemo(() => {
		if (attemptExists) return attemptColors[rowIndex][columnIndex];
		return "";
	}, [attemptColors, rowIndex, columnIndex, attemptExists]);

	return (
		<div
			className={twMerge(
				"border-primary-500 bg-card text-text dark:border-primary-200 dark:bg-card-200 flex size-16 items-center justify-center rounded border-2 text-2xl font-black uppercase transition-all",
				isCurrentWord && "bg-card-600",
				attemptColor == "gray" && "!bg-card-400 border-opacity-25",
				attemptColor == "yellow" && "border-opacity-25 !bg-yellow-600",
				attemptColor == "green" && "border-opacity-25 !bg-green-600",
				isCurrentCharacter && isKeyDown && "scale-90",
			)}
		>
			{character.length > 0 && (
				<div className="animate-lefttoright">{character}</div>
			)}
		</div>
	);
}
