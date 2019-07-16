import React, { useState } from 'react';
import Field from 'components/Field';
import { Button } from 'components/ui';
import {
  checkCalculateAccessibility,
  generateNumberArrays,
  checkFieldResult,
} from './utils';

const FIRST_FIELD_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const SECOND_FIELD_NUMBERS = [1, 2];

const CalculationArea = ({
  isRandomSelect,
  onResultShow,
  onTicketResultChange,
}) => {
  const [selectedNumbers, updateSelectedNumbers] = useState({
    firstField: [],
    secondField: [],
  });
  const [canCalculate, toggleCalculationAccessibility] = useState(false);
  const { firstField = [], secondField = [] } = selectedNumbers;

  const handleSelectedNumbersChange = fieldKey => (numbers) => {
    const updatedNumbers = {
      ...selectedNumbers,
      [fieldKey]: numbers,
    };
    const canCalculateResult = checkCalculateAccessibility(updatedNumbers);

    updateSelectedNumbers(updatedNumbers);

    if (canCalculateResult) {
      toggleCalculationAccessibility(!canCalculate);
    }
  };

  const handleCalculate = () => {
    const [firstRandomArray, secondRandomArray] = generateNumberArrays();
    const firstFieldSuccess = checkFieldResult(firstField, firstRandomArray);
    const secondFieldSuccess = checkFieldResult(secondField, secondRandomArray);
    const result = firstFieldSuccess && secondFieldSuccess;

    onResultShow();
    onTicketResultChange(result);
  };

  return (
    <div>
      <div>
        <Field
          name="Поле 1"
          description="Отметьте 8 чисел"
          numbers={FIRST_FIELD_NUMBERS}
          // selectedNumbers={firstField}
          onSelect={handleSelectedNumbersChange('firstField')}
        />
        <Field
          name="Поле 2"
          description="Отметьте 1 число"
          numbers={SECOND_FIELD_NUMBERS}
          // selectedNumbers={secondField}
          // onSelect={handleSelectedNumbersChange('secondField')}
        />
      </div>
      <Button
        onClick={handleCalculate}
        disabled={!canCalculate}
      >
        Показать результаты
      </Button>
    </div>
  );
};

export default CalculationArea;
