const providerFileGeojson = require('@koopjs/provider-file-geojson');
function initialize() {
  return {
    instance: providerFileGeojson
  };
}
module.exports = initialize;