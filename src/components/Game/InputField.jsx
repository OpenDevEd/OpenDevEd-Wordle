import { useContext } from 'react';
import {GameContext} from '../Context/Context'
import { TbSend } from "react-icons/tb";


export const InputField = () => {

    const { setCurrentWord , currentWord , color , handleWordSubmit} = useContext(GameContext); 

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value.toUpperCase(); 
        setCurrentWord(value);
    };

    return (
        <div className='h-1/6 w-full mt-4'>
            <form className='h-full flex gap-2 px-4' onSubmit={handleWordSubmit}>
                {/* Input field for guessing words */}
                <input type="text" value={currentWord}  required={true} className={`h-1/2 text-2xl  ${color.text} ${color.background} font-bold text-center uppercase border-4 rounded-lg w-full`} onChange={handleChange} />
                {/* Submit button to submit the guess. */}
                <TbSend  type="submit"  size={40}/>
            </form>
        </div>
    );
};
