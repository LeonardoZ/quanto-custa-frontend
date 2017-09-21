import React from 'react'
import Formsy, { HOC } from 'formsy-react'
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

export const MoneyInput = React.createClass({
  mixins: [Formsy.Mixin],
  getInitialState() {
    return ({ amount: "0.00" })
  },

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({ amount: maskedvalue })
  },

  render() {
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null)
    const errorMessage = this.getErrorMessage()
    return (
      <FormGroup controlId={this.props.id} className={className}
        validationState={this.showError() ? 'error' : null}>
        <ControlLabel>{this.props.title}</ControlLabel>
        <NumberFormat
          value={this.state.amount}
          thousandSeparator={true}
          prefix={'R$'}
          onChange={(e, value) => {
            const formattedValue = e.target.value // $222,3
            //value will be non formatted value ie, 2223
            this.setState({ profit: value })
          }} />
        {errorMessage && <HelpBlock className='validation-error'>{errorMessage}</HelpBlock>}
      </FormGroup>
    )
  }
})

export default HOC(MoneyInput)
