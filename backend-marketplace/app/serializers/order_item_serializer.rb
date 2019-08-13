class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id, :order_id, :products
end
