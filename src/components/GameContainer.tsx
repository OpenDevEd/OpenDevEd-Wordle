"use client";
import { twMerge } from "tailwind-merge";
import { useGameState } from "@/hooks/game";
import Grid from "@/components/Grid";
import Hearts from "@/components/Hearts";

export default function GameContainer({ presetWord }: { presetWord?: string }) {
	const {
		attempts,
		setAttempts,
		attemptColors,
		setAttemptColors,
		randomWord,
		setRandomWord,
		resetGame,
		setResetGame,
		showGrid,
		heartsLeft,
		results,
		setResults,
		savedHistory,
		setSavedHistory,
	} = useGameState(presetWord);

	return (
		<main className="flex h-svh flex-col">
			<div className="flex-1 overflow-hidden bg-background dark:bg-background-100">
				<div className="relative flex h-full animate-popin items-center justify-center">
					<Grid
						resetGame={resetGame}
						setResetGame={setResetGame}
						showGrid={showGrid}
						setAttempts={setAttempts}
						attempts={attempts}
						randomWord={randomWord}
						attemptColors={attemptColors}
						setAttemptColors={setAttemptColors}
						setRandomWord={setRandomWord}
						heartsLeft={heartsLeft}
						savedHistory={savedHistory}
						setSavedHistory={setSavedHistory}
						setResults={setResults}
					/>
					<div
						data-testid="end-screen"
						onClick={resetGame ?? undefined}
						className={twMerge(
							"absolute inset-0 flex flex-1 translate-x-full scale-0 select-none flex-col items-center justify-center gap-12 opacity-0 transition-all duration-500 sm:flex-row",
							!showGrid && "-translate-x-0 scale-100 opacity-100",
						)}
					>
						<div className="flex flex-col text-[3rem] font-black uppercase text-text">
							<h1>
								{results?.gameState === "win"
									? "You win!"
									: "You lose!"}
							</h1>
							<Hearts heartsLeft={results?.heartsLeft || 0} />
						</div>
						<div className="h-[0.05rem] w-full bg-text sm:h-44 sm:w-[0.05rem]"></div>
						<div className="flex flex-col items-center sm:items-start">
							<p className="text-2xl font-bold text-text">
								The word was
								<span className="ml-2 text-2xl font-black text-text-400">
									{results?.randomWord}
								</span>
								.
							</p>
							<p className="font-light text-text-400">
								Press any key or tap to play again.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
