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

    def neworder
        # debugger
        order = Order.create(user_id: order_params[:user_id] )
        order_items = OrderItem.create(order_id: order.id, product_id: order_params[:product_id])
        user = User.find(order_params[:user_id])
        user.update(current_order: order.id )
        order_items = order.order_items
        render json: {user: user, order: order, order_items: order_items}
    end

    private
    def order_params
        params.permit(:user_id, :product_id)
    end
end
