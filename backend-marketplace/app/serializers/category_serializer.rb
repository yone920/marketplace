class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :products
end
