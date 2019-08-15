class OrdersController < ApplicationController
    
    def index 
        orders = Order.all 
        render json: orders
    end

    def show 
        # debugger
        order_id = params[:id].to_i
        order = Order.find_by_id(order_id)
        render json: order
        # , include: '**'
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
