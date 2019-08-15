class ChangeDefaultValueQuantity < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:order_items, :quantity, 0)

  end
end
