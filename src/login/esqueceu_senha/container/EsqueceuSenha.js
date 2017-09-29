import React, {component}  from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'

class EsqueceuSenha extends Component {

}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EsqueceuSenha))