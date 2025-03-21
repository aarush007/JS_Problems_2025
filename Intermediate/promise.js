/**
 * Promise is an object representing the eventual completion or, failure of an asynchronous operation.
 * In other words, it is an object which holds the future value of an asynchronous operation.
 *
 * Promise is immutable. It is used to avoid callback hell.
 *
 * It has three states: Fullfilled, Pending, Rejected
 */

const GITHUB_API = "https://api.github.com/users/aarush007";
const user = fetch(GITHUB_API); // Return a promise
console.log(user);

const cart = ["Shirts", "Pants", "Shoes"];

// Callback Hell & Inversion of Control Problem
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (showPaymentInfo) {
    showOrderSummary(showPaymentInfo, function (showPaymentInfo) {
      updateWalletBalance(showPaymentInfo);
    });
  });
});

// Solution is to use Promise and Promise Chaining

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (showPaymentInfo) {
    return showOrderSummary(showPaymentInfo);
  })
  .then(function (showPaymentInfo) {
    return updateWalletBalance(showPaymentInfo);
  });

// Arrow Function makes it more readable

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((showPaymentInfo) => showOrderSummary(showPaymentInfo))
  .then((showPaymentInfo) => updateWalletBalance(showPaymentInfo));
