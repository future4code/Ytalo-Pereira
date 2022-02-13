import React from 'react'
import { ShoppingCartContainer, CartListContainer } from './styled'
import {ShoppingCartItem} from './ShoppingCartItem'




export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p><b>Valor total:</b> R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
  }
}
