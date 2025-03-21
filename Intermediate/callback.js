/**
 * A callback is a function which is passed to another function as a argument to be executed later. It helps Javascript to perform asynchronous programming.
 *
 * Cons of Callback: Callback Hell and Inversion of Control
 */

const cart = ["shirts", "pants", "mobile", "watch"];

api.createOrder();
api.proceedToPayment();
api.showOrderSummary();
api.updateWallet();

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
