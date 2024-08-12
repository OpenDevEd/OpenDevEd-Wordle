import { HistoryEntry } from "@/types/game";
import { Calendar, Clock } from "lucide-react";
import MiniGrid from "./MiniGrid";
import Hearts from "./Hearts";
import { MAX_ATTEMPTS } from "@/constants/game";
import HistoryToggle from "./HistoryToggle";

export default function HistoryPage({
	savedHistory,
	setShowHistory,
}: {
	savedHistory: HistoryEntry[];
	setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div className="relative flex h-full w-full select-none flex-col items-center gap-8 overflow-y-auto py-[25vh]">
			<HistoryToggle showHistory={true} setShowHistory={setShowHistory} />
			{!savedHistory.length && (
				<div className="flex h-full w-full items-center justify-center">
					<div className="text-text">No history yet.</div>
				</div>
			)}
			{savedHistory.map((entry: HistoryEntry, i) => (
				<div key={i} className="relative flex gap-8">
					<div className="flex size-8 justify-center rounded-full bg-card">
						{i !== savedHistory.length - 1 && (
							<div className="absolute -bottom-8 top-1 w-1 bg-card" />
						)}
					</div>
					<div className="relative flex flex-col gap-4">
						<div className="flex items-center gap-4 text-text">
							<Calendar className="size-8" />
							<div className="flex flex-col">
								<div className="text-sm">Date</div>
								<div className="flex items-center justify-center gap-2 leading-none text-text-900">
									<span className="text-sm">
										{new Date(
											entry.date,
										).toLocaleDateString()}
									</span>
									<Clock className="size-4" />
									<span className="text-sm">
										{new Date(entry.date)
											.toLocaleTimeString()
											.replace(/:\d+ /, " ")}
									</span>
								</div>
							</div>
						</div>
						<MiniGrid
							key={i}
							attempts={entry.attempts}
							colors={entry.colors}
							word={entry.word}
						/>
						<Hearts
							history
							heartsLeft={
								MAX_ATTEMPTS -
								entry.attempts.length +
								(entry.attempts.includes(entry.word) ? 1 : 0)
							}
						/>
						<div className="flex w-full justify-center font-black uppercase text-text">
							{entry.word}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
