import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
    padding: 12
  };

const UnidadeNaoDefinida = ({ voltarAoInicio }) => {
    return (
        <Paper style={style} zDepth={3} rounded={false} >
            <div><strong>Unidade não definida!</strong> </div>
            <RaisedButton onClick={voltarAoInicio} label="Voltar para o início" />
        </Paper>
    )
}

export default UnidadeNaoDefinida