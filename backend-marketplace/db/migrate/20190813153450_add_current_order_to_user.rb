class AddCurrentOrderToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_order, :integer
  end
end
