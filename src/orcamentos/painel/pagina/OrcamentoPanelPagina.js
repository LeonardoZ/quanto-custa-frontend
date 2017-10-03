import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Col } from 'react-flexbox-grid'

export const OrcamentoPanelPagina = (props) => {
  return (
    <Col xs={12}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Orçamentos" />  
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Ações" />
          <ToolbarSeparator />
          <RaisedButton label="Novo" onClick={() => props.novoOrcamento()} primary={true} />
        </ToolbarGroup>
      </Toolbar>
      {props.children}
    </Col>
  )
}

export default OrcamentoPanelPagina