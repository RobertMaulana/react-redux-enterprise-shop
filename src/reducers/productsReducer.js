import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../actions/constants'

let dataProduct = [
  {id:1, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-7542/kicfileasset-105231_msf_borderspecialburger_3.jpg', desc:'www.instagram.com'},
  {id:2, title:'Europe Street beat', img:'http://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps824_GIT2919402B01_04_1bC_RMS.jpg', desc:'www.instagram.com'},
  {id:3, title:'Europe Street beat', img:'http://www.redrobinpa.com/wp-content/uploads/2016/08/Tavern-Double-Burger-1-300x300.jpg', desc:'www.instagram.com'},
  {id:4, title:'Europe Street beat', img:'http://images.meredith.com/content/dam/bhg/Images/recipe/42/R148769.jpg.rendition.largest.ss.jpg', desc:'www.instagram.com'},
  {id:5, title:'Europe Street beat', img:'http://blog.sousvidesupreme.com/wp-content/uploads/2013/05/SVBurgerSquare.jpg', desc:'www.instagram.com'},
  {id:6, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
];

const addProduct = (state, newProduct) => {
  const { title, description } = newProduct;
  const ids = state.map(post => post.id);
  const newId = Math.max(...ids) + 1;
  const post = {
    id: newId,
    title,
    description,
  };
  const newState = [...state, post];
  return newState;
};

const deleteProduct = (state, postId) => {
  const newState = state.filter(post => post.id !== postId);
  return newState;
};

const editProduct = (state, updatedProduct) => {
  const newState = state.map(post => {
    if (post.id === updatedProduct.id) {
      return {
        ...post,
        title: updatedProduct.title,
        description: updatedProduct.description
      };
    }
    return post;
  });
  return newState;
}

const product = ( state = dataProduct, action ) => {
  switch (action.type) {
    case ADD_PRODUCT: return addProduct(state, action.payload);
    case DELETE_PRODUCT: return deleteProduct(state, action.payload);
    case EDIT_PRODUCT: return editProduct(state, action.payload);
    default: return state;
  }
}

export default product
