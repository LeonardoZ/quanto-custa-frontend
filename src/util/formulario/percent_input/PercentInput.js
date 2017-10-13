import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from 'material-ui/TextField'

export const MoneyInput = (props) => {
  return (
    <NumberFormat
      {...props}
      allowNegative={false}
      isAllowed={(values) => {
        return !(values.floatValue > 100.00)
      }}
      customInput={TextField}
      thousandSeparator={"."}
      decimalPrecision={2}
      decimalSeparator={","}
      suffix={" %"}
    />
  )
}

export default MoneyInput
