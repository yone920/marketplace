class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :total_price, :order_items
  # has_many :products
  has_many :order_items
end
