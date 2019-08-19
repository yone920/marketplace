class AddNewAttributesToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :sh_fname, :string
    add_column :orders, :sh_address, :string
    add_column :orders, :sh_city, :string
    add_column :orders, :sh_state, :string
    add_column :orders, :sh_zip, :string 
  end
end
