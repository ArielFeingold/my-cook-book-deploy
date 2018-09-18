import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    recipeId: "",
    recipeTitle: "",
    recipeIngredients: "",
    recipeCategory: "",
    errors: "",
    loading: false,
    userRecipes: []
};

const addRecipeStart = ( state, action ) => {
  return updateObject( state, {
    errors: null,
    loading: true,
    recipeId: "",
    recipeTitle: "",
    recipeIngredients: "",
    recipeCategory: ""
  });
};

const addRecipeSuccess = (state, action) => {
    return updateObject( state, { errors: null, loading: false });
};

const addRecipeFail = (state, action) => {
    return updateObject( state, { errors: action.errors, loading: false });
};

const updateRecipeStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const updateRecipeSuccess = (state, action) => {
    return updateObject( state, {
      errors: null,
      loading: false,
      recipeId: "",
      recipeTitle: "",
      recipeIngredients: "",
      recipeCategory: ""
    } );
};

const updateRecipeFail = (state, action) => {
    return updateObject( state, { errors: action.errors, loading: false } );
};

const deleteRecipeStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const deleteRecipeSuccess = (state, action) => {
  const updatedRecipes = state.userRecipes.filter((recipe) => {
        return recipe.id !== action.id;
    })
  return updateObject(state, {
    loading: false,
    userRecipes: updatedRecipes
  })
}

const getRecipesStart = (state, action) => {
    return updateObject( state, { loading: true } );
};

const getRecipesSuccess = (state, action) => {
  return updateObject(state, { userRecipes: action.recipes, loading: false });
};

const getRecipesFail = (state, action) => {
    return updateObject( state, { errors: action.error, loading: false });
};

const getRecipeSuccess = (state, action) => {
  return updateObject(state, {
    recipeId: action.recipeId,
    recipeTitle: action.recipeTitle,
    recipeIngredients: action.recipeIngredients,
    recipeCategory: action.recipeCategory
  });
};

const getRecipeFail = (state, action) => {
  return updateObject( state, { error: action.error, loading: false });
};

const clearRecipe = (state, action) => {
  return updateObject( state, {
    recipeId: "",
    recipeTitle: "",
    recipeIngredients: "",
    recipeCategory: "",
    errors: "",
    loading: false,
  })
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_RECIPE_START: return addRecipeStart(state, action);
        case actionTypes.ADD_RECIPE_SUCCESS: return addRecipeSuccess(state, action);
        case actionTypes.ADD_RECIPE_FAIL: return addRecipeFail(state, action);

        case actionTypes.UPDATE_RECIPE_START: return updateRecipeStart(state, action);
        case actionTypes.UPDATE_RECIPE_SUCCESS: return updateRecipeSuccess(state, action);
        case actionTypes.UPDATE_RECIPE_FAIL: return updateRecipeFail(state, action);

        case actionTypes.DELETE_RECIPE_START: return deleteRecipeStart(state, action);
        case actionTypes.DELETE_RECIPE_SUCCESS: return deleteRecipeSuccess(state, action);

        case actionTypes.GET_RECIPES_START: return getRecipesStart(state, action);
        case actionTypes.GET_RECIPES_SUCCESS: return getRecipesSuccess(state, action);
        case actionTypes.GET_RECIPES_FAIL: return getRecipesFail(state, action);

        case actionTypes.GET_RECIPE_SUCCESS: return getRecipeSuccess(state, action);
        case actionTypes.GET_RECIPE_FAIL: return getRecipeFail(state, action);




        default:
            return state;
    }
};

export default reducer;
