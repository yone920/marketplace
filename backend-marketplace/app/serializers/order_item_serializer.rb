class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id, :order_id
  belongs_to :product
end
