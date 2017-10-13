import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Col } from 'react-flexbox-grid'

export const PagamentoPagina = (props) => {
  return (
    <Col xs={12}>
      {props.children}
    </Col>
  )
}

export default PagamentoPagina