interface LineProps{
    guess:string;
    Wordle:string;
    isFinal:boolean;
}

function Board({guess,Wordle,isFinal} :LineProps) {
    const tiles =[];
    for(let i = 0; i < 5 ;i++)
    {
        const char = guess[i]
        let bgColor = 'bg-[#121213]';
        if(isFinal){
            if (Wordle[i] === char) {
                bgColor = "bg-[#538d4e]"; // Exact match
              } else if (Wordle.includes(char)) {
                bgColor = "bg-[#b59f3b]"; // Present in the word but not at the correct position
              }
              else
                bgColor = "bg-[#3a3a3c]"
        }
        tiles.push(<div key={i} className={`text-white text-4xl uppercase flex w-full h-[100%] items-center border border-[#818384] justify-center  gap-6 ${bgColor}`}>{char}</div>)
    }
    return(
        <div className="flex  w-full h-full justify-between  gap-2 ">{tiles}</div>
    )
  }
  export default Board