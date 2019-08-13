Rails.application.routes.draw do
  resources :order_items
  resources :orders
  resources :product_categories
  resources :categories
  resources :products
  resources :users
  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
end
