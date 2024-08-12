import AudioProvider from "@/providers/AudioProvider";
import GameContainer from "./GameContainer";

export default function MainContainer({ presetWord }: { presetWord?: string }) {
	return (
		<AudioProvider>
			<GameContainer presetWord={presetWord} />
		</AudioProvider>
	);
}
