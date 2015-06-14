Rails.application.routes.draw do
  devise_for :users
  root "store#index"
  get 'store/load_items' => 'store#load_items'
  get '/checkout' => 'store#checkout'

end
