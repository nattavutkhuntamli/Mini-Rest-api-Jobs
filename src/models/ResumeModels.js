const {query} = require('../utils/util')
module.exports = {
    createResume(data){
      return query('INSERT INTO tbl_resume SET ?', data)
    },
    createEducation(data){

    },
    createImage(data){
        
    }

}