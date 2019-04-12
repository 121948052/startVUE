const saleProducts = state => {
  let saleProducts = state.products.map( product => {
    return {
      name: product.name,
      price: product.price / 2
    }
  })
  return saleProducts;
}

const leftNavState = state => !state.leftNavState

const getters = {
  leftNavState,
  saleProducts
}
export default getters