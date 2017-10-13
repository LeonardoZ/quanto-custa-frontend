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
        <Col xs={12}>
          <ProgressoCadastro styles={style.resumo} />
        </Col>
        {props.children}
      </Row>
    </Col>
  )
}

export default ResumoOrcamentoPagina