import React from 'react';
import PropTypes from 'prop-types';
import Cell from 'components/Cell';
import { Grid } from './styles';

const GridComponent = ({
  items = [],
  onSelectedItemsChange,
}) => {
  const handleSelectedItemsChange = clickedIndex => () => {
    const updatedItems = items.map((item, index) => {
      return clickedIndex === index ? { ...item, selected: !item.selected } : item;
    });
    onSelectedItemsChange(updatedItems);
  };

  return (
    <Grid>
      {
        items.map(({ value, selected, disabled }, index) => (
          <Cell
            key={`cell${value}`}
            selected={selected}
            disabled={disabled}
            onClick={handleSelectedItemsChange(index)}
          >
            {value}
          </Cell>
        ))
      }
    </Grid>
  );
};

GridComponent.displayName = 'Grid';
GridComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
  })).isRequired,
  onSelectedItemsChange: PropTypes.func.isRequired,
};

export default GridComponent;
