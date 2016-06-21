# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10000.times do |i|
  Product.create({ name: 'Product#{i+1}', sku: [i+1, i+2, i+3, i+4].join(""), price: rand() * 1000, active: i % 21 ? false : true })
end
