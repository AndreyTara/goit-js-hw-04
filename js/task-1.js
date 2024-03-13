/**
 * Перевірка кількості продуктів до емності продукті кошика.
 * @param {object} products - Cписок товару та кількість.
 * @param {number} containerSize - Емність кошика для складання товару.
 * @returns {boolean} - false/true перевіряє відповідність емності кошика, тобто емність довінює або менше вказаної.
 */

function isEnoughCapacity(products, containerSize) {
  const productsValues = Object.values(products);
  let productsCounted = 0;
  productsValues.forEach(productsValue => {
    productsCounted += productsValue;
  });

  // Заміна послідовностей пробілів на один тире
  return productsCounted <= containerSize;
}

console.log('Задача 1. Пакування товарів');
// // У консоль будуть виведені результати її роботи.
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
