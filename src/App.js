import Button from "./components/Button";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("");
    setOperation("");
  };

  const handleOnClearCurrentNumber = () => {
    setCurrentNumber("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleOperation = (op) => {
    if (firstNumber === "") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    } else {
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber);
      let result;
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case "%":
          result = num1 % num2;
          break;
        default:
          return;
      }
      setCurrentNumber(String(result));
      setFirstNumber("");
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "" && operation !== "" && currentNumber !== "") {
      handleOperation(operation);
    }
  };

  return (
    <Container>
      <Content>
        <Input
          value={firstNumber || operation ? `${firstNumber} ${operation}` : ""}
          className="input-opacity"
        />
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onClick={() => handleOperation("%")} />
          <Button label="CE" onClick={handleOnClearCurrentNumber} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={() => handleOperation("x")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
