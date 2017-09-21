import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarOrcamento, atualizarOrcamento,
  novaUnidadeDeSoftware, carregarUnidades,
} from '../../../actions/OrcamentoActions'
import Form from '../form/OrcamentoForm'
import BtnProximo from '../proximo/BotaoProximo'

class OrcamentoCadastro extends Component {

  constructor() {
    super()
    this.editarOrcamento = this.editarOrcamento.bind(this)
    this.proximo = this.proximo.bind(this)
  }

  componentDidMount() {
    let orcamento = this.props.orcamento;
    if (orcamento.uuid) {
      this.props.carregarUnidades(orcamento)
    }
  }

  submitOrcamento(data) {
    if (this.props.orcamento.uuid) {
      this.props.atualizarOrcamento(this.props.orcamento, data)
    } else {
      this.props.salvarOrcamento(this.props.usuarioAtivo, data)
    }
    this.proximo()

  }

  editarOrcamento(orcamento) {
    this.props.history.push('/unidade')
  }

  proximo() {
    if (this.props.unidades.length === 0) {
      this.props.history.push('/unidade')
    } else {
      this.props.history.push('/resumo/orcamento')
    }
  }

  render() {
    let visible = this.props.orcamento.uuid !== undefined
    let btnNext = (visible) ?
      <BtnProximo proximo={() => this.proximo()} />
      : ""

    return (
      <Form orcamento={this.props.orcamento}
        submitOrcamento={(dados) => this.props.submitOrcamento(dados)}
        btnNext={btnNext} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarOrcamento, atualizarOrcamento,
    novaUnidadeDeSoftware, carregarUnidades
  }, dispatch)
}

function mapStateToProps({ orcamentoStateTree, unidadesStateTree, authStateTree }) {
  return {
    usuarioAtivo: authStateTree.usuarioAtivo,
    orcamento: orcamentoStateTree.orcamento,
    unidades: unidadesStateTree.unidades
      .filter(u => u.orcamentoUuid === orcamentoStateTree.orcamento.uuid)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentoCadastro))
