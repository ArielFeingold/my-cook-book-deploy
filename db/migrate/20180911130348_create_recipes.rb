class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :user_id
      t.string :title
      t.string :ingredients
      t.string :category

      t.timestamps
    end
  end
end
