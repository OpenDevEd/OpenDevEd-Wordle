import GameContainer from "@/components/GameContainer";
import AudioProvider from "@/providers/AudioProvider";
import { GameContainerProps } from "@/types/GameContainer";

export default function Home(props: GameContainerProps) {
	return (
		<AudioProvider>
			<GameContainer {...props} />
		</AudioProvider>
	);
}
