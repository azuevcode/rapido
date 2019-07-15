import React, { useState } from 'react';
import {
    checkCalculateAccessibility,
    generateNumberArrays,
    checkFieldResult,
} from './utils';

const CalculationContainer = ({
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
    
    return showResult ?
        <CalculationArea /> :
        <ResultArea
            isTicketWon={isTicketWon}
            onRepeatAgain={}
        />;
}

export default CalculationContainer;