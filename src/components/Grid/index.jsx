import React from 'react';
import Cell from 'components/Cell';
import { Grid } from './styles';

const GridComponent = ({
  items = [],
  onSelectedChange,
}) => {
  const handleSelectedNumbersChange = index => (active) => {
    const updatedNumbers = active ?
      items.
  };

  return (
    <Grid>
      {
        items.map(({ value, active }, index) => (
          <Cell
            key={index}
            active={active}
            onActiveChange={handleSelectedNumbersChange(index)}
          >
            {value}
          </Cell>
        ))
      }
    </Grid>
  );
};

GridComponent.displayName = 'Grid';
export default GridComponent;
