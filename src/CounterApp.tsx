import { useState } from "react";

type CounterAppProps = {
  initCounter: number;
};

function CounterApp({ initCounter }: CounterAppProps) {
  const [counter, setCounter] = useState(initCounter);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initCounter);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default CounterApp;
