import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  display: 'inline-block',
  width: '100%',
  backgroundColor: '#EF5350',
  marginBottom: 10,
  alignSelf: 'stretch',
  textAlign: 'center',
}

class ErroPanel extends React.Component {

  render() {
    if (!this.props.erroMsg) return (<div />)
    return (
      <Paper zDepth={3} rounded={false} style={style}>
        <h2>Erro</h2>
        <p>{this.props.erroMsg}</p>
      </Paper>)
  }

  componentDidMount() {
  }
}

export default ErroPanel;