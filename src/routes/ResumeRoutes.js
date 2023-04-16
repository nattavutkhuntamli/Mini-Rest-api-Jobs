const router = require('express').Router()
const {
    getResume, getByIdResume, createResume, updateResume, deleteResume
} = require('../controllers/ResumeComtoller')

router.get('/',getResume)
router.get('/:id',getByIdResume)
router.post('/',createResume)
router.patch('/:id',updateResume)
router.delete('/:id',deleteResume)

module.exports = router