const calculator = require("./calculator");

describe("calculator unit tests", () => {
  // can use test or it here
  test("add()", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(3, 2)).toBe(5);
    // try it with a zero
    // try it with a negative number
    // try
    expect(calculator.add(3, 0)).toBe(3);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(1)).toBe(1);
    expect(calculator.add()).toBe(0);
    // refactor with new functionality
    expect(calculator.add(2, 2, 2)).toBe(6);
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });

  test("subtract()", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.subtract(3, 2)).toBe(1);
    // try it with a zero
    // try it with a negative number
    // try
    expect(calculator.subtract(3, 0)).toBe(3);
    expect(calculator.subtract(-1, 1)).toBe(-2);
    expect(calculator.subtract(-1, -2)).toBe(1);

    expect(calculator.subtract(1)).toBe(1);
    expect(calculator.subtract()).toBe(0);
  });

  test("multiply()", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(3, 2)).toBe(6);

    expect(calculator.multiply(3, 0)).toBe(0);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(-1, -2)).toBe(2);

    expect(calculator.multiply(1)).toBe(0);
    expect(calculator.multiply()).toBe(0);
  });

  test("divide()", () => {
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.divide(3, 2)).toBe(1.5);

    expect(() => calculator.divide(3, 0)).toThrow();
    expect(calculator.divide(-1, 1)).toBe(-1);
    expect(calculator.divide(-1, -2)).toBe(0.5);

    expect(calculator.divide(1)).toBe(1);
    expect(calculator.divide()).toBe(1);
    expect(() => calculator.divide("hello", "world")).toThrow();
  });
});
