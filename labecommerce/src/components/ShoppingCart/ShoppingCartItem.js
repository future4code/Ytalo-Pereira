import React from 'react'
import { ItemContainer, Button, Centralize, ContainerButton } from './styled'




export class ShoppingCartItem extends React.Component {
  render() {
    return <Centralize>
      <ItemContainer>
        <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p>
        
        <Button
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </Button>
      </ItemContainer>
      {/* <ContainerButton>
      <Button
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </Button>
      </ContainerButton> */}
    </Centralize>
  }
}

