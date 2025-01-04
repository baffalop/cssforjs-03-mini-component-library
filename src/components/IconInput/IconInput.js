import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper w={width}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input placeholder={placeholder} />
    <InputIcon id={icon} size={16} />
  </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  width: ${p => p.w}px;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`

const Input = styled.input`
  appearance: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 4px 8px;
  padding-left: 24px;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  ::-webkit-input-placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`

export default IconInput;
