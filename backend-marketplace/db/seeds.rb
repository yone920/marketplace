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
User.destroy_all

book_genres = ["Fantasy", "Science fiction", "Western", "Romance", "Thriller", "Mystery", "Detective story", "Dystopia"]

40.times do
    Product.create(name: Faker::Book.title, description: Faker::Lorem.paragraph(sentence_count: 7), price: rand(1..200), main_image: rand(1..40), image_two: rand(1..40), image_three: rand(1..40), quantity: rand(20..50), sale: [true, false].sample, featured: [true, false].sample )
end
  puts "happy Product seeding"

  Category.create(name: "Fantasy", image: Faker::Commerce.department )
  Category.create(name: "Science fiction", image: Faker::Commerce.department )
  Category.create(name: "Western", image: Faker::Commerce.department )
  Category.create(name: "Romance", image: Faker::Commerce.department )
  Category.create(name: "Thriller", image: Faker::Commerce.department )
  Category.create(name: "Mystery", image: Faker::Commerce.department )
  Category.create(name: "Detective story", image: Faker::Commerce.department )
  Category.create(name: "Dystopia", image: Faker::Commerce.department )

# 8.times do
#     Category.create(name: book_genres.sample, image: Faker::Commerce.department )
# end
  puts "happy Product seeding"


  products = Product.all

products.each do |product|
    ProductCategory.create(product: product , category_id: rand(1..8))
end

puts "happy Category Seeding"
    