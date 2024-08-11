import React from 'react';

interface EndGameModalProps {
  win: boolean;
  isHidden: boolean;
  onRestart: () => void;
}

const EndGameModal: React.FC<EndGameModalProps> = ({ win, onRestart, isHidden }) => {
  console.log(isHidden);
  if (!win) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-bg w-[40vh] h-[40vh] rounded-[16px] shadow-lg flex justify-center items-center flex-col">
        <h2 className="text-6xl font-bold mb-10 ${}">{win ? 'You Win!' : 'You Lose!'}</h2>
        <button className="px-8 py-3 bg-orange text-white font-baloo font-bold rounded-[16px]" onClick={onRestart}>Restart</button>
      </div>
    </div>

  );
}

export default EndGameModal;
