// const delay = ms => {
//   // Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

const promise = new Promise((resolve, reject) => {
  /*
   * Эта функция будет вызвана автоматически. В ней можно выполнять
   * любые асинхронные операции. Когда они завершатся — нужно
   * вызвать одно из: resolve(результат) при успешном выполнении,
   * или reject(ошибка) при ошибке.
   */
});
console.log(promise);