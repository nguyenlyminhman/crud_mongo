let config = require('config');
module.exports={
    db: "mongodb://"+ config.get("db.host") + ":"+ config.get("db.port")+"/"+config.get("db.name")
}