class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :meal_name, :image_url, :ingredients, :instructions, :origin, :category, :tags, :video
end
