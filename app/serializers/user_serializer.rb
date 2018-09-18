class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :recipes
end
