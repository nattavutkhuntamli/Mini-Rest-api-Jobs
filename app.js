const express = require('express')
const morgan  = require('morgan')
const dotenv  = require('dotenv').config()
const app = express()

const PORT = process.env.PORT
const { query } = require("./src/utils/util");

const JobsRoutes = require('./src/routes/JobsRoutes')
const ResumeRoutes = require('./src/routes/ResumeRoutes')
const createServer =  async () => {
    app.disable('x-powered-by')
    app.use(express.urlencoded({extended:false, limit: "500MB"}))
    app.use(express.json({limit:"500MB"}))

    app.use(morgan('dev'))

    app.use('/api/jobs',JobsRoutes)
    app.use('/api/resume',ResumeRoutes)
    app.post('/create_qualification/:id', async( req,res ) =>{
        if(Number.isNaN(+req.params.id)){
            return res.send(400,{code:400,msg:"กรุณาระบุ ID "})
        }
        if(req.params.id <= 0){
            return res.send(400,{code:400,msg:"ไอดีคุณติดลบ หรือ ไอดีที่คุณระบุมาคือ 0 "})
        }
        const checkQualification = await query(`SELECT job_id FROM tbl_qualification WHERE job_id = '${req.params.id}'`)
        try {
            if(checkQualification.length != 0){
                const {qualifications } = req.body
                const insertQuery = await query( `INSERT INTO tbl_qualification (job_id, qual_text) VALUES ${qualifications.map(qual => `(${req.params.id}, '${qual}')`).join(',')};`);
                if(insertQuery){
                    return res.send(200,{code:200,msg:"สร้างคุณสมบัติสำเร็จ"}).end();
                }else{
                    return res.send(500,{code:500,msg:"สร้างข้อมูลไม่สำเร็จ"}).end()
                }
            }else{
                const {qualifications } = req.body
                const insertQuery = await query( `INSERT INTO tbl_qualification (job_id, qual_text) VALUES ${qualifications.map(qual => `(${req.params.id}, '${qual}')`).join(',')};`);
                if(insertQuery){
                    return res.send(200,{code:200,msg:"สร้างคุณสมบัติสำเร็จ"}).end();
                }else{
                    return res.send(500,{code:500,msg:"สร้างข้อมูลไม่สำเร็จ"}).end()
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    })
    
    app.listen(PORT,() => { console.log('Start Server success ')})
}

setTimeout(() => {
    createServer()
}, 500);
