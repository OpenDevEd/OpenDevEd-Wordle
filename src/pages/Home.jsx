import { useState } from 'react';
import { Link } from 'react-router-dom';
import HowToPlayModal from '../components/game/HowToPlayModal';

const Home = () => {
  const [isHowToPlayModlaOpen, setIsHowToPlayModlaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121213] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[#fff]">Welcome to Wordle Game</h1>
        <p className="text-xl mb-6 text-white/90 flex-wrap">Get 6 chances to guess a 5-letter word.</p>

        <div className='flex gap-2 justify-center'>
          <button onClick={() => setIsHowToPlayModlaOpen(true)} 
                  className="mt-8 px-6 py-3 border border-white text-lg font-semibold
                  rounded-full text-white"
          >
            How To Play
          </button>

          <Link to="/game">
            <button className="mt-8 px-6 py-3 bg-white text-lg font-semibold rounded-full text-black">
              Start The Game
            </button>
          </Link>
        </div>

          <p className="mt-8 text-white/80">Made with ❤️ by <a href="https://www.azedineouhadou.tech/" target="_blank" rel="noreferrer" className="text-blue-400">Azedine Ouhadou</a></p>
      </div>

      {isHowToPlayModlaOpen && (
        <HowToPlayModal closeHowToPlayModal={() => setIsHowToPlayModlaOpen(false)}/>
      )}
    </div>
  );
};

export default Home;