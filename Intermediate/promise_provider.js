const cart = ["shirt", "pant", "watch"];

// Consume a Promise

const promise = createOrder(cart); // OrderID

promise
  .then((orderID) => console.log(orderID))
  .catch((err) => console.log(err.message));

function validateCart(cart) {
  return false;
}

// Create a Promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderID = "12345";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 5000);
    }
  });

  return pr;
}
