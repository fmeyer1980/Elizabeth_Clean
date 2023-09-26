const mix = require('laravel-mix');


mix.js('src/js/app.js', 'assets')

mix.postCss('src/css/tailwind.css', 'assets', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
])