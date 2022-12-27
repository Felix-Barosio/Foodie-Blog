class RecipesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe, status: :ok
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        render json: { message: "Recipe Deleted"}, status: :not_found
    end

    private

    def find_recipe
        recipe = Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:meal_name, :image_url, :ingredients, :instructions, :origin, :category, :tags, :video)
    end

    def render_not_found_response
        render json: { errors: "Recipe not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
