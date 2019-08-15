class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :main_image, :image_two, :image_three, :quantity, :featured, :sale
end
