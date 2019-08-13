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


40.times do
    Product.create(name: Faker::Book.title, description: Faker::Lorem.paragraph(sentence_count: 7), price: rand(1..200), main_image: Faker::Commerce.department, quantity: rand(20..50), featured: [true, false].sample )
end
  puts "happy Product seeding"


10.times do
    Category.create(name: Faker::Book.genre, image: Faker::Commerce.department )
end
  puts "happy Product seeding"


  products = Product.all

products.each do |product|
    ProductCategory.create(product: product , category_id: rand(0..9))
end

puts "happy Category Seeding"
    