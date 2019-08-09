class Product < ApplicationRecord
    has_many :product_categories
    has_many :shoes, through: :product_categories
end
