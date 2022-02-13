import React from 'react'
import {CardContainer, CardInfo, AddToCartButton, Img } from './styled'
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';



export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <Img src={product.photo}/>
      <CardInfo>
        <h3>{product.name}</h3>
        <h3>R${product.price},00</h3>
      </CardInfo>
      <Button variant="outlined" color="primary"
        onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
       </Button>
    </CardContainer>
  }
}
