const bcrypt = require('bcrypt')

const security = {
    password_hash(password) {
        return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
    },
    password_verfiy(password,password_hash){
        return bcrypt.compareSync(password, password_hash)
    }
}

module.exports = security