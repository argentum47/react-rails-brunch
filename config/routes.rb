Rails.application.routes.draw do
  root 'welcome#index'

  post '/verify' => 'welcome#verify'
  get '/human' => 'welcome#human'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :products, only: [:index]
    end
  end
end
