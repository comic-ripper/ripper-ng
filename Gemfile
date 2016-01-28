source 'https://rubygems.org'

ruby "2.3.0"

gem 'rails', '~> 4.2.5.1'
gem 'rails-api'
gem 'rails_12factor', group: :production

gem 'pg'

gem 'puma'

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'

  gem 'quiet_assets'

  gem 'rubocop', require: false
  gem 'parser', '~>2.3.0.pre', require: false
end

group :development, :test do
  gem 'rspec', '~> 3.3'
  gem 'rspec-rails', '~> 3.3'
  gem 'factory_girl_rails'
end

group :test do
  gem 'timecop'
  gem 'simplecov', require: false
end

# To use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano', :group => :development

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'
