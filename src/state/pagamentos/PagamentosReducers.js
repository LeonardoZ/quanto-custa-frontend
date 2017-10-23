import {
  ATUALIZAR_PAGAMENTO,
  CONFIGURA_PAGAMENTO_ATIVO,
  CARREGA_PAGAMENTO,
  SALVAR_PAGAMENTO,
  NOVO_PAGAMENTO,
  REMOVER_PAGAMENTO,
  CALCULAR_PAGAMENTO,
  INVALIDAR_PAGAMENTO
} from './PagamentosActionTypes'

const pagamentoInitialState = {
  pagamentoAtivo: {
    ehParcelado: false,
    pagamentoEmVezes: 1,
    jurosMensaisPercentuais: 0.0,
    entrada: 0,
    descontoAVistaPercentual: 0,
    calculoPagamento: [],
    pagamentoInvalido: true,
    pagamentoInvalidoMensagem: ""
  }
}
export default (state = pagamentoInitialState, action) => {
  switch (action.type) {
    case SALVAR_PAGAMENTO:
      return salvarPagamento(state, action)
    case ATUALIZAR_PAGAMENTO:
      return atualizarPagamento(state, action)
    case CARREGA_PAGAMENTO:
      return carregaPagamento(state, action)
    case CONFIGURA_PAGAMENTO_ATIVO:
      return configuraPagamentoAtivo(state, action)
    case NOVO_PAGAMENTO:
      return novoPagamento(state, action)
    case REMOVER_PAGAMENTO:
      return removerPagamento(state, action)
    case CALCULAR_PAGAMENTO:
      return calcularPagamento(state, action)
    case INVALIDAR_PAGAMENTO:
      return invalidarPagamento(state, action)
    default:
      return state
  }
}

function salvarPagamento(state, action) {
  return {
    ...state, 
    pagamentoAtivo: action.payload.data,
    calculoPagamento: action.payload.data.calculoPagamento,
    pagamentoInvalido: false,
    pagamentoInvalidoMensagem: ""
  }
}

function atualizarPagamento(state, action) {
  return {
    ...state, pagamentoAtivo: action.payload.data,
    calculoPagamento: action.payload.data.calculoPagamento,
    pagamentoInvalido: false,
    pagamentoInvalidoMensagem: ""
  }
}

function carregaPagamento(state, action) {
  if (action.payload.status === 400) {
    return { ...state, pagamentoAtivo: pagamentoInitialState.pagamentoAtivo, pagamentoInvalido: true }
  } else if (action.payload.status === 200) {
    return {
      ...state,
      pagamentoAtivo: action.payload.data,
      calculoPagamento: action.payload.data.calculoPagamento,
      pagamentoInvalido: false,
      pagamentoInvalidoMensagem: ""
    }
  } else {
    return state
  }
}

function configuraPagamentoAtivo(state, action) {
  return {
    ...state, pagamentoAtivo: action.payload,
    calculoPagamento: action.payload.calculoPagamento,
    pagamentoInvalido: false,
    pagamentoInvalidoMensagem: ""
  }
}

function removerPagamento(state, action) {
  return {
    ...state,
    pagamentoAtivo: pagamentoInitialState.pagamentoAtivo,
    calculoPagamento: [],
    pagamentoInvalido: true,
    pagamentoInvalidoMensagem: ""
  }
}

function novoPagamento(state, action) {
  return {
    ...state,
    pagamentoAtivo: pagamentoInitialState.pagamentoAtivo,
    calculoPagamento: [],
    pagamentoInvalido: true,
    pagamentoInvalidoMensagem: ""
  }
}

function calcularPagamento(state, action) {
  if (action.payload[0].status === 400) {
    return {
      ...state,
      pagamentoAtivo: action.payload[1],
      pagamentoInvalido: true,
      pagamentoInvalidoMensagem: action.payload[0].data.mensagem
    }
  } if (action.payload[0].status === 200) {
    return {
      ...state,
      pagamentoAtivo: action.payload[1],
      calculoPagamento: action.payload[0].data,
      pagamentoInvalido: false,
      pagamentoInvalidoMensagem: ""
    }
  } else {
    return state
  }
}

function invalidarPagamento(state, action) {
  return {
    ...state,
    pagamentoInvalido: true,
    pagamentoInvalidoMensagem: "Aguardando validação"
  }
}
