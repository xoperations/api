var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    host: 'http://35.227.87.177:9200/',
    log: 'info'
});

module.exports = client;