class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :current_order

  has_many :orders
  # :user_order(order)

end
