import { alertProps, itemSolution } from "@/utils/types"
import React, { useState } from "react"

const useWordle = (solution: itemSolution, data:itemSolution[] | null) => {
 
    const [turn, setTurn] = useState<number>(0) // turn to next line
    const [currentGuess, setCurrentGuess] = useState<string>("")
    const [guesses, setGuesses] = useState<any>([...Array(6)]) // each guess is an array [{key: 'a', color: 'yellow'}]
    const [history, setHistory] = useState<string[]>() // each guess is a string
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [alertState, setAlertState] = useState<alertProps>({message:"",state:false})

    // format a guess into an array of letter objects
    // example: [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        let solutionGuess = solution
        let formattingGuess = [...currentGuess]?.map((l)=>{
            return {key:l, color:"gray0"}
        })

        formattingGuess.forEach((l,i)=>{
            console.log(l.key, solutionGuess.word[i])
            if(l.key === solutionGuess.word[i])
            {
                return l.color = "green"
            }
        })

        formattingGuess.forEach((l) => {
            if(solutionGuess.word.includes(l.key) && l.color != "green")
                l.color = "yellow"
        });
        
        return formattingGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formatted:{key:string, color:string}[]) => {
        if(currentGuess === solution.word)
            setIsCorrect(true)

        setGuesses((prevGuesses:any)=>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formatted
            return newGuesses
        })
        setHistory(prev=>{
            return prev ? [...prev, currentGuess] : [currentGuess]
        })
        setTurn(pre=>{
            return pre + 1
        })
        setCurrentGuess('')
    }

    // handle keyup event & track current guess 
    // if user presses enter, add the new guess
    const handleKeyup = (e: any) => {
        if (e.key === "Enter") {
            // only add guess if turn is less than 5
            if (turn > 5) {
                setAlertState({message:"you used all ur guesses",state:true})
                console.log("you used all ur guesses")
                return
            }
            // do not allow duplicate words
            if (history?.includes(currentGuess)) {
                setAlertState({message:"you already tried that word",state:true})
                console.log("you already tried that word")
                return
            }
            // check word is 5 chars long
            if(currentGuess.length !== 5)
            {
                setAlertState({message:"word is too less",state:true})
                console.log("word is too less")
                return
            }
            console.log("===>",data?.some(it=>it.word === currentGuess),currentGuess )
            if(!data?.some(it=>it.word === currentGuess))
            {
                setAlertState({message:"This word is not in the list",state:true})
                console.log("This word is not in the list")
                return
            }
            let formatted = formatGuess()
            addNewGuess(formatted)
        }
        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => {
                    return (prev + e.key).toUpperCase()
                })
            }
        }
        if (e.key === "Backspace") {
            setCurrentGuess(prev => {
                return prev.slice(0, -1)
            })
        }
    }
    return { handleKeyup, turn, currentGuess, guesses, isCorrect, setCurrentGuess, alertState, setAlertState}
}

export default useWordle