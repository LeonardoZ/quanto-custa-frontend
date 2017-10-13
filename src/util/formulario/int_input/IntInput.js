import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from 'material-ui/TextField'

export const IntInput = (props) => {
  return (
    <NumberFormat
      {...props}
      allowNegative={false}
      isAllowed={(values) => {
        return !(values.floatValue > 12)
      }}
      format="##"
      customInput={TextField}
    />
  )
}

export default IntInput
