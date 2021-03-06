import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRoutes } from '../../routes'
import { limparErros } from '../../state/erros/ErrosActions'
import { getUsuario } from '../../state/autenticacao/AuthActions'

class App extends Component {

	componentWillMount() {
		this.logarSeTiverTokenRegistrado()
	}

	render() {

		return (
			<Router>
				<div>
					{getRoutes(this.props.erro, () => this.props.limparErros(), this.props.isAuthenticated)}
				</div>
			</Router>
		)
	}

	logarSeTiverTokenRegistrado() {
		let token = sessionStorage.getItem("jwtToken")
		if (token && (token !== "undefined" || token !== undefined)) {
			this.props.getUsuario(token)
		}
	}
}

function mapStateToProps({ errosStateTree, authStateTree }) {
	return {
		erro: errosStateTree.erro,
		isAuthenticated: authStateTree.isAuthenticated
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		limparErros,
		getUsuario
	}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
