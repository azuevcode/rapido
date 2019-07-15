import React from 'react';
import {
    Field,
    Head,
    Name,
    Description,
} from './styles'; 

const FieldComponent = ({
    name,
    description,
}) => {
    return (
        <Field>
            <Head>
                <Name size={1.143}>{name}</Name>
                <Description>{description}</Description>
            </Head>
            {/* <Grid>

            </Grid> */}
        </Field>
    );
}

FieldComponent.displayName = 'Field';

export default FieldComponent;