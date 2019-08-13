class OrdersController < ApplicationController
    
    def index 
        orders = Order.all 
        render json: orders
    end

    def create
        # debugger
        order = Order.create(order_params)
        render json: order
    end

    private
    def order_params
        params.permit(:user_id)
    end
end
