/**
 * Функция для фильтрации выбранных чисел
 * @param {object} item - объект с выбранным числом
 */
export const filterSelected = item => item.selected;

/**
 * Функция для формирования массива выбранных чисел
 * @param {array} selected - массив-аккумулятор для конечного результата
 * @param {object} item - объект с выбранным числом
 */
export const assembleSelectedValues = (selected, item) => {
  return item.selected ? [...selected, item.value] : selected;
};

/**
 * Генерирует массив рандомных чисел определенного размера
 * @param {number} size - размер результирующего массива
 * @param {number} maxBound - верхняя граница
 * @returns {array}
 */
export const generateRandomArray = (size, maxBound) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (maxBound - 1)) + 1);
};

/**
 * Проверяет количество совпадение между пользовательскими и случайно сгенерированными числами
 * @param {array} userNumbers - пользовательские числа
 * @param {array} randomNumbers - случайно сгенерированные числа
 * @returns {number}
 */
export const checkFieldMatches = (userNumbers, randomNumbers) => {
  let matches = 0;
  userNumbers.forEach((selectedNumber) => {
    if (randomNumbers.includes(selectedNumber)) matches++;
  });
  return matches;
};

/**
 * Случайным образом выбирает числа в массиве
 * @param {array} numbers - массив объектов чисел
 * @param {number} maxSelectCount - ограничение на количество выбранных чисел
 * @returns {array}
 */
export const selectRandomNumbers = (numbers = [], selectCount) => {
  const randomIndices = new Set();

  while (randomIndices.size !== selectCount) {
    randomIndices.add(Math.floor(Math.random() * numbers.length));
  }

  return numbers.map((item, index) => {
    const selected = randomIndices.has(index);
    return { ...item, selected, disabled: !selected };
  });
};
