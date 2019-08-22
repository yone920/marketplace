class OrderItemsController < ApplicationController
    def create
        order = Order.find(order_item_params[:order_id])
        order_items = order.order_items

        found_item = order_items.detect do |item| 
            order_item_params[:product_id] == item.product_id
        end
        if found_item
            found_item.quantity += 1
            found_item.quantity += order_item_params[:quantity].to_i
            found_item.item_price = found_item.quantity * found_item.product.price_in_cents
            found_item.save
            
        else
            orderItem = OrderItem.create(order_item_params)
            orderItem.item_price = orderItem.quantity * orderItem.product.price_in_cents
            orderItem.save
            # order.total_price += orderItem.item_price
            # order.save
        end
        
        total = 0
        total_quantity = 0

        order = Order.find(order_item_params[:order_id])
        order.order_items.each { |item| total += item.item_price }
        order.total_price = total

        order.order_items.each { |item| total_quantity += item.quantity }
        order.total_qty = total_quantity
        order.save
        
        # byebug
        # render json: order, include: "**"
        render json: current_site_user, include: '**'

    end

    def destroy
        order_item = OrderItem.find(params[:id].to_i)
        order_item.destroy
        order = Order.find(current_site_user.current_order)
        total = 0
        order.order_items.each { |item| total += item.item_price }
        order.total_price = total

        

        order.save
        # render json: {user: current_site_user, order: order}
        render json: current_site_user, include: '**'

    end

    private
    def order_item_params
        params.permit(:product_id, :order_id, :quantity)
    end
end
