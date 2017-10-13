import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ProgressoCadastro from '../../util/progresso_cadastro/container/ProgressoCadastro'

const style = {
  resumo: {
    marginBottom: "8px"
  }
}

export const CadastrarArtefatosPagina = (props) => {
  return (
    <Col xs={12}>
      <Row>
        <Col xs={12} style={style.resumo}>
          <ProgressoCadastro isVertical={false} />
        </Col>
        {props.children}
      </Row>
    </Col>
  )
}

export default CadastrarArtefatosPagina