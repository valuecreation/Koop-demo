const providerFileGeojson = require('./provider-file-geojson/initialize')();
const outputVectorTiles = require('./output-vector-tiles/initialize')();
const providerGithub = require('./provider-github/initialize')();
const outputs = [outputVectorTiles];
const auths = [];
const caches = [];
const plugins = [providerGithub, providerFileGeojson];
module.exports = [...outputs, ...auths, ...caches, ...plugins];