class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price_in_cents, :description, :main_image, :image_two, :image_three, :quantity, :featured, :sale
end
