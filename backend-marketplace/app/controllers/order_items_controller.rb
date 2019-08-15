class OrderItemsController < ApplicationController
    def create
        order = Order.find(order_item_params[:order_id])
        order_items = order.order_items

        found_item = order_items.detect do |item| 
            order_item_params[:product_id] == item.product_id
        end
        # byebug
        if found_item
            found_item.quantity += 1
            found_item.save
        else
            orderItem = OrderItem.create(order_item_params)
            # end
        end
        # order_items.each do |item|
        #     if order_item_params[:product_id] == item.product_id
        #         item.quantity += 1
        #     else 
        #         byebug
        #         orderItem = OrderItem.create(order_item_params)
        #     end
        # end
        # render json: {order: order, order_items: order_items}
        render json: order, include: "**"
        # , include: "**"
    end



    private
    def order_item_params
        params.permit(:product_id, :order_id, :quantity)
    end
end
