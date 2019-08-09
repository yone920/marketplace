# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Product.destroy_all
Category.destroy_all


30.times do
    Product.create(name: Faker::Commerce.product_name, description: Faker::Vehicle.vin, price: rand(1..200), main_image: Faker::Commerce.department, quantity: rand(20..50), featured: [true, false].sample )
end
  puts "happy Product seeding"


5.times do
    Category.create(name: Faker::Commerce.department, image: Faker::Commerce.department )
end
  puts "happy Product seeding"


  products = Product.all

products.each do |product|
    ProductCategory.create(product: product , category_id: rand(0..4))
end

puts "happy Category Seeding"
    