import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue}
      <TriggerIcon id="chevron-down" strokeWidth={2} size={24} />
      <SelectInput value={value} onChange={onChange}>
        {children}
      </SelectInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 64px;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  color: ${COLORS.gray700};
  border: none;
  width: max-content;
  
  &:hover {
    color: black;
  }
  
  &:focus-within {
    outline: blue;
  }
`

const TriggerIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto 0;
`

const SelectInput = styled.select`
  appearance: none;
  position: absolute;
  opacity: 0;
  inset: 0;
`

export default Select;
