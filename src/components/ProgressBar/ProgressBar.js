/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const wrapperWidth = 370
  const height = (() => {
    switch (size) {
      case 'large':
        return 24
      case 'medium':
        return 12
      case 'small':
        return 8
    }
  })()

  return <Wrapper w={wrapperWidth} h={height} size={size}>
    <Bar value={value} />
  </Wrapper>;
};

const Wrapper = styled.div`
  width: ${p => p.w}px;
  height: ${p => p.h}px;
  padding: ${p => p.size === 'large' && 4}px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: ${COLORS.transparentGray35} inset 0 2px 4px 0;
`

const Bar = styled.div`
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 2px 0 0 2px;
`

export default ProgressBar;
