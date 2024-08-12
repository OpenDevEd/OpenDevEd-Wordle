export interface Guess {
    word: string;
    result: ('correct' | 'present' | 'absent')[];
}

export interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface EndGameProps {
  win: boolean;
  targetWord: string;
  onRestart: () => void;
}

export interface GuessDisplayProps {
  guesses: Guess[];
}

export interface GuessInputProps {
  onGuess: (guess: string) => void;
}