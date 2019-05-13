fs = require('fs')

couch_db_ip_address = process.argv[2];
API_endPoint = 'http://' +  couch_db_ip_address + ':5984/ccc_a2/fc494be22f81a3914f7e621cde00067b'
fs.writeFileSync(__dirname + '/src/assets/data/couch_API_URL.json', JSON.stringify({API_URL: API_endPoint}));
