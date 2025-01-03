/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const wrapperWidth = 370
  const padding = 4

  const innerWidth = wrapperWidth - padding * 2;
  const barWidth = Math.min(innerWidth * (value / 100), innerWidth);

  return <Wrapper w={wrapperWidth} padding={padding}>
    <Bar w={barWidth} />
  </Wrapper>;
};

const Wrapper = styled.div`
  width: ${p => p.w}px;
  height: 16px;
  padding: ${p => p.padding}px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: ${COLORS.transparentGray35} inset 0 2px 4px 0;
`

const Bar = styled.div`
  width: ${p => p.w}px;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 2px 0 0 2px;
`

export default ProgressBar;
