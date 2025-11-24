# Conventions list generator plugin
# Made by Gauss, 2023
# Do whatever you want with it

module Conventions
  class Generator < Jekyll::Generator
    def generate(site)
      con_data = site.data['cons']
      # The types are not useful here
      con_data.each do |key, value|
        value.delete("type")
      end
      about = site.pages.find { |page| page.name == 'about.markdown'}

      about.data['cons'] = con_data.to_json
    end
  end
end
