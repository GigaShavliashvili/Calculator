import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";

export const useCalcHook = (firstValue, mode, secondValue, equal) => {
  const [getmode, setMode] = useState(false);
  const [result, setResult] = useState("");

  const firstValueInt = result !== "" ? result : parseFloat(firstValue, 7);
  const secondValueInt = parseInt(secondValue);

  console.log("firs = " + firstValueInt);
  console.log("mode = " + mode);
  console.log("secondValue = " + secondValueInt);
  console.log("result = " + result);
  console.log(equal);
  useEffect(() => {
    if (equal) {
      switch (mode) {
        case "+": {
          setResult(firstValueInt + secondValueInt);
          break;
        }
        case "-": {
          setResult(firstValueInt - secondValueInt);
          break;
        }
        case "X": {
          setResult(firstValueInt * secondValueInt);
          break;
        }
        case "/": {
          setResult(firstValueInt / secondValueInt);
          break;
        }
        case "%": {
          console.log("%");
          setResult(firstValueInt / 100);
          break;
        }
        case "C": {
          setResult("");
          break;
        }

        default:
          break;
      }
    }
  }, [equal, mode]);

  return [result];
};
