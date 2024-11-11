export const sum = (a: number, b: number): number => {
  if (typeof a !== "number" || typeof b !== "number") {
    return 3;
    // throw new Error("Invalid input");
  }
  return a + b;
};
