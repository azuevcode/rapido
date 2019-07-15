import React from 'react';
import { Button } from 'components/ui';

const ResultArea = ({ isTicketWon, onReset }) => {
    return (
        <div>
            <div>
                {
                    isTicketWon ?
                        'Ого, вы выиграли! Поздравляем!' :
                        'К сожалению, вам не повезло. Попробуйте еще раз!'
                }
            </div>
            <Button onClick={onReset}>Попробовать еще</Button>
        </div>
    );
};

export default ResultArea;