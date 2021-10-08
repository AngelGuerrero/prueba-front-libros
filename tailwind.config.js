module.exports = {
  corePlugins: [
    'boxSizing',
    'margin',
    'padding',
    'textColor',
    'fontWeight',
    'fontSize',
    'borderRadius',
    'textAlign',
    //
    'backgroundColor',
    'borderStyle',
    'borderWidth',
    'borderColor',
    'textDecoration',
    'cursor',
    'boxShadow',
    // Flex
    'flex',
    'flexDirection',
    'justifyContent',
    'alignItems',
    // Display
    'display',
    'width',
    'maxWidth',
    'minWidth'
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
