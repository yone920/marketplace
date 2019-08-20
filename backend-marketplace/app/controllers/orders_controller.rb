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

    def shipping
        # byebug
        order = Order.find(params[:id].to_i)
        order.update(
            sh_rate: order_params[:sh_rate],     
        )

        ReportMailer.order_confirmation(current_site_user).deliver

        render json: current_site_user, include: '**'
    end

    def update
        # order_id = params[:id].to_i
        # byebug
        order = Order.find(params[:id].to_i)
        order.update(
                sh_fname: order_params[:fname],
                sh_address: order_params[:address],
                sh_city: order_params[:city],
                sh_state: order_params[:state],
                sh_zip: order_params[:zip]
        )
        # order.save

        render json: current_site_user, include: '**'
    end

    private
    def order_params
        params.permit(:user_id, :product_id, :fname, :address, :city, :state, :zip, :order_id, :sh_rate)
    end


end
