import { createContext, useState } from "react"


export const calcContext = createContext()

const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    const providerValue = {
        calc, setCalc
    }


    return (
        <calcContext.Provider value={providerValue}>
            {children}
        </calcContext.Provider>
    )
}

export default CalcProvider