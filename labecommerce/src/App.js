import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { Footer } from './components/Footer/Footer';
import { AppContainer, MainTitle, ContainerReset, Img} from './AppStyled';
import Logo from "./Img/Logo.png"


const products = [
  {
    id: 1,
    name: 'COMPUTADOR PICHAU GAMER ANKOU II, INTEL I5-10400F, GEFORCE GTX 1660 TI 6GB, 16GB DDR4, SSD M.2 480GB',
    price:  6.598 ,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/f/r/frost-intel-gtx-0001_5.jpg'
  },
  {
    id: 2,
    name: 'COMPUTADOR PICHAU GAMER LOG, AMD RYZEN 3 4350G, GEFORCE GTX 1660 6GB, 8GB DDR4, SSD 240GB',
    price: 4.999,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/k/skulanc_pret_amd_rx_5000_6000_1__3_1.jpg'
  },
  {
    id: 3,
    name: 'COMPUTADOR MANCER GAMER, AMD RYZEN 3 4350G, 8GB DDR4, SSD 240GB',
    price: 2.499,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/r/argon-amd-sgpu-001_3.jpg'
  },
  {
    id: 4,
    name: 'COMPUTADOR PICHAU GAMER, AMD RYZEN 3 4350G, 16GB DDR4, HD 1TB',
    price: 2.839,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/t/stealth-amd-sgpu-008_2.jpg'
  },
  {
    id: 5,
    name: 'COMPUTADOR PICHAU GAMER, AMD RYZEN 3 4350G, GEFORCE GTX 1050 TI 4GB, 8GB DDR4',
    price: 3.999,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/k/r/kronen-amd-1650_11__10.jpg'
  },
  {
    id: 7,
    name: 'COMPUTADOR PICHAU GAMER, AMD RYZEN 3 4350G, 8GB DDR4, SSD 240GB',
    price: 2.299,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/v/e/verizon-mancer-amd-s-gpu-001_1_.jpg'
  },
  {
    id: 7,
    name: 'COMPUTADOR MANCER GAMER BASHE, INTEL I5-12400, GEFORCE RTX 2060 6GB, 8GB DDR4, SSD M.2 240GB',
    price: 7.959,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/k/skylancer-wht-intel-gtrx-001_3.jpg'
  },
  {
    id: 7,
    name: 'COMPUTADOR PICHAU GAMER TURING II, INTEL I3-10100F, RADEON RX 6600 8GB, 16GB DDR4, SSD 480GB',
    price: 6.590,
    photo: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gadit-rtb-intel-rx-001_4.jpg'
  }
]

class App extends React.Component {

  state = {
    minFilter: 0,
    maxFilter: 0,
    nameFilter: '',
    productsInCart: [
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: 'https://picsum.photos/200/200?a=4',
        quantity: 1
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: 'https://picsum.photos/200/200?a=3',
        quantity: 2
      }
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <ContainerReset>
        <MainTitle>
        <Img src={Logo} alt="Logo" />
        <h1>Shopping Computers</h1>
        </MainTitle>
        <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
      <Footer />
      </ContainerReset>
    );
  }
}

export default App;