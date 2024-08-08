"use client";
import { twMerge } from "tailwind-merge";
import { useAudio, useGameState } from "@/hooks/game";
import Grid from "@/components/Grid";
import Hearts from "@/components/Hearts";
import { useEffect } from "react";

export default function Home() {
	const {
		attempts,
		setAttempts,
		randomWord,
		setRandomWord,
		resetGame,
		setResetGame,
		gameState,
		showGrid,
		heartsLeft,
		results,
		setResults,
	} = useGameState();
	const { playSound } = useAudio();

	useEffect(() => {
		if (gameState === "win" || gameState === "lose") {
			playSound(gameState === "win" ? "victory" : "lose");
			setResults({
				gameState: gameState,
				heartsLeft,
				randomWord,
			});
		}
	}, [gameState, heartsLeft, randomWord, playSound, setResults]);

	return (
		<main className="flex h-screen flex-col">
			<div className="flex-1 overflow-hidden bg-background dark:bg-background-100">
				<div className="relative flex h-full animate-popin items-center justify-center">
					<Grid
						setResetGame={setResetGame}
						showGrid={showGrid}
						setAttempts={setAttempts}
						attempts={attempts}
						randomWord={randomWord}
						setRandomWord={setRandomWord}
						heartsLeft={heartsLeft}
					/>
					<div
						onClick={resetGame}
						className={twMerge(
							"absolute inset-0 flex flex-1 translate-x-full scale-0 items-center justify-center gap-12 opacity-0 transition-all duration-500",
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
						<div className="h-44 w-[0.05rem] bg-text"></div>
						<div className="select-none">
							<p className="text-2xl font-bold text-text">
								The word was
								<span className="ml-2 text-2xl font-black text-text-400">
									{results?.randomWord}
								</span>
								.
							</p>
							<p className="font-light text-text-400">
								Press any key to play again.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
