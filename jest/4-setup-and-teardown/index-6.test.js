let globalVariable = "A";

test("first test", () => {
  expect(globalVariable).toBe("A");
  globalVariable = "B";
});

// Testa caso a variavel globalVariable seja A
test.only("second test", () => {
  console.log(globalVariable)
  expect(globalVariable).toBe("A");
});
