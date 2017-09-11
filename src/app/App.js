import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRoutes } from '../Routes'
import { Navbar, NavItem, Nav, Jumbotron,  Col, Grid, Row } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
			<Router>
      	<div>
					<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<span><Link to="/">Quanto-Custa?</Link></span>
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>
				<Jumbotron bsClass="jumbotron jumbotron-fluid">
					<h1>Quanto custa?</h1>
					<p>Defina o custo de seus projetos atráves de um orçamento detalhadamente elaborado.</p>
				</Jumbotron>
				<div className="container">
					 <Grid>
						<Row className="show-grid">
						  <Col sm={12} md={12}>
								{ getRoutes(this.props.isAuthenticated) } 
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
      </Router>
    )
  }
}


export default connect(null, null)(App)
