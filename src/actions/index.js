import { SIGNIN, SHOW_PRODUCTS } from './constants'

export const signin = (data) => (
  {
    type: SIGNIN,
    payload: data
  }
)
export const showProduct = (data) => (
  {
    type: SHOW_PRODUCTS,
    payload: data
  }
)
