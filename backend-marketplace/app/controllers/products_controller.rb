class ProductsController < ApplicationController
    def index 
        products = Product.all 
        render json: products
    end

    def show 
        # byebug
        product = Product.find(params[:id].to_i)
        render json: product, include: "**" 
    end
end
