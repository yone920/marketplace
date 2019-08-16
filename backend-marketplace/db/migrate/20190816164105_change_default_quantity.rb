class ChangeDefaultQuantity < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:order_items, :quantity, 1)

  end
end
