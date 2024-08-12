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
			data-testid={`hint-character`}
			key={index}
			className="flex flex-col gap-4 text-2xl font-black uppercase text-text"
		>
			{attemptFoundCharacter || cheatExists ? (
				<div
					className={twMerge(
						"flex size-6 animate-toptobottom items-center justify-center",
						cheatExists && "text-green-600",
					)}
				>
					{character}
				</div>
			) : (
				<div className="size-6"></div>
			)}
			<div className="h-0.5 w-full bg-primary"></div>
		</div>
	);
}
