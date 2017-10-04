import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import AssignmentIcon from 'material-ui/svg-icons/action/assignment'
import DevicesIcon from 'material-ui/svg-icons/action/important-devices'
import DriveFileIcon from 'material-ui/svg-icons/editor/insert-drive-file'
import DoneIcon from 'material-ui/svg-icons/action/done-all'
import { cyan500, red500 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'

export const StepperPanel = (props) => {
  let estado = props.estado
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
        <Step completed={estado.informacaoOrcamento}>
          <StepLabel>
            Informações sobre o Orçamento
          </StepLabel>
        </Step>
        <Step completed={estado.cadastroUnidades}>
          <StepLabel>
            Definir Unidades de Software
          </StepLabel>
        </Step>
        <Step completed={estado.cadastroArtefatos}>
          <StepLabel>
            Definir Artefatos
          </StepLabel>
        </Step>
        <Step completed={estado.finalizar}>
          <StepLabel>
            Finalizar Orçamento
          </StepLabel>
        </Step>
      </Stepper>
    </Paper>
  )
}

export default StepperPanel