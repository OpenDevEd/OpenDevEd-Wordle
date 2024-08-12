import classes from './navbar.module.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FcAbout } from "react-icons/fc";
import { useState } from 'react';
import Modal from 'react-modal';
import { IoMdCloseCircle } from "react-icons/io";
import { FaHackerNewsSquare } from "react-icons/fa";
import { NavbarProps } from '../../types/main';


Modal.setAppElement('#root');

function Navbar({ darkMode, toggleDarkMode } : NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);



    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="absolute inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-9 w-100 h-80 flex flex-col items-center justify-center rounded-lg shadow-lg relative">
                <IoMdCloseCircle
                size={25}
                className='cursor-pointer absolute top-4 right-4'
                onClick={closeModal}
                />
                    <h2 className='mb-4'>How to Play?</h2>
                    <p className='mb-5'>Enter your 5 characters word and check these rules: </p>
                    <ul>
                        <li className='flex items-center mb-4'>
                            <FaHackerNewsSquare size={30} color='green'/>
                            <p className='ml-3'>in the word and in the correct spot </p>
                        </li>
                        <li className='flex items-center mb-4'>
                            <FaHackerNewsSquare size={30} color='#c9b458'/>
                            <p className='ml-3'>in the word but in the wrong spot.</p>
                        </li>
                        <li className='flex items-center'>
                            <FaHackerNewsSquare size={30} color='gray'/>
                            <p className='ml-3'>not in the word in any spot.</p>
                        </li>
                    </ul>
                </div>
            </Modal>
            <div className= {`${classes.header} bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100`}>
                <h2>WhoAmI!</h2>
                <nav className={classes.nav}>
                <DarkModeSwitch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={40}
                    className={classes.darkModeSwitch}
                />
                <FcAbout onClick={() => openModal()} size={40} className={classes.fcAbout}/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;