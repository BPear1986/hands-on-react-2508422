module.exports = {
  presets : [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  plugins:['@babel/plugin-transform-async-to-generator',
  				 '@babel/plugin-transform-regenerator',]
};