class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :total_price, :sh_fname, :sh_address, :sh_city, :sh_state, :sh_zip, :sh_rate, :total_qty
  # has_many :products
  has_many :order_items
end
