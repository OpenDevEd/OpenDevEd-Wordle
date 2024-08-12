import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import Popup from '../utils/Popup';
import GameInstructions from '../utils/GameInstructions';

const Header = () => {
    // State to manage the visibility of the popup
    const [showPopup, setShowPopup] = useState(false);

    // Function to display the popup
    const handleShowPopup = () => {
        setShowPopup(true);
    };

    // Function to hide the popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className="w-[60%] mx-auto flex justify-between items-center">
            <div>
                {/* Main title of the header */}
                <h1 className="text-white text-[33px] font-bold">WORDLE</h1>   
            </div>
            <BsInfoCircle 
                size="1.6rem" 
                color='#fff' 
                style={{cursor: 'pointer'}}
                onClick={handleShowPopup}   // Show popup on click
            />

            {/* Conditionally render the Popup component if showPopup is true */}
            {showPopup && (
                <Popup 
                    title="How to Play"   // Title of the popup
                    content={<GameInstructions/>}  // Content of the popup, displaying game instructions
                    onClose={handleClosePopup}  // Function to close the popup
                />
            )}
        </section>
    );
};

export default Header;
