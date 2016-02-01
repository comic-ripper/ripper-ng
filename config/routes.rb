Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  get '/*path' => 'application#js_app'
  root to: 'application#js_app'
end
