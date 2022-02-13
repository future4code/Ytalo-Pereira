import React from 'react'
import { ProductCard } from './ProductCard'
import { ProductsContainer, ProductsHeader, ProductsGrid, Label } from './styled'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';



export class Products extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true)
      .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
      .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return <ProductsContainer>
      <ProductsHeader>
        <h4>Quantidade de produtos: {filteredAndOrderedList.length}</h4>
        <Label>
        
          <Select value={this.state.sort} onChange={this.onChangeSort}>
            <MenuItem value={'CRESCENTE'}>Crescente</MenuItem>
            <MenuItem value={'DECRESCENTE'}>Decrescente</MenuItem>

          </Select>
        </Label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product) => {
          return <ProductCard
            product={product}
            onAddProductToCart={this.props.onAddProductToCart}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  }
}