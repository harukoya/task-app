Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :test, only: %i[index]
      resources :tasks

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        sessions: 'custom/sessions'
      }
    end
  end
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
