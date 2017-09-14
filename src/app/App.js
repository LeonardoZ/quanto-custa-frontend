import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRoutes } from '../Routes'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'
import ErroPanel from '../erro/ErroPanel'
import { limparErros } from '../actions/OrcamentoActions'

const style = {
	margin: 24,
};

class App extends Component {

	render() {
		console.log( this.props.erro)
		let erro = this.props.erro.temErro ?
			<Row>
				<Col sm={12} xs={12}>
					<ErroPanel limparErros={() => this.props.limparErros()} erroMsg={this.props.erro.mensagem} />
				</Col>
			</Row>
			: ""

		return (
			<Router>
				<div>
					<AppBar
						title="Quanto-Custa?"
						iconClassNameRight="muidocs-icon-navigation-expand-more" />
					{erro}
					<Grid fluid>
						<Row>
							<Col sm={12} xs={12} style={style}>
								{getRoutes(this.props.isAuthenticated)}
							</Col>
						</Row>
					</Grid>
				</div>
			</Router >
		)
	}
}

function mapStateToProps({ errosStateTree }) {
	return {
		erro: errosStateTree.erro
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
		limparErros
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
