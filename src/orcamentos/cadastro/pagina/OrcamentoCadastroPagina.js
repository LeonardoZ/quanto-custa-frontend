import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import ProgressoCadastro from '../../../util/progresso_cadastro/container/ProgressoCadastro'

export const OrcamentoCadastroPagina = (props) => {
  return (
    <Col xs={12}>
      <Row>
        <Col xs={12} md={4}>
          <ProgressoCadastro isVertical={true} />
        </Col>
        <Col xs={12} md={8}>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Cadastro de Orçamento" />
            </ToolbarGroup>
          </Toolbar>
          {props.children}
        </Col>

      </Row>
    </Col>
  )
}

export default OrcamentoCadastroPagina