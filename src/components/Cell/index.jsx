import React, { useState } from 'react';
import { Cell } from './styles';

const CellComponent = ({ children, onActiveChange }) => {
  const [active, toggleActive] = useState(false);
  const handleActiveChange = () => {
    onActiveChange(!active);
    toggleActive(!active);
  };

  return (
    <Cell onClick={handleActiveChange} active={active}>{children}</Cell>
  );
};

CellComponent.displayName = 'Cell';
export default CellComponent;
