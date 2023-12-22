const getButter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Husband got butter!");
      resolve("Butter");
    }, 1000);
  });
};

// Promise version of getColdDrinks
const getColdDrinksPromise = (butter) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Husband got ${butter}, and now getting cold drinks!`);
      resolve(`${butter} and Cold Drinks`);
    }, 1500);
  });
};

// Async/Await version of getColdDrinks
const getColdDrinksAsyncAwait = async () => {
  try {
    const butter = await getButter();
    const result = await getColdDrinksPromise(butter);
    console.log(`Async/Await Result: ${result}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Promise version of the entire process
const getButterAndColdDrinksPromise = () => {
  return getButter()
    .then((butter) => getColdDrinksPromise(butter))
    .then((result) => {
      console.log(`Promise Result: ${result}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Example usage
console.log("Using Async/Await:");
getColdDrinksAsyncAwait();

console.log("\nUsing Promises:");
getButterAndColdDrinksPromise();
