class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :main_image
      t.string :image_two
      t.string :image_three
      t.integer :quantity
      t.boolean :featured
      t.boolean :sale

      t.timestamps
    end
  end
end
