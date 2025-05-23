/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Negative values are not allowed");
      return;
    }

    setTimeout(() => {
      resolve(a + b);
    }, 500);
  });
}

sum(3, 4)
  .then((result) => console.log("Sum:", result))
  .catch((err) => console.error(err));

sum(-1, 5)
  .then((result) => console.log("Sum:", result))
  .catch((err) => console.error("Error:", err));
