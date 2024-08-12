import { Delete } from "lucide-react";
import KeyboardKey from "./KeyboardKey";
import { twMerge } from "tailwind-merge";
import { InputFunction } from "@/types/game";
import { KeyboardKeys } from "@/constants/game";

export default function KeyboardContainer({
	handleKeyDown,
	handleKeyUp,
	keysDown,
	attempts,
	randomWord,
}: {
	handleKeyDown: InputFunction;
	handleKeyUp: InputFunction;
	keysDown: Map<string, boolean>;
	attempts: string[];
	randomWord: string;
}) {
	return (
		<div className="flex w-screen max-w-screen-sm flex-col items-center gap-1 px-4 sm:px-10">
			<KeyboardKey
				attempts={attempts}
				randomWord={randomWord}
				keyboardKey={"backspace"}
				downFunction={handleKeyDown}
				upFunction={handleKeyUp}
				keysDown={keysDown}
				className="ml-auto gap-2"
			>
				<div className="flex h-12 items-center justify-center gap-2 px-4">
					<Delete /> Backspace
				</div>
			</KeyboardKey>
			{KeyboardKeys.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className={twMerge(
						"flex w-full gap-1",
						rowIndex == 1 && "px-4",
						rowIndex == 2 && "px-16",
					)}
				>
					{row.map((key, keyIndex) => (
						<KeyboardKey
							attempts={attempts}
							randomWord={randomWord}
							keyboardKey={key}
							keysDown={keysDown}
							downFunction={handleKeyDown}
							upFunction={handleKeyUp}
							key={keyIndex}
						>
							{key}
						</KeyboardKey>
					))}
				</div>
			))}
		</div>
	);
}
