class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false, index: true
      t.string :sku, null: false, unique: true, index: true
      t.decimal :price, precision: 12, scale: 2, default: 0
      t.boolean :active

      t.timestamps null: false
    end
  end
end
