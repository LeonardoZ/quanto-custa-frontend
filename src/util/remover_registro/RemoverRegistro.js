import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class RemoverRegistro extends React.Component {
  // set state interno
  // pegar padrao de props
  removerRegistro = () => {
    this.props.aoRemover()
  }

  componentWillMount() {
    this.setState({ aberto: this.props.abrirModal })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.aberto === this.props.abrirModal) return
    this.setState({ aberto: this.props.abrirModal })
  }

  fecharModal = () => {
    this.setState({ aberto: false })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.fecharModal}
      />,
      <FlatButton
        label="Remover"
        primary={true}
        onClick={this.removerRegistro}
      />,
    ]

    return (
      <Dialog
        title={this.props.titulo}
        actions={actions}
        modal={false}
        open={this.state.aberto}
        show={this.state.aberto}>
        <p>{this.props.texto}</p>
      </Dialog>
    )
  }
}