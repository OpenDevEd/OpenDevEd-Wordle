
import React from 'react';
import { motion } from 'framer-motion';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div className='w-full flex justify-center'>
      <motion.button
        className='px-8 py-3 bg-orange rounded-[16px]'
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <p className='text-2xl text-white font-baloo font-bold'>Submit</p>
      </motion.button>
    </div>
  );
};

export default SubmitButton;
