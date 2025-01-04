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
  const design = designs[size]

  return <Wrapper w={width}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input
      placeholder={placeholder}
      padding={design.padding}
      fontSize={design.fontSize}
      border={design.border}
    />
    <InputIcon id={icon} size={design.iconSize} />
  </Wrapper>;
};

const designs = {
  small: {
    iconSize: 16,
    fontSize: '0.875rem',
    padding: '4px 8px 4px 24px',
    border: 1,
  },
  large: {
    iconSize: 24,
    fontSize: '1rem',
    padding: '8px 12px 7px 36px',
    border: 2,
  },
}

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
  border-bottom: ${p => p.border}px solid black;
  padding: ${p => p.padding};
  
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${p => p.fontSize};
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
