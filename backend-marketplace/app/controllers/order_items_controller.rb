class OrderItemsController < ApplicationController
    def create
        # byebug
        orderItem = OrderItem.create(order_item_params)
        render json: orderItem, include: "**"
    end

    private
    def order_item_params
        params.permit(:product_id, :order_id, :quantity)
    end
end
