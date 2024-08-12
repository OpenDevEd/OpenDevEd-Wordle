

const GameInfo = () => {

    const info = [
        {
            disc : 'The letter is in the correct position',
            color : 'green'
        },
        {
            disc : ' The letter is in the word but in the wrong position',
            color : 'yellow',
        },
        {
            disc : 'The letter is not in the word at all',
            color : 'gray'
        }
    ]

    return (
        <div className="relative h-60  w-full flex justify-center  overflow-y-auto">
            <ul className="flex absolute lg:bottom-0  flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 mt-4">
            {info.map(item => (
                <li className="text-white font-bold flex flex-col text-center justify-center items-center" key={item.color}>
                <span
                    style={{ backgroundColor: item.color }}
                    className="mx-4 w-10 h-10 rounded-md border inline-block"
                ></span>
                <p>{item.disc}</p>
                </li>
            ))}
            </ul>
        </div>
        );
}

export default GameInfo;