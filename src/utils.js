/**
 * Генерирует массив последовательности чисел (аналогия функции range)
 * @param {number} size - размер массива
 */
export const createNumberArray = (size) => {
  return Array.from({ length: size }, (value, key) => ({
    value: key + 1,
    selected: false,
    disabled: false,
  }));
};
