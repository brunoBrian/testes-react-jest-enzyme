function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 100);
}

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 100);
  });
}

// Retorna um erro, mas como uma string
function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 100);
  });
}

// Retorna um erro
function fetchDataPromiseWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error"));
    }, 100);
  });
}

// Don't do this!
// test("the data is peanut butter", () => {
//   function callback(data) {
//     expect(data).toBe("peanut butter wrong");
//   }

//   fetchData(callback);
// });


// É necessario chamar esse callback done, para realmente testar a função assíncrona
test("the data is peanut butter", done => {
  function callback(data) {
    expect(data).toBe("peanut butter"); // Espera que dê sucesso e o retorno da promisse seja igual peanut butter
    done();
  }

  fetchData(callback);
});



// Quando for promisse, ou dar um return na promisse ou aplicar o calçback done()
test("the data is peanut butter", done => {
  fetchDataPromise().then(data => {
    expect(data).toBe("peanut butter"); // Espera que dê sucesso e o retorno da promisse seja igual peanut butter
    done();
  });
});

test("the data is peanut butter", () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe("peanut butter"); // Espera que dê sucesso e o retorno da promisse seja igual peanut butter
  });
});



test("the fetch fails with an error", () => {
  expect.assertions(1); // Espera que rode o teste com esse erro pelo menos uma vez
  return fetchDataPromiseWithErrorMessage().catch(e =>
    expect(e).toMatch("error") // Espera que retorne um erro e encontre a palavra error
  );
});

test("the data is peanut butter", () => {
  return expect(fetchDataPromise()).resolves.toBe("peanut butter"); // Espera que o retorno da promisse seja igual peanut butter
});

test("the fetch fails with an error", () => {
  return expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch("error"); // Espera que o retorno da promisse de erro e contenha a palavra error
});

test("the data is peanut butter", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("peanut butter"); // Espera que dê sucesso com async await e retorne a palavra peanut butter
});

test("the fetch fails with an error", async () => {
  expect.assertions(1); // Espera que caia em um erro
  try {
    await fetchDataPromiseWithErrorMessage();
  } catch (e) {
    expect(e).toMatch("error"); // Espera que retorne um erro e encontre a palavra error
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchDataPromise()).resolves.toBe("peanut butter"); // Espera que dê sucesso e retorne a palavra peanut butter
});

test("the fetch fails with an error", async () => {
  await expect(fetchDataPromiseWithError()).rejects.toThrow("error"); // Espera que retorne um erro e não uma string e contenha a palavra error
});
