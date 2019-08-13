class Product < ApplicationRecord
    has_many :product_categories
    has_many :categories, through: :product_categories

    has_many :order_items
    has_many :orders, through: :order_items
end
