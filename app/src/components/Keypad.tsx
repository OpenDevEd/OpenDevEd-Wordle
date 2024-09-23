 
import { itemSolution } from "@/utils/types";
import useWordle from "../hook/useWordle";
import { useEffect } from "react";

const Keypad   = ({handleKeyup,solution, currentGuess, setCurrentGuess}:{handleKeyup: (e: any) => void,solution:itemSolution ,currentGuess:string, setCurrentGuess:any}) => {
    const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keys3 = ['Backspace', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'];

     const handleClick=(key:string)=>{
        handleKeyup({key:key})
    }
   
    const renderKeys = (keys:string[]) => {
        return keys.map((key) => (
            <div key={key} className=''>
                <button className="button text-white p-4" onClick={()=>handleClick(key)} value={key}>
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