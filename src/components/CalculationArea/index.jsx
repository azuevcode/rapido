import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Field from 'components/Field';
import { Button } from 'components/ui';
import {
  NUMBERS,
  FIRST_MAX_SELECTED,
  SECOND_MAX_SELECTED,
} from 'constants';
import magicWandIcon from './magic-wand.svg';
import {
  filterSelected,
  assembleSelectedValues,
  generateRandomArray,
  selectRandomNumbers,
  checkFieldMatches,
} from './utils';
import {
  MagicWand,
  ButtonContainer,
} from './styles';

const initialState = NUMBERS;

const CalculationArea = ({
  onResultShow,
  onTicketResultChange,
}) => {
  const [numbers, updateNumbers] = useState(initialState);
  const [canCalculate, toggleCalculationAccessibility] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const calculate = () => {
    const selectedFirstField = firstField.reduce(assembleSelectedValues, []);
    const selectedSecondField = secondField.reduce(assembleSelectedValues, []);
    const randomFirstField = generateRandomArray(FIRST_MAX_SELECTED, firstField.length + 1);
    const randomSecondField = generateRandomArray(SECOND_MAX_SELECTED, secondField.length + 1);
    const firstFieldMatches = checkFieldMatches(selectedFirstField, randomFirstField);
    const secondFieldMatches = checkFieldMatches(selectedSecondField, randomSecondField);
    const result = firstFieldMatches === 4 || (firstFieldMatches >= 3 && secondFieldMatches === 1);

    return {
      selectedNumber: {
        firstField: selectedFirstField,
        secondField: selectedSecondField,
      },
      isTicketWon: result,
    };
  };

  const sendRequest = (requestBody, requestsCount = 1) => {
    setTimeout(async () => {
      try {
        await axios.post('/finch-test', requestBody);
        onResultShow();
        onTicketResultChange(requestBody.isTicketWon);
      } catch (e) {
        if (requestsCount !== 3) {
          sendRequest(requestBody, requestsCount + 1);
        } else {
          setLoading(false);
          // таким способом решил вывести уведомление
          alert('Возникла ошибка при запросе');
        }
      }
    }, 2000);
  };

  const handleRandomNumbersSelect = () => {
    updateNumbers({
      firstField: selectRandomNumbers(initialState.firstField, FIRST_MAX_SELECTED),
      secondField: selectRandomNumbers(initialState.secondField, SECOND_MAX_SELECTED),
    });
  };

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

  const handleSubmit = () => {
    const { isTicketWon } = calculate();
    onResultShow();
    onTicketResultChange(isTicketWon);
  };

  const handleSubmitWithRequest = () => {
    const requestBody = calculate();
    setLoading(true);
    sendRequest(requestBody);
  };

  return (
    <div>
      <MagicWand
        src={magicWandIcon}
        onClick={handleRandomNumbersSelect}
        alt="magicWand"
        disabled={loading}
      />
      {
        loading ?
          <div>Загрузка...</div> :
          <React.Fragment>
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
            <ButtonContainer>
              <Button
                onClick={handleSubmit}
                disabled={!canCalculate}
              >
                Показать результаты (без запроса)
              </Button>
              <Button
                onClick={handleSubmitWithRequest}
                disabled={!canCalculate}
              >
                Показать результаты (с запросом)
              </Button>
            </ButtonContainer>
          </React.Fragment>
      }
    </div>
  );
};

CalculationArea.propTypes = {
  onResultShow: PropTypes.func.isRequired,
  onTicketResultChange: PropTypes.func.isRequired,
};

export default CalculationArea;
