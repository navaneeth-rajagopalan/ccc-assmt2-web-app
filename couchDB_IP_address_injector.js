fs = require('fs')

couch_db_ip_address = process.argv[2];
API_endPoint = 'http://' +  couch_db_ip_address + ':3001/api/anger-drug/co-relation'
fs.writeFileSync(__dirname + '/src/assets/data/couch_API_URL.json', JSON.stringify({API_URL: API_endPoint}));
fs.writeFileSync(__dirname + '/config/couch_db_ip_address.json', JSON.stringify({address: couch_db_ip_address}));
