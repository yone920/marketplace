class UsersController < ApplicationController
    def create 
        # byebug
        user = User.create(user_params)

        if user.valid?
            render json: {token: encode_token(user), user: user, include: '**'}
        else
            render json: { errors: ["Wrong email or password!."] }, status: :unprocessable_entity
        end
    end

    def show 
        user_id = params[:id].to_i
        user = User.find_by_id(user_id)
        render json: user, include: '**'
    end

    def profile
        # debugger
        if current_site_user.current_order
            order = Order.find(current_site_user.current_order)
        end
        # render json: {user: current_site_user, order: order}
        render json: current_site_user, include: '**'
        # render json: current_user.user_order(order)
        # render json: order, include : "**"

    end
    
    def update 
        # byebug
        user = User.find_by(id: params[:id])
        user.current_order = params[:current_order]
        user.save
        render json: user
    end

    def order_complete
        user = User.find_by(id: params[:id])
        user.current_order = nil
        user.save

        render json: current_site_user, include: '**'
    end
    
    private
    def user_params
        params.permit(:name, :email, :password, :admin, :current_order)
    end
    
end
