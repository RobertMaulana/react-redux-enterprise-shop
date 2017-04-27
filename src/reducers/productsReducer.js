import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/constants'

let dataProduct = [
  {id:1, title:'Delicious Burger Ever', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-7542/kicfileasset-105231_msf_borderspecialburger_3.jpg', desc:'www.instagram.com'},
  {id:2, title:'Europe Street beat', img:'http://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps824_GIT2919402B01_04_1bC_RMS.jpg', desc:'www.instagram.com'},
  {id:3, title:'Europe Street beat', img:'http://www.redrobinpa.com/wp-content/uploads/2016/08/Tavern-Double-Burger-1-300x300.jpg', desc:'www.instagram.com'},
  {id:4, title:'Europe Street beat', img:'http://images.meredith.com/content/dam/bhg/Images/recipe/42/R148769.jpg.rendition.largest.ss.jpg', desc:'www.instagram.com'},
  {id:5, title:'Europe Street beat', img:'http://blog.sousvidesupreme.com/wp-content/uploads/2013/05/SVBurgerSquare.jpg', desc:'www.instagram.com'},
  {id:6, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
  {id:7, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
  {id:8, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
  {id:9, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
  {id:10, title:'Europe Street beat', img:'http://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/kicrecipe-23541/kicfileasset-122379_msf_carlaburger.jpg', desc:'www.instagram.com'},
];

const addProduct = (state, newProduct) => {
  const { title, img, desc } = newProduct;
  const ids = state.map(product => product.id);
  const newId = Math.max(...ids) + 1;
  const post = {
    id: newId,
    title,
    img,
    desc
  };
  const newState = [...state, post];
  return newState;
};

const deleteProduct = (state, productId) => {
  console.log(productId);
  const newState = state.filter(product => product.id !== productId);
  return newState;
};

const updateProduct = (state, updatedProduct) => {
  const newState = state.map(product => {
    if (product.id === updatedProduct.id) {
      return {
        ...product,
        title: updatedProduct.title,
        img: updatedProduct.img,
        desc: updatedProduct.desc
      };
    }
    return product;
  });
  return newState;
}

const product = ( state = dataProduct, action ) => {
  switch (action.type) {
    case ADD_PRODUCT: return addProduct(state, action.payload);
    case DELETE_PRODUCT: return deleteProduct(state, action.payload);
    case UPDATE_PRODUCT: return updateProduct(state, action.payload);
    default: return state;
  }
}

export default product
