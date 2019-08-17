class AddColumnToOrderItem < ActiveRecord::Migration[5.2]
  def change
    add_column :order_items, :item_price, :integer
  end
end
