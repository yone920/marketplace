class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :current_order, :current_orders

  # Once you've built out the current_orders method, go and rewrite our frontend logic
  has_many :orders
  # :user_order(order)

end
