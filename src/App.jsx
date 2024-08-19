import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonBox from "./components/ButtonBox"
import Button from "./components/Button"
import CalcProvider from "../context/calcContext"
const btnValues = [
  ["C", "-+", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
]


function App() {


  return (
    <div>
      <CalcProvider>
        <Wrapper>
          <Screen />

          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button key={i} value={btn} />
            ))}
          </ButtonBox>

        </Wrapper>
      </CalcProvider>

    </div>
  )
}

export default App
