if [ $# -eq 0 ]
  then
    echo "Missing Couch DB Instance IP Address"
    exit 1
fi
apt-get update
apt-get install git
apt-get install nodejs
apt-get install npm
rm -rf /web-app/.git
rm -rf web-app
git clone https://bitbucket.org/ccc_assignment2/web-application.git web-app
npm install -g @angular/cli
cd web-app
npm install
node couchDB_IP_address_injector.js $1
ng build --prod
fuser -k 4200/tcp
nohup node server.js &