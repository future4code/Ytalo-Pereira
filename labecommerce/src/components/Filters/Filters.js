import React from 'react'
import { FiltersContainer, InputContainer, Titlefilter } from './styled.js';
import Input from '@material-ui/core/Input';
export class Filters extends React.Component {
  render() {
    return <div>
      <Titlefilter>
        <h2>Filtros</h2>
      </Titlefilter>
      <FiltersContainer>
        <InputContainer>
          Valor mínimo:
          <Input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <Input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <Input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
      </FiltersContainer>
    </div>
  }
}
