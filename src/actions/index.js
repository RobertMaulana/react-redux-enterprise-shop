import { SIGNIN, SHOW_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './constants'

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

export const addProduct = (data) => (
  {
    type: ADD_PRODUCT,
    payload: data
  }
)

export const updateProduct = (data) => (
  {
    type: UPDATE_PRODUCT,
    payload: data
  }
)

export const deleteProduct = (data) => (
  {
    type: DELETE_PRODUCT,
    payload: data
  }
)
