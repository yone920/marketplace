Rails.application.routes.draw do
  resources :product_categories
  resources :categories
  resources :products
  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
end
