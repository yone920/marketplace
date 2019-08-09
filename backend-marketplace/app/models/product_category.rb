class ProductCategory < ApplicationRecord
    belongs_to: Product 
    belongs_to: Category 
end
