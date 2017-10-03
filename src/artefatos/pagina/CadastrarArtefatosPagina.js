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
        <Col xs={12} className="hideOnLarge" style={style.resumo}>
          <ProgressoCadastro isVertical={true} />
        </Col>
        <Col md={12} className="hideOnMobile" style={style.resumo}>
          <ProgressoCadastro isVertical={false} />
        </Col>
        {props.children}
      </Row>
    </Col>
  )
}

export default CadastrarArtefatosPagina