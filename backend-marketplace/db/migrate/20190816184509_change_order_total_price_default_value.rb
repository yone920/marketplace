class ChangeOrderTotalPriceDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:orders, :total_price, 0)
    change_column :orders, :total_price, :integer

  end
end
