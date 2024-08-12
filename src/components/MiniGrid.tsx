import { MAX_ATTEMPTS, WORD_LENGTH } from "@/constants/game";
import { twMerge } from "tailwind-merge";

export default function MiniGrid({
	attempts,
	colors,
	word,
}: {
	attempts: string[];
	colors: string[][];
	word: string;
}) {
	return (
		<div className="flex flex-col gap-1">
			{Array(MAX_ATTEMPTS)
				.fill(Array(WORD_LENGTH).fill(null))
				.map((row: string[], rowIndex) => (
					<div key={rowIndex} className="flex gap-1">
						{row.map((_, columnIndex) => {
							const letter = attempts[rowIndex]?.[columnIndex];
							const color = colors[rowIndex]?.[columnIndex];
							return (
								<div
									key={columnIndex}
									className={twMerge(
										"flex size-10 items-center justify-center rounded border-2 border-primary-500 border-opacity-25 bg-card font-black uppercase text-text",
										letter && "bg-card-400",
										color === "green" && "bg-green-600",
										color === "yellow" && "bg-yellow-600",
										!letter && "opacity-50",
									)}
								>
									{letter ?? ""}
								</div>
							);
						})}
					</div>
				))}
		</div>
	);
}
