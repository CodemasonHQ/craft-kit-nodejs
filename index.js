module.exports = {
  name: 'nodejs',
  default: ["nodejs"],
  masonJson: {
  	nodejs: require('./mason-json/nodejs.js'),
  	mongodb: require('./mason-json/mongodb.js')
  },
  hooks: [],
}