import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonUrl from '../ButtonUrl';
import FormInput from './FormInput';
import FormNumberInput from './FormNumberInput';

const FormWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-flow: column;
  padding: 0 16px;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 16px;
  font-size: 30px;
  margin-bottom: 16px;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 21px;
`;

const AllInputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const FormStyling = styled.form`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isFilledIn, setIsFilledIn] = useState(false);

  const submitUser = () => {
    window.location.replace(
      `${
        import.meta.env.VITE_MAIL_API_URL
      }/?name=${name}&firstName=${firstName}&email=${email}&age=${age}&krasenwin=false`
    );
  };

  useEffect(() => {
    if (
      name !== '' &&
      firstName !== '' &&
      email !== '' &&
      age !== '' &&
      acceptedTerms
    ) {
      setIsFilledIn(true);
    } else {
      setIsFilledIn(false);
    }
  }, [name, firstName, email, age, acceptedTerms]);

  return (
    <FormWrapper>
      <Title>Wie is deze winnaar?</Title>
      <FormStyling onSubmit={() => submitUser()}>
        <AllInputWrapper>
          <InputsWrapper>
            <FormInput
              value={name}
              setValue={(e) => setName(e.currentTarget.value)}
              label={'Naam'}
              inputType={'text'}
            />
            <FormInput
              value={firstName}
              setValue={(e) => setFirstName(e.currentTarget.value)}
              label={'Voornaam'}
              inputType={'text'}
            />
          </InputsWrapper>
          <InputsWrapper>
            <FormInput
              value={email}
              setValue={(e) => setEmail(e.currentTarget.value)}
              label={'E-mail'}
              inputType={'email'}
            />
            <FormNumberInput
              value={age}
              setValue={(e) => setAge(e.currentTarget.value)}
              label={'Leeftijd'}
            />
          </InputsWrapper>
          <InputsWrapper>
            <label>
              <input
                type='checkbox'
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                name='accept'
                value='accepted'
              />
              Ik sta toe dat Acadmeicshop me mag mailen voor commerciële
              doeleinden
            </label>
          </InputsWrapper>
        </AllInputWrapper>
        <ButtonUrl canBeClicked={isFilledIn} onClick={(e) => submitUser(e)} />
      </FormStyling>
    </FormWrapper>
  );
};

export default Form;
