# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "minnie"
  spec.version       = "0.1.0"
  spec.authors       = ["phvmous"]
  spec.email         = ["phvmous@gmail.com"]

  spec.summary       = "A light weight Jekyll theme that is clean and performant."
  spec.homepage      = "https://github.com/phvmous/minnie"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "webrick", "~> 1.7"
end
