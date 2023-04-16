const { query } = require('../utils/util')

module.exports = {
    findJob(){
        return query(`SELECT * FROM tbl_jobs order by job_id desc`)
    },
    findJobByid(id){
        return query(`SELECT * FROM tbl_jobs WHERE job_id = '${id}'`)
    },
    findqualification(Jobid){
       return query(`SELECT job_id, qual_text FROM tbl_qualification WHERE job_id = '${Jobid}'`)
    },
    findByPosition(position){
        return query(`SELECT position FROM tbl_jobs  WHERE position = '${position}'`)
    },
    createPostion(data) {
        return query("INSERT INTO tbl_jobs SET ?", data);
    },
    createqualification(id,qualifications){
        return query( `INSERT INTO tbl_qualification (job_id, qual_text) VALUES ${qualifications.map(qual => `(${id}, '${qual}')`).join(',')};`);
    },
    deleteJobs(id){
        return query(`DELETE FROM tbl_jobs WHERE job_id = '${id}'`)
    },
    deletequalification(id){
        return query(`DELETE FROM tbl_qualification WHERE job_id  = '${id}'`)
    }

}