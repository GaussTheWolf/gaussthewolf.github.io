# Add emojis to text
# Made by Gauss, 2023
# Do whatever you want with it

module Jekyll
  module FurrEmoji
    def furrify(input)
      # Find all emojis between two double dots
      input.gsub(/:[a-z_]+:/) { |e|
        "<img class=\"emoji\" title=\"#{e}\" alt=\"#{e}\" src=\"/assets/emoji/#{e.gsub(':', '')}.png\"/>"
      }
    end
  end
end

Liquid::Template.register_filter(Jekyll::FurrEmoji)
