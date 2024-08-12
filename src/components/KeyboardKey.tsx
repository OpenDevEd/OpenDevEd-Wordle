import { InputFunction } from "@/types/game";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function KeyboardKey({
	keysDown,
	keyboardKey,
	downFunction,
	upFunction,
	children,
	className,
	attempts,
	randomWord,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	keysDown: Map<string, boolean>;
	keyboardKey: string;
	downFunction: InputFunction;
	upFunction: InputFunction;
	attempts: string[];
	randomWord: string;
}) {
	const alreadyUsed = attempts.some((attempt) =>
		attempt.includes(keyboardKey),
	);
	const alreadyUsedAndCorrectPlacement =
		alreadyUsed &&
		attempts.some((attempt) => {
			const index = randomWord.indexOf(keyboardKey);
			return attempt[index] === keyboardKey;
		});
	const alreadyUsedAndExists =
		!alreadyUsedAndCorrectPlacement &&
		alreadyUsed &&
		randomWord.includes(keyboardKey);

	return (
		<div
			onMouseDown={() => downFunction({ key: keyboardKey })}
			onMouseUp={() => upFunction({ key: keyboardKey })}
			onMouseLeave={() => {
				if (keysDown.has(keyboardKey)) upFunction({ key: keyboardKey });
			}}
			className={twMerge(
				"text-md flex h-12 flex-1 cursor-pointer select-none items-center justify-center rounded bg-card font-black uppercase text-text transition-all hover:bg-card-400 active:scale-95",
				className,
				keysDown.has(keyboardKey) && "scale-95 brightness-50",
				alreadyUsed && "bg-card-200",
				alreadyUsedAndExists && "bg-yellow-600",
				alreadyUsedAndCorrectPlacement && "bg-green-600",
			)}
			{...props}
		>
			{children}
		</div>
	);
}
