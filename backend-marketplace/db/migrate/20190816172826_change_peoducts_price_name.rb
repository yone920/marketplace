class ChangePeoductsPriceName < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :price, :price_in_cents
  end
end
