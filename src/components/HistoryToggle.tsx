import { useAudio } from "@/hooks/game";
import { History, ArrowBigUp } from "lucide-react";

export default function HistoryToggle({
	showHistory,
	setShowHistory,
}: {
	showHistory: boolean;
	setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { playSound } = useAudio();
	const Component = showHistory ? ArrowBigUp : History;

	return (
		<div
			className="fixed left-6 top-6 z-20 cursor-pointer rounded bg-card p-4 transition-all hover:bg-card-400 active:scale-95 sm:left-12 sm:top-12 dark:bg-card-300 dark:hover:bg-card-400"
			onClick={() => {
				playSound("deny", 1, 0.1);
				setShowHistory(!showHistory);
			}}
		>
			<Component className="size-6 cursor-pointer stroke-text" />
		</div>
	);
}
