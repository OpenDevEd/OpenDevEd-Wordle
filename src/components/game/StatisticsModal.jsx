import React from 'react'
import { useGameContext } from '../../context/GameContext'

const StatisticsModal = ({closeStatisticsModal}) => {
    const {totalGames, wins, loses} = useGameContext();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-[#121213] p-6 rounded-md w-1/2 flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <p className="white">Total Plays: {totalGames}</p>
            <p className="white">Wins: {wins}</p>
            <p className="white">Losses: {loses}</p>
            <button
              className="mt-4 px-4 py-2 bg-white text-black rounded-md"
              onClick={closeStatisticsModal}
            >
              Close
            </button>
          </div>
        </div>
  )
}

export default StatisticsModal