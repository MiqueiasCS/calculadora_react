import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (digit) => {
    setCurrentValue(
      (prev) => `${prev === "0" ? (digit === "." ? "0" : "") : prev}${digit}`
    );
  };

  const handleOnClear = () => {
    setCurrentValue("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleOnClearLastItem = () => {
    setCurrentValue((prev) => `${prev.length === 1 ? "0" : prev.slice(0, -1)}`);
  };

  const handleOperation = (e) => {
    setOperation(e.target.firstChild.data);
    setFirstNumber(currentValue);
    setCurrentValue("0");
  };

  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentValue);

    setCurrentValue(`${sum}`);
    setOperation("");
  };

  const handleSubNumbers = () => {
    const sub = Number(firstNumber) - Number(currentValue);

    setCurrentValue(`${sub}`);
    setOperation("");
  };

  const handleExpNumbers = () => {
    const exp = Number(firstNumber) ** Number(currentValue);

    setCurrentValue(`${exp}`);
    setOperation("");
  };

  const handleMultNumbers = () => {
    const mult = Number(firstNumber) * Number(currentValue);

    setCurrentValue(`${mult}`);
    setOperation("");
  };

  const handleDivNumbers = () => {
    const div =
      currentValue === "0"
        ? "Error"
        : Number(firstNumber) / Number(currentValue);

    setCurrentValue(`${div}`);
    setOperation("");
  };

  function handleEquals() {
    if (firstNumber !== "0" && operation !== "") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "^":
          handleExpNumbers();
          break;
        case "x":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentValue} />
        <Row>
          <Button label="x" onClick={handleOperation} />
          <Button label="/" onClick={handleOperation} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="<" onClick={handleOnClearLastItem} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="^" onClick={handleOperation} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
