let cities = [];

function initializeCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities.push("Vienna");
      cities.push("San Juan");
      resolve();
    }, 100);
  });
}

function clearCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.includes(name);
}

// Dispara essa função antes de rodar cada um dos testes teste
beforeEach(() => {
  return initializeCityDatabase();
});

// Dispara essa função após rodar cada um dos testes
afterEach(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

test("has 2 cities", () => {
  expect(cities.length).toBe(2);
});
