const categoriesState=[]

const ADD_CATEGORY= 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export default categoriesReducer = (categoriesState,action)=>{
      switch (action.type) {
          case ADD_CATEGORY:
              return [...categoriesState,action.category]
              break;
          case REMOVE_CATEGORY:
              return [...categoriesState].filter((category)=>category.id!==action.id)
              break;
          default:
              return categoriesState;
              break;
      }

}

export function addCategory(category) {
  return { type: ADD_CATEGORY, category };
}
  
  
export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id };
}