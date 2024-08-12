"use client";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useCharacterBox } from "@/hooks/game";
import type { CharacterBoxProps } from "@/types/CharacterBox";
import { alphabetRegex } from "@/constants/game";

export default function CharacterBox({
	keysDown,
	attemptColors,
	...props
}: CharacterBoxProps & {
	keysDown: Map<string, boolean>;
	attemptColors: string[][];
}) {
	const { rowIndex, columnIndex } = props;
	const { isCurrentWord, isCurrentCharacter, character, attemptExists } =
		useCharacterBox(props);
	const attemptColor = useMemo(() => {
		if (attemptExists) return attemptColors[rowIndex][columnIndex];
		return "";
	}, [attemptColors, rowIndex, columnIndex, attemptExists]);
	const isKeyDown = Array.from(keysDown.keys()).some((key) =>
		key.match(alphabetRegex),
	);

	return (
		<div
			data-testid={`column-${columnIndex}`}
			className={twMerge(
				"flex size-10 items-center justify-center rounded border-2 border-primary-500 bg-card font-black uppercase text-text transition-all sm:size-16 sm:text-2xl dark:border-primary-200 dark:bg-card-200",
				isCurrentWord && "!bg-card-600",
				attemptColor == "gray" && "border-opacity-25 !bg-card-400",
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
