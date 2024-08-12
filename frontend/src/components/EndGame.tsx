import { useEffect, useState } from 'react';
import classes from './guessInput.module.css'
import Modal from 'react-modal';
import { IoMdCloseCircle } from "react-icons/io";
import { EndGameProps } from '../types/main';

function EndGame({win, targetWord, onRestart}: EndGameProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (win || !win) {
      setModalIsOpen(true);
    }
  }, [win]);

  return (
    <div className="end-game">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="absolute inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-9 w-80 h-80 flex flex-col items-center justify-center rounded-lg shadow-lg relative">
        <IoMdCloseCircle
          size={25}
          className='cursor-pointer absolute top-4 right-4'
          onClick={closeModal}
        />
          <h2 className='pb-2 center'>{win ? 'Congratulations!' : 'Game Over'}</h2>
          <p>The word was: {targetWord}</p>
          <button className={`${classes.guessSubmit} my-4`} onClick={onRestart}>Play Again</button>
        </div>
      </Modal>
      <button className={`${classes.guessSubmit} my-4`} onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default EndGame;