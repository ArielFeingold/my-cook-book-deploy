import * as actionTypes from './actionTypes';
import history from '../../history';
import { handleErrors } from '../../shared/utility';

export const addRecipeStart = () => {
    return {
        type: actionTypes.ADD_RECIPE_START
    };
};

export const addRecipeSuccess = ( recipe ) => {
  history.push('/recipes/index')
    return {
        type: actionTypes.ADD_RECIPE_SUCCESS
    };
};

export const addRecipeFail = (errors) => {
    return {
        type: actionTypes.ADD_RECIPE_FAIL,
        errors: errors
    };
};

export const addRecipe = (title, ingredients, category) => {
  return dispatch => {
    dispatch(addRecipeStart());
    const recipeData = {
      recipe: {
        title: title,
        ingredients: ingredients,
        category: category,
        user_id: localStorage.getItem('userId')
      }
    };
    let url = 'http://localhost:3001/api/recipes';
    const token = localStorage.getItem('token')
    fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              'Authorization': `Bearer + ${token}`,
              'Content-Type': 'application/json; charset=utf-8"d'
            },
            body: JSON.stringify(recipeData),
        })
        .then(handleErrors)
        .then( response => {
          return response.json()
        })
        .then( json => {
          if (json.status === 400) { throw json }
          dispatch(addRecipeSuccess(json.recipe))
        })
        .catch(err => {
          if(err.status === 400) {
            dispatch(addRecipeFail(err.errors));
          }
          if(err.message === "Failed to fetch"){
            dispatch(addRecipeFail("No Connection"))
            history.push('/page-not-found');
          }
        });
    }
}

export const deleteRecipeStart = () => {
    return {
        type: actionTypes.DELETE_RECIPE_START
    };
};

export const deleteRecipeSuccess = (id) => {
  history.push('/recipes')
    return {
        type: actionTypes.DELETE_RECIPE_SUCCESS,
        id: id
    };
};

export const deleteRecipe = (id) => {
  return dispatch => {
    dispatch(deleteRecipeStart());
    let url = `http://localhost:3001/api/recipes/${id}`;
    const token = localStorage.getItem('token')
    fetch(url, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              'Authorization': `Bearer + ${token}`,
              'Content-Type': 'application/json; charset=utf-8"d'
            },
        })
        .then(handleErrors)
        .then(dispatch(deleteRecipeSuccess(id)))
        .catch(err => {
          if(err.message === "Failed to fetch") {
            history.push('/page-not-found');
          }
          }
        );

    }
}

export const updateRecipeStart = () => {
    return {
        type: actionTypes.UPDATE_RECIPE_START
    };
};

export const updateRecipeSuccess = ( recipe ) => {
  history.push('/recipes/index')
    return {
        type: actionTypes.UPDATE_RECIPE_SUCCESS,
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        recipeCategory: recipe.category,
        recipeingredients: recipe.ingredients
    };
};

export const updateRecipeFail = (errors) => {
    return {
        type: actionTypes.UPDATE_RECIPE_FAIL,
        errors: errors
    };
};

export const updateRecipe = (id, title, ingredients, category) => {
  return dispatch => {
    dispatch(updateRecipeStart());
    const recipeData = {
      recipe: {
        title: title,
        ingredients: ingredients,
        category: category,
      }
    };
    let url = `http://localhost:3001/api/recipes/${id}`;
    const token = localStorage.getItem('token')
    fetch(url, {
            method: "PATCH",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              'Authorization': `Bearer + ${token}`,
              'Content-Type': 'application/json; charset=utf-8"d'
            },
            body: JSON.stringify(recipeData),
        })
        .then(handleErrors)
        .then( response => {
          return response.json()
        })
        .then( json => {
          if (json.status !== 200) { throw json }
          dispatch(updateRecipeSuccess(json.recipe))
        })
        .then()
        .catch(err => {
          if(err.message === "Failed to fetch"){
            dispatch(addRecipeFail("No Connection"))
            history.push('/page-not-found');
          } else {
            dispatch(addRecipeFail(err.errors));
          }
        })
    }
}

export const getRecipesStart = () => {
    return {
        type: actionTypes.GET_RECIPES_START
    };
};

export const getRecipesSuccess = ( recipes ) => {
    return {
        type: actionTypes.GET_RECIPES_SUCCESS,
        recipes: recipes
    };
};

export const getRecipesFail = (error) => {
    return {
        type: actionTypes.GET_RECIPES_FAIL,
        error: error
    };
};

export const getRecipes = () =>{
  return dispatch => {
    dispatch(getRecipesStart());
    const token = localStorage.getItem('token')
    const url = 'http://localhost:3001/api/recipes'
    fetch(url, {
       method: 'GET',
       headers: {
         'Authorization': `Bearer + ${token}`,
         'Content-Type': 'application/json; charset=utf-8"d'
       },
     })
     .then(handleErrors)
     .then( response => {
       return response.json()
     })
     .then( json => {
       if(json.status !== 200) {throw json}
       dispatch(getRecipesSuccess(json.recipes))
     })
     .catch(err => {
       if(err.message === "Failed to fetch"){
         dispatch(getRecipesFail("No Connection"))
         history.push('/page-not-found');
       } else {
         dispatch(getRecipesFail(err.errors));
       }
     })
  }
}

export const getRecipeSuccess = ( recipe ) => {
    return {
        type: actionTypes.GET_RECIPE_SUCCESS,
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        recipeCategory: recipe.category,
        recipeIngredients: recipe.ingredients
    };
};

export const getRecipeFail = (error) => {
    return {
        type: actionTypes.GET_RECIPE_FAIL,
        error: error
    };
};

export const getRecipe = (recipeId) =>{
  return dispatch => {
    const token = localStorage.getItem('token')
    const url = `http://localhost:3001/api/recipes/${recipeId}`
    fetch(url, {
       method: 'GET',
       headers: {
         'Authorization': `Bearer + ${token}`,
         'Content-Type': 'application/json; charset=utf-8"d'
       },
     })
     .then(handleErrors)
     .then( response => {
       return response.json()
     })
     .then( json => {
       if(json.status !== 200) {throw json}
       dispatch(getRecipeSuccess(json.recipe))
     })
     .catch(err => {
       if(err.message === "Failed to fetch"){
         dispatch(getRecipeFail("No Connection"))
         history.push('/page-not-found');
       } else {
         dispatch(getRecipeFail(err.errors));
       }
     })
  }
}
