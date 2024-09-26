export interface itemSolution {
    word: string
    id: number
}


export interface WordleProps {
    solution: itemSolution
}

export interface guessesProps{
    key: string
    color: string
}

export interface alertProps{
    message?:string
    state:boolean
}