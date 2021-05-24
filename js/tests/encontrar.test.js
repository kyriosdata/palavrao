const { evitavel } = require("../src/index");

test("palavra em branco não é palavrão", () => {
  expect(evitavel()).toBe(false);
  expect(evitavel("")).toBe(false);
  expect(evitavel("  ")).toBe(false);
});

test("palavra adequada não é encontrada", () => {
  expect(evitavel("saúde")).toBe(false);
});

test("xumbrega é um termo que pode ser evitado", () => {
  expect(evitavel("xumbrega")).toBe(true);
  expect(evitavel(" xumbrega   ")).toBe(true);
  expect(evitavel(" XUMbrega")).toBe(true);
});

test("XUMbrega deve ser evitado", () => {
  expect(evitavel(" XUMbrega")).toBe(true);
});
