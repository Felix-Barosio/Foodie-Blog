class RecipesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    private

    def find_recipe
        recipe = Recipe.find(params[:id])
    end

    def render_not_found_response
        render json: { errors: "Recipe not found"}, status: :not_found
    end

end
