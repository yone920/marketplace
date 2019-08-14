class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :total_price
  has_many :order_items
end
