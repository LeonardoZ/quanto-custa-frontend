import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ProgressoCadastro from '../../util/progresso_cadastro/container/ProgressoCadastro'

const style = {
  resumo: {
    marginBottom: "8px"
  }
}

export const ResumoOrcamentoPagina = (props) => {
  return (
    <Col xs={12}>
      <Row>
        <Col xs={12} className="hideOnLarge">
          <ProgressoCadastro isVertical={true}  styles={style.resumo} />
        </Col>
        <Col md={12} className="hideOnMobile">
          <ProgressoCadastro isVertical={false} styles={style.resumo} />
        </Col>
        {props.children}
      </Row>
    </Col>
  )
}

export default ResumoOrcamentoPagina