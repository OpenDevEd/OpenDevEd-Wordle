import { twMerge } from "tailwind-merge";

export default function HintCharacter({
	index,
	randomWord,
	attempts,
	cheats,
}: {
	index: number;
	randomWord: string;
	attempts: string[];
	cheats: string[];
}) {
	const character = randomWord[index];
	const attemptFoundCharacter = attempts.find(
		(attempt) => attempt[index] === character,
	);
	const cheatExists = cheats[index] === character;

	return (
		<div
			key={index}
			className="text-text flex flex-col gap-4 text-2xl font-black uppercase"
		>
			{attemptFoundCharacter || cheatExists ? (
				<div
					className={twMerge(
						"animate-toptobottom flex size-6 items-center justify-center",
						cheatExists && "text-green-600",
					)}
				>
					{character}
				</div>
			) : (
				<div className="size-6"></div>
			)}
			<div className="bg-primary h-0.5 w-full"></div>
		</div>
	);
}
