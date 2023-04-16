const router = require('express').Router()
const  {
    getall,
    createJobs,
    getJobsById,
    deleteJobs
} = require('../controllers/JobsController')

router.get('/',getall)
router.get('/:id',getJobsById)
router.post('/create_jobs', createJobs)
router.delete('/:id',deleteJobs)
module.exports = router