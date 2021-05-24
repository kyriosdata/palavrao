const { normaliza } = require("../src/index");

test("palavra normalizada não se altera", () => {
  expect(normaliza("")).toBe("");
  expect(normaliza("a")).toBe("a");
  expect(normaliza("palavra")).toBe("palavra");
});

test("extremidades com espaços removidas", () => {
  expect(normaliza(" ")).toBe("");
  expect(normaliza(" a")).toBe("a");
  expect(normaliza("b ")).toBe("b");
  expect(normaliza("    ok tres palavras     ")).toBe("ok tres palavras");
});

test("acentos removidos", () => {
  expect(normaliza("áéíóú àèìòù äëïöü")).toBe("aeiou aeiou aeiou");
  expect(normaliza("ç")).toBe("c");
});

test("maiúscula para minúscula", () => {
  expect(normaliza("AEIOU XYZW")).toBe("aeiou xyzw");
});

test("null ou indefined é string vazia", () => {
  expect(normaliza()).toBe("");
  expect(normaliza(undefined)).toBe("");
  expect(normaliza(null)).toBe("");
  expect(normaliza("")).toBe("");
});

test("vários ajustes", () => {
  expect(normaliza("  aÇaí    produz  fRUTO  ")).toBe("acai produz fruto");
});
