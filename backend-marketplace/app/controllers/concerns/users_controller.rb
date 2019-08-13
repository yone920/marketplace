class UsersController < ApplicationController
    def create 
        # byebug
        user = User.create(user_params)

        if user.valid?
            render json: {token: encode_token(user), user: user}
        else
            render json: { errors: ["Wrong email or password!."] }, status: :unprocessable_entity
        end
    end

    def profile
        render json: current_site_user
    end
    
    def update 
        # byebug
        user = User.find_by(id: params[:id])
        user.current_order = params[:current_order]
        user.save
        render json: user
    end
    
    private
    def user_params
        params.permit(:name, :email, :password, :admin, :current_order)
    end
    
end
