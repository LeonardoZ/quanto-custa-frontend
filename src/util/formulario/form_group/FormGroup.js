import React from 'react'
import Formsy, { HOC } from 'formsy-react'
import TextField from 'material-ui/TextField'
import { Row, Col } from 'react-flexbox-grid'

export const MyInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'])
  },

  render() {
    const errorMessage = this.getErrorMessage()
    return (
      <Row>
        <Col xs={12} >
          <TextField
            name={this.props.name}
            floatingLabelText={this.props.title}
            fullWidth={true}
            type={this.props.type}
            errorText={errorMessage}
            onChange={this.changeValue}
            value={this.getValue() == null ? '' : this.getValue()}
          />
        </Col>
      </Row>
    )
  }
})

export default HOC(MyInput)
