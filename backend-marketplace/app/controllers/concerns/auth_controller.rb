class AuthController < ApplicationController
def create 
        user = User.find_by(email: params[:email])
        is_authenticated = user.authenticate(params[:password]) if user

        if is_authenticated
            render json: {token: encode_token(user), user: user}
        else
            render json: { errors: ["Wrong email or password!."] }, status: :unprocessable_entity
        end
    end
end
