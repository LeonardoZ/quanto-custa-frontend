import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  marginTop: "8px",
  marginBottom: "8px"
};

const FinalizarUnidadeArtefatos = ({ onFinish, canFinish }) => {
  return (
    <Col xs={12} style={style}>
      <RaisedButton type="submit" primary={true} onClick={() => onFinish()} disabled={!canFinish}
        label="Terminar Unidade de Software" />
    </Col>
  )
}

export default FinalizarUnidadeArtefatos