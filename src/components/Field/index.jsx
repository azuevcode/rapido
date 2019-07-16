import React from 'react';
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
        onSelectedChange={(index) => { onSelectedNumbersChange(index); }}
      />
    </Field>
  );
};

FieldComponent.displayName = 'Field';
export default FieldComponent;
