// expect(0).toBe(4) - testa se o valor esperado é igual
// expect(0).toEqual([4, 5]) - testa se os valores de um objeto ou array esperado são iguais
// expect(0).not.toBe(6) - testa se a forma negativa
// expect(0).toBeNull() Testa se o valor é exatamente null 
// expect(0).toBeUndefined() Testa se o valor é exatamente undefined
// expect(0).not.toBeDefined() Testa se o valor não é um undefined
// expect(0).not.toBeTruthy() Testa se o valor é exatamente verdadeiro(true)
// expect(0).toBeFalsy() Testa se o valor é exatamente falso(false)
// expect(0).toBeGreaterThan(3) Verifica se o valor é maior que 3
// expect(0).toBeGreaterThanOrEqual(3.5) Verifica se o valor é maior ou igual a 3.5
// expect(0).toBeLessThan(5) Verifica se o valor é menor que 5
// expect(0).toBeLessThanOrEqual(4.5) Verifica se o valor é menor ou igual a 4.5
// expect(0.37889).toBeCloseTo(0.3) Verifica se o valor é aproximado a 0.3
// expect("team").not.toMatch(/I/) Verifica se não há a letra I na palavra team
// expect("Christoph").toMatch(/stop/) Verifica se há a letra stop na palavra Christoph
// expect(array).toContain("beer") Verifica se contén a palavra beer no array
// expect(new Set(array)).toContain("beer") Verifica se contén a palavra beer no array
// expect(compileAndroidCode).toThrow() Espera que aconteça alguma exceção
// expect(compileAndroidCode).toThrow(ConfigError) Espera que aconteça alguma exceção do tipo da ConfigError
// expect(compileAndroidCode).toThrow("you are using the wrong JDK") Verifica se o erro é igual esse valor
// expect(compileAndroidCode).toThrow(/JDK/) Verifica se há a palavra JDK no valor do erro
 

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("array assignment", () => {
  const data = [1];
  data.push(2);
  expect(data).toEqual([1, 2]);
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull(); // Testa se o valor é exatamente null 
  expect(n).not.toBeUndefined(); // Testa se o valor é exatamente undefined
  expect(n).toBeDefined(); // Testa se o valor não é um undefined
  expect(n).not.toBeTruthy(); // Testa se o valor é exatamente verdadeiro(true)
  expect(n).toBeFalsy(); // Testa se o valor é exatamente falso(false)
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull(); // Testa se o valor não é null 
  expect(z).toBeDefined(); // Testa se o valor não é um undefined
  expect(z).not.toBeUndefined(); // Testa se o valor não é um undefined
  expect(z).not.toBeTruthy(); // Testa se o valor não é verdadeiro (true)
  expect(z).toBeFalsy(); // Testa se o valor é exatamente falso(false)
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // Verifica se o valor é maior que 3
  expect(value).toBeGreaterThanOrEqual(3.5); // Verifica se o valor é maior ou igual a 3.5
  expect(value).toBeLessThan(5); // Verifica se o valor é menor que 5
  expect(value).toBeLessThanOrEqual(4.5); // Verifica se o valor é menor ou igual a 4.5

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3); // Verifica se o valor é aproximado a 0.3
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/); // Verifica se não há a letra I na palavra team
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/); // Verifica se há a letra stop na palavra Christoph
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer"); // Verifica se contén a palavra beer no array
  expect(new Set(shoppingList)).toContain("beer"); // Verifica se contén a palavra beer no array
});


class ConfigError extends Error {}

// Testa se a função dispara alguma exceção
function compileAndroidCode() {
  throw new ConfigError("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow(); // Expera que aconteça alguma exceção
  expect(compileAndroidCode).toThrow(ConfigError); // Expera que aconteça alguma exceção do tipo da ConfigError

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong JDK"); // Verifica se o erro ŕ igual esse valor
  expect(compileAndroidCode).toThrow(/JDK/); // Verifica se há a palavra JDK no valor do erro
});