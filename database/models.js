const Contact_info = require('../api/models/contact_info.model')
const Comment = require('../api/models/comment.model')
const User = require('../api/models/user.model')
const Platform = require('../api/models/platform.model')
const Catalogue = require("../api/models/catalogue.model")
const Collection = require("../api/models/collection.model")
const User_catalogue = require('../api/models/user_catalogue.model')
const Platform_catalogue = require('../api/models/platform_catalogue.model')

function setRelations(){
    try {
        User.hasOne(Contact_info, {
            foreignKey: 'userId'
        })
        Contact_info.belongsTo(User)

        Collection.hasMany(Catalogue)
        Catalogue.belongsTo(Collection)

        User.hasMany(Comment)
        Comment.belongsTo(User)

        Catalogue.hasMany(Comment)
        Comment.belongsTo(Catalogue)

        Catalogue.belongsToMany(Platform, { through: Platform_catalogue})
        Platform.belongsToMany(Catalogue, { through: Platform_catalogue })

        Catalogue.belongsToMany(User, { through: User_catalogue })
        User.belongsToMany(Catalogue, { through: User_catalogue }) 
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }