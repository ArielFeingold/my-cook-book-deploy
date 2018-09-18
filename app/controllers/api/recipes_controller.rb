class API::RecipesController < ApplicationController
  before_action :authenticate_user, only: [:index, :show, :create]

    def index
      recipes = current_user.recipes
      if !current_user.recipes.empty?
        render json: {status:200, recipes: recipes}
      else
        render json: {status:204, msg: "No Recipes Found"}
    end
  end

  def show
      recipe = Recipe.find_by(id: params[:id])
      if recipe
        render json: {status:200, recipe: recipe}
      else
        render json: {status:204, error: "Recipe not found"}
      end
  end

  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: {status: 200, recipe: recipe}
    else
      render json: {status: 400, errors: recipe.errors.messages}
    end
  end

  def update
    recipe = Recipe.find_by(id: params[:id])
    if recipe.update(recipe_params)
      render json: {status: 200, recipe: recipe}
    else
      render json: {status: 400, errors: recipe.errors.messages}
    end
  end

  def destroy
    Recipe.find_by(id: params[:id]).destroy
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :ingredients, :category, :user_id)
  end

end
