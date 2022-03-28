export const categoriesState = [];

const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export const categoriesReducer = (categoriesState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...categoriesState, action.category];
    case REMOVE_CATEGORY:
      return [...categoriesState].filter((category) => category.id !== action.id);
    default:
      return categoriesState;
  }
};

export function addCategory(category) {
  return { type: ADD_CATEGORY, category };
}

export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id };
}
