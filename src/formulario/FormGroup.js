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
                        hintText={this.props.title}
                        fullWidth={true}
                        errorText={errorMessage}
                        name={this.props.name}
                        onChange={this.changeValue}
                        value={this.getValue() == null ? '' : this.getValue()}
                    />
                </Col>
            </Row>
        )
    }
})

export default HOC(MyInput)
