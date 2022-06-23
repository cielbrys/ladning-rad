import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { COLORS } from '../Constants/Color';

const ButtonWrapper = styled.button`
  color: ${COLORS.green};
  border: none;
  background-color: ${(props) =>
    props.disabled ? COLORS.darkerGreen : COLORS.white};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'default')};
  text-decoration: none;
  font-size: 30px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 800;
  border-radius: 8px;
  justify-content: center;
  width: max-content;
  margin: auto;
`;

const ButtonUrl = ({ canBeClicked, ...props }) => {
  return (
    <ButtonWrapper
      type='submit'
      disabled={!canBeClicked}
      target='_blank'
      {...props}>
      Submit
      <ArrowForwardIosRoundedIcon />
    </ButtonWrapper>
  );
};

export default ButtonUrl;
