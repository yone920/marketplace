class User < ApplicationRecord
    has_secure_password
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_many :orders

    # def user_order(current_order)
    #     self.orders.find(current_order) 
        
    #     debugger 
    # end

    def current_orders
        # Given the current_order (id), return all the items in that cart
        []
    end
end
