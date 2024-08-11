import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaChartBar } from 'react-icons/fa';
import HowToPlayModal from '../components/game/HowToPlayModal';
import StatisticsModal from '../components/game/StatisticsModal';

const Header = () => {
  const [howToPlayModal, setHowToPlayModal] = useState(false);
  const [statisticsModal, setStatisticsModal] = useState(false);
  

  return (
    <div className="bg-[#121213] p-4 flex justify-between items-center border-b border-[#424242]">
      <div className="flex items-center">
        <Link to="/" className="text-white text-xl font-extrabold">
          Wordle
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <FaInfoCircle
          className="text-white cursor-pointer"
          size={24}
          onClick={() => setHowToPlayModal(true)}
        />

        <FaChartBar
          className="text-white cursor-pointer"
          size={24}
          onClick={() => setStatisticsModal(true)}
        />
      </div>

      {howToPlayModal && (
        <HowToPlayModal closeHowToPlayModal={() => setHowToPlayModal(false)} />
      )}

      {statisticsModal && (
        <StatisticsModal closeStatisticsModal={() => setStatisticsModal(false)} />
      )}
    </div>
  );
};

export default Header;