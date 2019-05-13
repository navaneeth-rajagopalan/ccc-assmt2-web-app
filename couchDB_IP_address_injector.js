fs = require('fs')

couch_db_ip_address = process.argv[2];
fs.writeFileSync(__dirname + '/src/assets/data/couchDB_IP_address.json', JSON.stringify({address: couch_db_ip_address}));