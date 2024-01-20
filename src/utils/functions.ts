import { CheckNumbers, MathOperationFunction, GetOperation } from "../interface/functions";

const checkNumbers: CheckNumbers = (a, b, operation) => {
  const num_A = Number(a);
  const num_B = Number(b);
  if (isNaN(num_A) || isNaN(num_B)) {
    throw new Error(`Invalid type for ${operation} function parameters, 'a': ${a}, type of 'b': ${b}`);
  }
  return true;
};

const useMathOperations = () => {
  const add: MathOperationFunction = (a, b) => {
    try {
      const operation = 'add';
      const areNumbers = checkNumbers(a, b, operation);
      if (areNumbers) {
        const num_A = Number(a);
        const num_B = Number(b);
        return num_A + num_B;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const subtract: MathOperationFunction = (a, b) => {
    try {
      const operation = 'subtract';
      const areNumbers = checkNumbers(a, b, operation);
      if (areNumbers) {
        const num_A = Number(a);
        const num_B = Number(b);
        return num_A - num_B;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const multiply: MathOperationFunction = (a, b) => {
    try {
      const operation = 'multiply';
      const areNumbers = checkNumbers(a, b, operation);
      if (areNumbers) {
        const num_A = Number(a);
        const num_B = Number(b);
        return num_A * num_B;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const divide: MathOperationFunction = (a, b) => {
    try {
      const operation = 'divide';
      const areNumbers = checkNumbers(a, b, operation);
      if (areNumbers) {
        const num_A = Number(a);
        const num_B = Number(b);
        return num_A / num_B;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const remainder: MathOperationFunction = (a, b) => {
    try {
      const operation = 'remainder';
      const areNumbers = checkNumbers(a, b, operation);
      if (areNumbers) {
        const num_A = Number(a);
        const num_B = Number(b);
        return num_A % num_B;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getOperation: GetOperation = (operation) => {
    const operationsObject = {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      remainder: remainder,
    };

    if (!operationsObject[operation]) {
      throw new Error(`Invalid Mathematical Operation Type, operation: ${operation}`);
    }

    return operationsObject[operation];
  };
  return {
    add,
    subtract,
    divide,
    multiply,
    remainder
  }
}
