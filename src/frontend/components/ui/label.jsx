import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../../types'
import { fonts, colors, sizes } from '../../styles/variables'

const StyledLabel = styled.label.attrs({
  className: 'label',
})`
  &&& {
    display: block;
    text-transform: uppercase;
    font-size: ${fonts.min};
    color: ${colors.lightText};
    font-weight: normal;
    margin: 0 0 ${sizes.paddingMin} 0;
    letter-spacing: 0.1em;
  }
`

/**
 * @class
 * @classdesc
 * Represents labels inside the application.
 *
 * @hideconstructor
 * @component
 * @example
 * return (
 * <WrapperBox border>
 *   <Label>Some Label:</Label>
 *   <p>Text below the label</p>
 * </WrapperBox>
 * )
 */
const Label = props => (<StyledLabel {...props} />)

Label.propTypes = {
  children: childrenType,
}

Label.defaultProps = {
  children: null,
}

export default Label
