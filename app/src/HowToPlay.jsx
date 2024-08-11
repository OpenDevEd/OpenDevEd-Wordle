// HowToPlayModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './HowToPlay.css';

Modal.setAppElement('#root');

const HowToPlayModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className="howto-button">?</button>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="How to Play"
          className="howto-modal"
          overlayClassName="howto-overlay"
      >
          <h2 className="howto-title">How to Play</h2>
          <p className="howto-description">Guess the Wordle in 6 tries.</p>
          <ol className="howto-list">
                  <li>Enter a valid 5-letter word in the input field.</li>
                  <li>Click the "Submit" button or press Enter to submit your guess.</li>
                  <li>The color of the tiles will change to show how close your guess was to the word.</li>
              <ul className="feedback-list">
                  <li className="feedback feedback-green"><strong>Green:</strong> The letter is in the correct position.</li>
                  <li className="feedback feedback-yellow"><strong>Yellow:</strong> The letter is in the word but in the wrong position.</li>
                  <li className="feedback feedback-gray"><strong>Gray:</strong> The letter is not in the word at all.</li>
              </ul>
          </ol>
          <button onClick={closeModal} className="howto-close-button">Close</button>
      </Modal>
    </div>
  );
};

export default HowToPlayModal;