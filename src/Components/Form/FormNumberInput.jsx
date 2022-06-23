import React from 'react';
import styled from 'styled-components';
import { FormInputField } from './ComponentsStyle';

const FormLabel = styled.label`
  display: flex;
  flex-flow: column;
  font-size: 18px;
  font-weight: 600;
  width: 20%;
`;

const StyledFormInputField = styled(FormInputField)`
  border: none;
  border-radius: 4px;
  font-size: 18px;
  padding: 5px;
  width: 100%;
  text-align: center;
`;

const FormNumberInput = ({ label, value, setValue }) => {
  return (
    <FormLabel>
      {label}
      <StyledFormInputField
        value={value}
        onChange={setValue}
        type='number'
        placeholder={label}
        max='99'
        min='16'
      />
    </FormLabel>
  );
};

export default FormNumberInput;
