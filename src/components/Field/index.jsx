import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/Grid';
import {
  Field,
  Head,
  Name,
  Description,
} from './styles';

const FieldComponent = ({
  name,
  description,
  numbers,
  onSelectedNumbersChange,
}) => {
  return (
    <Field>
      <Head>
        <Name sub>{name}</Name>
        <Description>{description}</Description>
      </Head>
      <Grid
        items={numbers}
        onSelectedItemsChange={onSelectedNumbersChange}
      />
    </Field>
  );
};

FieldComponent.displayName = 'Field';
FieldComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectedNumbersChange: PropTypes.func.isRequired,
};

export default FieldComponent;
