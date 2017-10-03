import React from 'react'

import { Row, Col } from 'react-flexbox-grid'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import ProgressoCadastro from '../../util/progresso_cadastro/container/ProgressoCadastro'

const style = { padding: "8px" }
const margin = { marginTop: "8px" }

export const UnidadeCadastroPagina = ({ children }) => {
  return (
    <Col xs={12}>
      <Row around="xs">
        <Col xs={12}>
          {children[0]}
        </Col>
        <Col xs={12}>
          <Row style={style}>
            <Col xs={12} md={4} style={margin}>
              <ProgressoCadastro isVertical={true} />
            </Col>
            <Col xs={12} md={8} style={margin}>
              <Toolbar>
                <ToolbarGroup>
                  <ToolbarTitle text="Cadastro de Unidade de Software" />
                </ToolbarGroup>
              </Toolbar>
              {children[1]}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default UnidadeCadastroPagina