import React from 'react';

// Component for rendering individual tiles
const Tile = ({ letter, backgroundColor }: { letter: string, backgroundColor: string }) => (
  <div className={`w-12 h-12 flex justify-center items-center text-lg font-bold ${backgroundColor} border border-gray-600`}>
    {letter}
  </div>
);

// Component for rendering a section with tiles and a description
const InstructionSection = ({ tiles, description }: { tiles: { letter: string, backgroundColor: string }[], description: string }) => (
  <div className="mb-4">
    <div className="flex justify-center mb-2">
      {tiles.map((tile, index) => (
        <Tile key={index} letter={tile.letter} backgroundColor={tile.backgroundColor} />
      ))}
    </div>
    <p className="text-center">{description}</p>
  </div>
);

// Main component for game instructions
const GameInstructions: React.FC = () => (
  <div>
    <div className="my-3 text-center">
      Guess the WORDLE in five tries. Each guess must be a valid five-letter
      word. Hit the enter button to submit. After each guess, the color of the
      tiles will change to show how close your guess was to the word.
    </div>
    <InstructionSection
      tiles={[
        { letter: 'W', backgroundColor: 'bg-green-500' },
        { letter: 'E', backgroundColor: 'bg-gray-600' },
        { letter: 'A', backgroundColor: 'bg-gray-600' },
        { letter: 'R', backgroundColor: 'bg-gray-600' },
        { letter: 'Y', backgroundColor: 'bg-gray-600' }
      ]}
      description="The letter W is in the word and in the correct spot."
    />
    <InstructionSection
      tiles={[
        { letter: 'P', backgroundColor: 'bg-yellow-500' },
        { letter: 'I', backgroundColor: 'bg-gray-600' },
        { letter: 'L', backgroundColor: 'bg-gray-600' },
        { letter: 'L', backgroundColor: 'bg-gray-600' },
        { letter: 'S', backgroundColor: 'bg-gray-600' }
      ]}
      description="The letter P is in the word but in the wrong spot."
    />
    <InstructionSection
      tiles={[
        { letter: 'V', backgroundColor: 'bg-gray-600' },
        { letter: 'A', backgroundColor: 'bg-gray-600' },
        { letter: 'G', backgroundColor: 'bg-gray-600' },
        { letter: 'U', backgroundColor: 'bg-gray-600' },
        { letter: 'E', backgroundColor: 'bg-gray-600' }
      ]}
      description="The letter U is not in the word in any spot."
    />
  </div>
);

export default GameInstructions;
