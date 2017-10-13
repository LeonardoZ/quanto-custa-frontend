import React from 'react'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import {
  green100,
  green700,
  deepOrange100,
  deepOrange700,
  cyan700,
  amber100,
  amber700,
  cyan100
} from 'material-ui/styles/colors'
import { parseToFormat, daysBetween } from '../date_util/ApiDateParser'
import { formatarMoeda } from '../number_format/NumberFormat'

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  chip: { margin: "4px" }

}

export const OrcamentoChips = ({ orcamento }) => {
  return (
    <div style={styles.wrapper}>
      <Chip style={styles.chip} backgroundColor={amber100}>
        <Avatar backgroundColor={amber700} size={32} icon={<SvgIconFace />} />
        <strong>Responsável:</strong> {orcamento.responsavel}
      </Chip>
      <Chip style={styles.chip} backgroundColor={cyan100}>
        <Avatar size={32} backgroundColor={cyan700}>C</Avatar>
        <strong>Criado em:</strong> {parseToFormat(orcamento.criadoEm)}
      </Chip>
      <Chip style={styles.chip} backgroundColor={cyan100}>
        <Avatar size={32} backgroundColor={cyan700}>V</Avatar>
        <strong>Válido até:</strong> {parseToFormat(orcamento.validoAte)}
      </Chip>
      <Chip style={styles.chip} backgroundColor={green100}>
        <Avatar size={32} backgroundColor={green700}>U</Avatar>
        <strong>Unidades de software:</strong> {orcamento.quantidadeUnidades}
      </Chip>
      <Chip style={styles.chip} backgroundColor={green100}>
        <Avatar size={32} backgroundColor={green700}>A</Avatar>
        <strong>Artefatos: </strong> {orcamento.quantidadeArtefatos}
      </Chip>
    </div>
  )
}

export default OrcamentoChips