
import { guessesProps, itemSolution } from "@/utils/types";


const Keypad = ({ handleKeyup, guesses, solution, currentGuess, setCurrentGuess }: { handleKeyup: (e: any) => void, solution: itemSolution, currentGuess: string, setCurrentGuess: any, guesses: guessesProps[][] }) => {
    const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keys3 = ['Backspace', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'];
    
    const handleClick = (key: string) => {
        handleKeyup({ key: key })
    }

    const renderKeys = (keys: string[]) => {
        const compareChar = (key: string) => {
            for (const array of guesses) {
                if (array) {

                    for (const obj of array) {
                        if (obj.key === key)
                            return obj.color
                    }
                }
            }
            return "grayl"
        }
        const checkkeys = (key:string) =>
        {
            if(key === "Backspace" || key === "Enter")
                return false
            return true
        }

        return keys.map((key) => (
            <div key={key} className=''>
                <button className={`button ${checkkeys(key) && 'w-[45px]'} text-white p-4 bg-${compareChar(key)}`} onClick={() => handleClick(key)} value={key}>
                    {key}
                </button>
            </div>
        ));
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-2">
                {renderKeys(keys1)}
            </div>
            <div className="flex justify-center gap-2">
                {renderKeys(keys2)}
            </div>
            <div className="flex justify-center gap-2">
                {renderKeys(keys3)}
            </div>
        </div>
    );
};

export default Keypad;