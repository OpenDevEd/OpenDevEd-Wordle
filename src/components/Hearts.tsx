import { MAX_ATTEMPTS } from "@/constants/game";
import { Heart, HeartCrack } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Hearts({ heartsLeft }: { heartsLeft: number }) {
	return (
		<div
			id="heartList"
			className="flex w-full items-center justify-center gap-4"
		>
			{Array(MAX_ATTEMPTS)
				.fill(null)
				.map((_, index) => {
					const active = heartsLeft > index;
					const Component = active ? Heart : HeartCrack;
					return (
						<Component
							key={index}
							className={twMerge(
								"size-6 fill-red-500 stroke-background-400 transition-all dark:stroke-background-300",
								!active &&
									"animate-crack fill-background-300 stroke-background-200",
							)}
						/>
					);
				})}
		</div>
	);
}
