import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const Component = ({proximo}) => {
  return(
    <RaisedButton secondary={true} label={'Próximo'} onClick={() => proximo()} />
  )
}

export default Component