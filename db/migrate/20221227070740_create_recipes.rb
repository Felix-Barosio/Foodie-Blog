class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :meal_name
      t.string :image_url
      t.string :ingredients
      t.string :instructions
      t.string :origin
      t.string :category
      t.string :tags
      t.string :video

      t.timestamps
    end
  end
end
