
function assertEquals(actual, expected, message = '') {
  if (actual !== expected) throw new Error(message || `Expected ${expected}, got ${actual}`);
}

function assertContains(value, substring) {
  if (!value.includes(substring)) throw new Error(`"${value}" does not contain "${substring}"`);
}

function assertThrows(fn) {
  try {
    fn();
  } catch (e) {
    return true;
  }
  throw new Error("Expected function to throw");
}

// Tests
assertEquals(2 + 2, 4);
assertContains("hello world", "world");
assertThrows(() => { throw new Error("Oops") });
