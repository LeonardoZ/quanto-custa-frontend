import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRoutes } from '../Routes'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'

const style = {
  margin: 24,
};

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<AppBar
						title="Quanto-Custa?"
						iconClassNameRight="muidocs-icon-navigation-expand-more" />
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


export default connect(null, null)(App)
