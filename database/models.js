const User = require('../api/models/user.model')
const Catalogue = require("../api/models/catalogue.model")
const Collection = require("../api/models/collection.model")

function setRelations(){
    try {
        Collection.hasMany(Catalogue)
        Catalogue.belongsTo(Collection)
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }