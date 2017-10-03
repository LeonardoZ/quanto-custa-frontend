import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import WarningIcon from 'material-ui/svg-icons/alert/add-alert'
import { red500 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'

export const Component = (props) => {
  let styles = props.styles || {}
  let orientation = props.isVertical ? "vertical" : "horizontal"
  return (
    <Paper zDepth={1} style={{ width: '100%', margin: 'auto', ...styles }}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Passo-a-passo" />
        </ToolbarGroup>
      </Toolbar>
      <Stepper linear={false}
        orientation={orientation}>
        <Step completed={false}>
          <StepLabel>
            Informações sobre o Orçamento
          </StepLabel>
        </Step>
        <Step completed={false}>
          <StepLabel
            icon={<WarningIcon color={red500} />}
            style={{ color: red500 }}>
            Criar unidades de software
          </StepLabel>
        </Step>
        <Step completed={false}>
          <StepLabel>
            Adicionar Artefatos
          </StepLabel>
        </Step>
        <Step completed={false}>
          <StepLabel>
            Finalizar Orçamento
          </StepLabel>
        </Step>
      </Stepper>
    </Paper>
  )
}

export default Component