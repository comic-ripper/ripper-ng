namespace :assets do
  desc 'Compile Assets'
  task :precompile do
    Process.wait spawn 'npm run dist'
  end
end
