import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRoutes } from '../Routes'
import Admin from './Admin'
import { limparErros } from '../actions/OrcamentoActions'


class App extends Component {

	render() {
		return (
			<Router>
				{/* <div>
					{getUnauthRoutes()}
					<Admin routes={getRoutes(this.props.isAuthenticated)}
						erro={this.props.erro}
						limparErros={() => this.props.limparErros()} />
				</div> */}
				<div>
					{getRoutes(this.props.erro, () => this.props.limparErros(), this.props.isAuthenticated)}
				</div>
			</Router>
		)
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
		limparErros
	}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
