import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function Losing() {
  const navigate = useNavigate();

  return (
    <div className="font-extrabold slide-down flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-red-600 text-5xl font-bold mt-10">Game Over</h1>
      <p className="text-gray-200 text-xl mt-4">Better luck next time!</p>
      <Button 
        onClick={()=>{navigate('/')}} 
        colorScheme="red" 
        size="lg" 
        mt={6}
      >
        Play Again
      </Button>
    </div>
  );
}
