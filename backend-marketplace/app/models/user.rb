class User < ApplicationRecord
    has_secure_password
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_many :orders

    # def user_order(current_order)
    #     self.orders.find(current_order) 
        
    #     debugger 
    # end
end
