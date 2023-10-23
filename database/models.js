const Contact_info = require('../api/models/contact_info.model')
const Comment = require('../api/models/comment.model')
const User = require('../api/models/user.model')
const Platform = require('../api/models/platform.model')
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