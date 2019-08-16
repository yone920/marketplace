class OrderItemsController < ApplicationController
    def create
        order = Order.find(order_item_params[:order_id])
        order_items = order.order_items

        found_item = order_items.detect do |item| 
            order_item_params[:product_id] == item.product_id
        end
        if found_item
            found_item.quantity += 1
            found_item += order_item_params[:quantity].to_i
            found_item.save
        else
            orderItem = OrderItem.create(order_item_params)
        end
        
        render json: order, include: "**"
    end

    def destroy
        order_item = OrderItem.find(params[:id].to_i)
        order_item.destroy
        
        order = Order.find(current_site_user.current_order)
        # render json: {user: current_site_user, order: order}
        render json: current_site_user, include: '**'

    end

    private
    def order_item_params
        params.permit(:product_id, :order_id, :quantity)
    end
end
