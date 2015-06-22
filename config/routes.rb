Rails.application.routes.draw do
  # devise_for :users
  root "store#index"
  get 'store/load_items' => 'store#load_items'
  get '/checkout' => 'store#checkout'
  post '/box' => 'boxes#create'

  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }

end
