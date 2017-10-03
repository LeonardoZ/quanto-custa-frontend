import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Stepper from '../stepper/Stepper'

class ProgressoCadastro extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }


  render() {
    return (
      <Stepper isVertical={this.props.isVertical} styles={this.props.styles} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

function mapStateToProps({ orcamentoStateTree, unidadesStateTree, artefatosStateTree }) {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProgressoCadastro))
