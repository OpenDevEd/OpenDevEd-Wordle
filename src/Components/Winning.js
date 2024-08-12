import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Winning() {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center">
      <Confetti width={width} height={height} />
      <h1 className="slide-down  text-green-400 text-4xl font-bold mt-10">Congratulations!</h1>
      <p className="slide-down font-bold text-white text-lg mt-4">You won the game!</p>
      <Button 
        onClick={()=>{navigate('/game')}} 
        colorScheme="teal" 
        size="lg" 
        className='slide-down '
        mt={6}
      >
        Play Again
      </Button>
    </div>
  );
}
