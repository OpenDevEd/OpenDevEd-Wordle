
export default class GameAudio {

    private keystroke: HTMLAudioElement;
    private keystroke2: HTMLAudioElement;
    private correctGuess: HTMLAudioElement;
    private youWin: HTMLAudioElement;
    private youLose: HTMLAudioElement;
    private invalidWord: HTMLAudioElement;

    constructor(volume: number) {
        this.keystroke = new Audio("/sounds/keystroke.mp3");
        this.keystroke2 = new Audio("/sounds/keystroke2.wav");
        this.correctGuess = new Audio("/sounds/correctGuess.mp3");
        this.youWin = new Audio("/sounds/youWin.mp3");
        this.youLose = new Audio("/sounds/youLose.mp3");
        this.invalidWord = new Audio("/sounds/invalidWord.mp3");

        this.keystroke.volume = volume;
        this.keystroke2.volume = volume;
        this.correctGuess.volume = volume;
        this.youWin.volume = volume;
        this.youLose.volume = volume;
        this.invalidWord.volume = volume;

    }

    playSound(sound: string) {
        let audio;
        switch (sound) {
            case "keystroke":
                audio = this.keystroke.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.keystroke.volume;
                audio.play();
                break;
            case "keystroke2":
                audio = this.keystroke2.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.keystroke2.volume;
                audio.play();
                break;
            case "correctGuess":
                audio = this.correctGuess.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.correctGuess.volume;
                audio.play();
                break;
            case "youWin":
                audio = this.youWin.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.youWin.volume;
                audio.play();
                break;
            case "youLose":
                audio = this.youLose.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.youLose.volume;
                audio.play();
                break;
            case "invalidWord": 
                audio = this.invalidWord.cloneNode(true) as HTMLAudioElement;
                audio.volume = this.invalidWord.volume;
                audio.play();
                break;
            default:
                break;
        }
    }
}