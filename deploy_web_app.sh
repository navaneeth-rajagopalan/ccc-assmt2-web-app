apt-get update
apt-get install git
apt-get install nodejs
apt-get install npm
git clone https://bitbucket.org/ccc_assignment2/web-application.git  web-app
cd web-app
npm install
node couchDB_IP_address_injector $1
ng build --prod
node server.js