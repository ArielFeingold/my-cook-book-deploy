class Recipe < ApplicationRecord
  validates :title, :ingredients, :category, presence: true

  belongs_to :user
end
