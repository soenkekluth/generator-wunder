# http://compass-style.org/help/tutorials/configuration-reference/

# Require any additional compass plugins here.
# require 'breakpoint'
# require 'modular-scale'

# Set this to the root of your project when deployed:
http_path = "../../../"
css_dir = "app/assets/css"
sass_dir = "app/assets/scss"
images_dir = "app/assets/images"
#generated_images_dir = "app/assets/images/generated"
#generated_images_path = "app/assets/images/generated"
javascripts_dir = "app/assets/js"
fonts_dir = "app/assets/fonts"
add_import_path "app/assets/components"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :nested
#output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass assets/css scss && rm -rf sass && mv scss sass
preferred_syntax = :scss

#Sass::Script::Number.precision = 14
