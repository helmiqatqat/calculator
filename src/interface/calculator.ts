type CalculatorValues = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '+' | '-' | '*' | '/' | '=' | '%' | '(' | ')' | 'AC' | 'Backspace';

type CalculatorOperations = 'number' | CalculatorMathOperations | 'result' | CalculatorClearOperations;

type CalculatorMathOperations = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

type CalculatorClearOperations = 'clear' | 'backspace';