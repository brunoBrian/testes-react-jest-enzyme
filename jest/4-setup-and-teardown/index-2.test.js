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

// Roda somente uma vez antes do primeiro teste
beforeAll(() => {
  return initializeCityDatabase();
});

// Roda somente uma vez antes do ultimo teste
afterAll(() => {
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
