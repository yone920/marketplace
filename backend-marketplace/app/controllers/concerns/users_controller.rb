class UsersController < ApplicationController
    def create 
        # byebug
        user = User.create(user_params)

        if user.valid?
            render json: {token: encode_token(user)}
        else
            render json: { errors: ["Wrong email or password!."] }, status: :unprocessable_entity
        end
    end

    def profile
        render json: current_user
    end
    
    
    private
    def user_params
        params.permit(:name, :email, :password, :admin)
    end
    
end
