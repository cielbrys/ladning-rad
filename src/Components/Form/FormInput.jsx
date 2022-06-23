import React from 'react';
import styled from 'styled-components';
import { FormInputField } from './ComponentsStyle';

const FormLabel = styled.label`
  display: flex;
  flex-flow: column;
  font-size: 18px;
  font-weight: 600;
`;

const FormInput = ({ label, inputType, value, setValue }) => {
  return (
    <FormLabel>
      {label}
      <FormInputField
        value={value}
        onChange={setValue}
        type={inputType}
        placeholder={label}
      />
    </FormLabel>
  );
};

export default FormInput;
