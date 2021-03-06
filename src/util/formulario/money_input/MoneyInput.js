import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from 'material-ui/TextField'

export const MoneyInput = (props) => {
  return (
    <NumberFormat
      {...props}
      hintText="R$ 0,00"
      customInput={TextField}
      thousandSeparator={"."}
      decimalPrecision={2}
      decimalSeparator={","}
      prefix={"R$ "}
    />
  )
}

export default MoneyInput
