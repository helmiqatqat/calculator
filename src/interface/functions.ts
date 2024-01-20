export type CheckNumbers = (a: string, b: string, operation: string) => boolean;

export type MathOperationFunction = (a: string, b: string) => number | undefined;

export type GetOperation = (operation: CalculatorMathOperations) => MathOperationFunction;