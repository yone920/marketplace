class AddColumnToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :sh_rate, :integer

  end
end
