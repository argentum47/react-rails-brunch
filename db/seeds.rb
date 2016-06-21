# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


ActiveRecord::Base.transaction do
  3000.times do |i|
    Product.connection.execute "INSERT INTO products (name, sku, price, active, created_at, updated_at) values (\"Product#{i+1}\", #{i+1}#{i+2}#{i+3}#{i+4}, #{ rand() * 1000}, #{i % 21 ? 0 : 1}, now(), now())"
  end
end
