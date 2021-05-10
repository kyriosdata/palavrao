const evitar = require("../src/index");

test("palavra em branco não é palavrão", () => {
  expect(evitar()).toBe(false);
  expect(evitar("")).toBe(false);
  expect(evitar("  ")).toBe(false);
});

test("palavra adequada não é encontrada", () => {
  expect(evitar("saúde")).toBe(false);
});

test("xumbrega é um termo que pode ser evitado", () => {
  expect(evitar("xumbrega")).toBe(true);
  expect(evitar(" xumbrega   ")).toBe(true);
  expect(evitar(" XUMbrega")).toBe(true);
});

test("XUMbrega deve ser evitado", () => {
  expect(evitar(" XUMbrega")).toBe(true);
});
