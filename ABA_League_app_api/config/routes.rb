Rails.application.routes.draw do
  root 'home#index'

  resources :users
  resources :leagues
  resources :sessions, only: [:new, :create, :destroy]
  post 'signup', to: 'user#new', as: 'signup'
  get 'login', to: 'sessions#new', as:'login'
  get 'logout', to: 'sessions#destroy', as:'logout'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
