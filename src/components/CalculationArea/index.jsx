import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'components/Field';
import { Button } from 'components/ui';
import {
  NUMBERS,
  FIRST_MAX_SELECTED,
  SECOND_MAX_SELECTED,
} from 'constants';
import icons from 'assets/svg';
import {
  filterSelected,
  getSelectedValue,
  generateRandomArray,
  checkFieldResult,
  selectRandomNumbers,
} from './utils';
import { MagicWand } from './styles';

const initialState = NUMBERS;

const CalculationArea = ({
  onResultShow,
  onTicketResultChange,
}) => {
  const [numbers, updateNumbers] = useState(initialState);
  const [canCalculate, toggleCalculationAccessibility] = useState(false);
  const { firstField = [], secondField = [] } = numbers;

  useEffect(() => {
    const selectedFirstField = firstField.filter(filterSelected);
    const selectedSecondField = secondField.filter(filterSelected);
    const calculateCheck =
      selectedFirstField.length === FIRST_MAX_SELECTED &&
      selectedSecondField.length === SECOND_MAX_SELECTED;

    if (calculateCheck !== canCalculate) {
      toggleCalculationAccessibility(calculateCheck);
    }
  }, [numbers, canCalculate]);

  const handleFieldChange = (fieldKey, maxSelected) => (fieldNumbers) => {
    const selectedFieldNumbers = fieldNumbers.filter(filterSelected);
    const updatedFields = {
      ...numbers,
      [fieldKey]: fieldNumbers.map(item => ({
        ...item,
        disabled: selectedFieldNumbers.length === maxSelected && !item.selected,
      })),
    };

    updateNumbers(updatedFields);
  };

  const handleCalculate = () => {
    const selectedFirstField = firstField.reduce(getSelectedValue, []);
    const selectedSecondField = secondField.reduce(getSelectedValue, []);
    const randomFirstField = generateRandomArray(FIRST_MAX_SELECTED, firstField.length + 1);
    const randomSecondField = generateRandomArray(SECOND_MAX_SELECTED, secondField.length + 1);
    const firstFieldSuccess = checkFieldResult(selectedFirstField, randomFirstField);
    const secondFieldSuccess = checkFieldResult(selectedSecondField, randomSecondField);
    const result = firstFieldSuccess && secondFieldSuccess;

    onResultShow();
    onTicketResultChange(result);
  };

  const handleRandomNumbersSelect = () => {
    updateNumbers({
      firstField: selectRandomNumbers(initialState.firstField, FIRST_MAX_SELECTED),
      secondField: selectRandomNumbers(initialState.secondField, SECOND_MAX_SELECTED),
    });
  };

  return (
    <div>
      <MagicWand
        src={icons.magicWand}
        onClick={handleRandomNumbersSelect}
        alt="magicWand"
      />
      <div>
        <Field
          name="Поле 1"
          description="Отметьте 8 чисел"
          numbers={firstField}
          maxSelectedCount={FIRST_MAX_SELECTED}
          onSelectedNumbersChange={handleFieldChange('firstField', FIRST_MAX_SELECTED)}
        />
        <Field
          name="Поле 2"
          description="Отметьте 1 число"
          numbers={secondField}
          maxSelectedCount={SECOND_MAX_SELECTED}
          onSelectedNumbersChange={handleFieldChange('secondField', SECOND_MAX_SELECTED)}
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

CalculationArea.propTypes = {
  onResultShow: PropTypes.func.isRequired,
  onTicketResultChange: PropTypes.func.isRequired,
};

export default CalculationArea;
