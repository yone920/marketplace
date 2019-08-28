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

  # root 'application#index'

  post 'orders/neworder', to: 'orders#neworder'
  patch 'orders/shipping/:id', to: 'orders#shipping'
  patch 'users/order_complete/:id', to: 'users#order_complete'
end
