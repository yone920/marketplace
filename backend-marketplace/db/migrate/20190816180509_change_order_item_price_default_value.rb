class ChangeOrderItemPriceDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:order_items, :item_price, 0)

  end
end
