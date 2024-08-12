

export type HandleTypeProps = {
  event: KeyboardEvent;
  guesses: Array<string | null>;
  word : string,
  setShowPopup : React.Dispatch<React.SetStateAction<boolean>>;
  setGuesses: React.Dispatch<React.SetStateAction<Array<string | null>>>;
  currentGuess: string;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
};

export type HandleBackspaceProps = {
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
};

export type HandleCharacterInputProps = {
  event: KeyboardEvent;
  currentGuess: string;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
};

export interface ShowHintProps {
  word: string;
}
export interface PopupProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export interface LineProps {
  guess: string;
  word : string
  isLastGuess : boolean
}
