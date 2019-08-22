class AddTotalQtyAttributeToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :total_qty, :integer, :default => 0
  end
end
