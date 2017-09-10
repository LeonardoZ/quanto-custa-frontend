import React from 'react'
import Formsy, {HOC} from 'formsy-react'
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'

export const MyInput = React.createClass({
    mixins: [Formsy.Mixin], 
    
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'])
    },
    
    render() {
        const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null)
        const errorMessage = this.getErrorMessage()
        return (
             <FormGroup controlId={this.props.id} className={className}
                 validationState={this.showError() ? 'error' : null}>
                <ControlLabel>{this.props.title}</ControlLabel>
                <FormControl 
                    type={this.props.type || 'text'}
                    name={this.props.name}
                    onChange={this.changeValue}
                    value={this.getValue() == null ? '' : this.getValue()}
                    checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null} />
                {errorMessage && <HelpBlock className='validation-error'>{errorMessage}</HelpBlock>}
            </FormGroup>
        )
    }
})

export default HOC(MyInput)
