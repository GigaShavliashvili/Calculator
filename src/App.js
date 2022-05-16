import React, { useState, useEffect } from "react";
import "./app.css";
import { Button } from "./assets/buttons";
import { useCalcHook } from "./useCalcHook";
function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [equal, setEqual] = useState(false);
  const [mode, setMode] = useState(false);
  const [result] = useCalcHook(firstValue, mode, secondValue, equal);

  const handlerValue = (value) => {
    if (!mode) {
      const String = value.toString();
      setFirstValue((prev) => prev + String);
    } else if (mode) {
      const String = value.toString();
      setSecondValue((prev) => prev + String);
    }
  };
  const handlerMode = (mode) => {
    if (mode == "C") {
      setFirstValue("");
      setSecondValue("");
      setEqual(true);
      setMode(mode);
    } else if (mode == "%") {
      setEqual(true);
      setMode(mode);
      setSecondValue("");
    } else {
      setSecondValue("");
      setEqual(false);
      setMode(mode);
    }
  };

  const handlerResult = () => {
    setEqual(true);
  };

  useEffect(() => {
    setSecondValue("");
    setEqual(false);
    setMode("");
  }, [result]);
  return (
    <div className="main">
      <div className="calculator__Wrppper">
        <div className="result">
          {secondValue !== ""
            ? secondValue
            : result !== "" || result === 0
            ? result
            : firstValue
            ? firstValue
            : "0"}
        </div>

        <div className="button__Wrapper">
          {Button.map((btn, btnidx) => {
            return (
              <button
                className="button"
                value={btn.value ? btn.value : ""}
                key={btnidx}
                onClick={() => {
                  if (btn.value) {
                    handlerValue(btn.value);
                  } else if (btn.mode) {
                    handlerMode(btn.mode);
                  } else if (btn.result) {
                    handlerResult();
                  }
                }}
              >
                {btn.display}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
