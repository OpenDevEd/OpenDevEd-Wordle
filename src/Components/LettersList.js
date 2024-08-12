

const LettersList = ({ word }) => {

    const LetterCard = ({ letter }) => {
      const colorClassMap = {
        gray: 'bg-gray-600', 
        green: 'bg-[#47AA12]',
        yellow: 'bg-[#B0A605]',
      };
  
      return (
        <div className={` text-center content-center rounded-lg w-14
         lg:w-20  border-2 ${colorClassMap[letter.color]}
         font-extrabold text-2xl text-gray-200 h-16`}>
          {letter.key}
        </div>
      );
    };
  
    return (
      <div className=" flex space-x-2 mt-4">
        {word.map((letter, index) => (
          <LetterCard key={index} letter={letter} />
        ))}
      </div>
    );
  };
  
  export default LettersList;
  