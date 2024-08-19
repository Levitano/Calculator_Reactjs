import { useContext } from "react"
import { calcContext } from "../../context/calcContext"



const getStyleName = btn => {
    const className = {
        "=": "equals",
        "X": "opt",
        "-": "opt",
        "+": "opt",
        "/": "opt",
    }
    return className[btn]
}







const Button = ({ value }) => {
    const { calc, setCalc } = useContext(calcContext)


    const commaClick = () => {

        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })

    }

    const resetClick = () => {
        setCalc({
            ...calc,
            sign: '', num: 0, res: 0
        })
    }

    const handleClickButton = () => {
        console.log('local dos numeros')
        const numberString = value.toString()

        let numberValue

        if (numberString === '0' && calc.num === 0) {
            numberValue = '0'
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'X': (a, b) => a * b,
                    '/': (a, b) => a / b,


                }
                return result[sign](a, b)
            }

            setCalc({
                res: math(calc.res, calc.num, calc.sign)
            })
        }

    }

    const persentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }

    const invertClick = () => {

        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })


    }

    const handleBtnClick = () => {
        const results = {
            ".": commaClick,
            'C': resetClick,
            '/': signClick,
            'X': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': persentClick,
            '-+': invertClick
        }

        if (results[value]) {
            return results[value]()
        }
        else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={() => handleBtnClick(value)} className={`${getStyleName(value)} button`}> {value}</button>
    )
}

export default Button