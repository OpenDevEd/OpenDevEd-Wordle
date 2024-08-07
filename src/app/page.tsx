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
			playSound(gameState === "win" ? "/victory.wav" : "/lose.wav");
			setResults({
				gameState: gameState,
				heartsLeft,
				randomWord,
			});
		}
	}, [gameState, heartsLeft, randomWord, playSound, setResults]);

	return (
		<main className="flex h-screen flex-col">
			<div className="bg-background dark:bg-background-100 flex-1 overflow-hidden">
				<div className="animate-popin relative flex h-full items-center justify-center">
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
						<div className="text-text flex flex-col text-[3rem] font-black uppercase">
							<h1>
								{results?.gameState === "win"
									? "You win!"
									: "You lose!"}
							</h1>
							<Hearts heartsLeft={results?.heartsLeft || 0} />
						</div>
						<div className="bg-text h-44 w-[0.05rem]"></div>
						<div>
							<p className="text-text text-2xl">
								The word was
								<span className="text-text-400 ml-2 text-2xl font-black">
									{results?.randomWord}
								</span>
								.
							</p>
							<p className="text-text-400">
								Click anywhere to play again.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
