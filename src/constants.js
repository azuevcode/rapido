import { createNumberArray } from './utils';

// Таким способом решил сгенерировать начальный объект чисел :)
export const NUMBERS = {
  firstField: createNumberArray(20),
  secondField: createNumberArray(2),
};

// Максимально допустимое количество выбранных номеров из первого поля
export const FIRST_MAX_SELECTED = 8;
// Максимально допустимое количество выбранных номеров из второго поля
export const SECOND_MAX_SELECTED = 1;
