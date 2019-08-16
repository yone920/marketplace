class ChangeProductPriceType < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :price, :decimal
  end
end
