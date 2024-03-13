/**
 * Об'єкт profile описує профіль користувача на ігровій платформі.
 * У його властивостях зберігається ім’я профілю username та
 * кількість активних годин playTime, проведених у грі.
 * @typedef {Object} profile
 * @property {string} username - ім’я користувача профілю.
 * @property {number} playTime - кількість активних годин.
 * @method {Function} changeUsername - Метод для зміни імені користувача.
 * @method {Function} updatePlayTime - Метод для оновлення кількості активних годин.
 * @method {Function} getInfo - Метод для отримання інформації про профіль користувача.
 */

/**
 * Задає початковий профіль користувача на ігровій платформі.
 * @param {profile} profile - Об'єкт, що представляє профіль гравця.
 */

const profile = {
  username: 'Jacob',
  playTime: 300,
  /**
   * Змінює ім'я користувача профілю.
   * @param {string} newName - Нове ім'я користувача.
   */
  changeUsername(newName) {
    this.username = newName;
  },
  /**
   * Оновлює кількість активних годин гравця.
   * @param {number} hours - Кількість годин для додавання.
   */
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  /**
   * Повертає рядок із інформацією про профіль гравця.
   * @returns {string} - Рядок із інформацією про профіль гравця.
   */
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log('Задача 3. Профіль гравця');
// // У консоль будуть виведені результати її роботи.
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
