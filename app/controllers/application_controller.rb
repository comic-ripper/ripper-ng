class ApplicationController < ActionController::API
  def js_app
    render file: Rails.public_path.join('index.html')
  end
end
