import { useContext } from "react"
import { calcContext } from "../../context/calcContext"
import { Textfit } from "react-textfit"


const Screen = () => {
    const { calc } = useContext(calcContext)
    console.log(calc.num, calc.res, calc)
    return (
        <Textfit className="screen" max={70} mode='single'>{calc.num ? calc.num : calc.res} </Textfit>
    )
}

export default Screen