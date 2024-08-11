import React from 'react';
import { motion } from 'framer-motion';

interface EndGameModalProps {
  win: boolean;
  lose: boolean;
}

const EndGameModal: React.FC<EndGameModalProps> = ({ win, lose }) => {
  function refreshPage() {
    window.location.reload();
  }

  const msg = (win && "You Win!") || (lose && "You Lose!");
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-bg w-[40vh] h-[40vh] rounded-[16px] shadow-lg flex justify-center items-center flex-col"
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-6xl font-bold mb-10">{msg}</h2>
        <motion.button
          className="px-8 py-3 bg-orange text-white font-baloo font-bold rounded-[16px]"
          onClick={refreshPage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <p className='text-2xl text-white font-baloo font-bold'>Restart</p>
        </motion.button>
      </motion.div>
    </div >
  );
}

export default EndGameModal;
