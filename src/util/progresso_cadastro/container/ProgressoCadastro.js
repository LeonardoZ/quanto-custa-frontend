import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Stepper from '../stepper/Stepper'

class ProgressoCadastro extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Stepper isVertical={this.props.isVertical} styles={this.props.styles} estado={this.props.estado} />
    )
  }
}


function mapStateToProps({ stepperStateTree }) {
  return {
    estado: stepperStateTree
  }
}

export default withRouter(connect(mapStateToProps, null)(ProgressoCadastro))
