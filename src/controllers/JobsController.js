
const Jobs = require('../models/JobsModels')

const getall = async ( req, res ) => {
    const queryJob = await Jobs.findJob()
    const jobDataList = []
    if(queryJob.length > 0){
       for(const job of queryJob){
          const qualification  = await Jobs.findqualification(job.job_id)
          // ใช้ Object Destructuring รวมข้อมูล job กับ qualification เข้าด้วยกัน
          const {job_id, position, quantity, description, date_post} = job
          /**
           * code บรรทัดที่ 17
           * บรรทัดนี้เป็นการใช้ method map() ในการจัดการกับ array qualification โดยการเลือกเฉพาะ property qual_text 
           * แล้วนำมาเก็บไว้ในตัวแปร qualifications โดยที่ object ที่ถูกส่งเข้ามาในฟังก์ชัน map() จะเป็น object destructuring ของ object 
           * ใน array qualification ซึ่งในที่นี้จะเลือกแค่ qual_text มาเท่านั้น ส่วน {qual_text} ก็จะเป็นการเลือก property ของ object 
           * เพื่อนำมาใช้งานในฟังก์ชัน map()
           */
          const qualifications = qualification.map(({qual_text}) => qual_text)
          const jobData = {job_id, position, quantity, description, date_post, qualifications}
          jobDataList.push(jobData)
       }
       return res.send(200,{code:200,response:jobDataList})
    }else{
       return res.send(404,{code:404,msg:"ไม่พบข้อมูล"})
    }
}

const getJobsById = async ( req, res) => {
    req.params.id
    if(Number.isNaN(+req.params.id)){
        return res.send(400,{code:400,msg:"กรุณาระบุ ID "})
    }
    if(req.params.id <= 0){
        return res.send(400,{code:400,msg:"ไอดีคุณติดลบ หรือ ไอดีที่คุณระบุมาคือ 0 "})
    }
    try {
        const queryJob = await Jobs.findJobByid(req.params.id)
        const jobDataList = []
        if(queryJob.length > 0){
           for(const job of queryJob){
              const qualification  = await Jobs.findqualification(job.job_id)
              // ใช้ Object Destructuring รวมข้อมูล job กับ qualification เข้าด้วยกัน
              const {job_id, position, quantity, description, date_post} = job
              /**
               * code บรรทัดที่ 52
               * บรรทัดนี้เป็นการใช้ method map() ในการจัดการกับ array qualification โดยการเลือกเฉพาะ property qual_text 
               * แล้วนำมาเก็บไว้ในตัวแปร qualifications โดยที่ object ที่ถูกส่งเข้ามาในฟังก์ชัน map() จะเป็น object destructuring ของ object 
               * ใน array qualification ซึ่งในที่นี้จะเลือกแค่ qual_text มาเท่านั้น ส่วน {qual_text} ก็จะเป็นการเลือก property ของ object 
               * เพื่อนำมาใช้งานในฟังก์ชัน map()
               */
              const qualifications = qualification.map(({qual_text}) => qual_text)
              const jobData = {job_id, position, quantity, description, date_post, qualifications}
              jobDataList.push(jobData)
           }
           return res.send(200,{code:200,response:jobDataList})
        }else{
           return res.send(404,{code:404,msg:"ไม่พบข้อมูล"})
        }
    } catch (error) {
        console.log(error)
    }
    
}

const createJobs = async( req,res ) => {
    try {
        const { position , quantity, description, qualifications } = req.body
       
        if(position != '' || quantity != '' || description != '' || qualifications != ''){
            const findByPosition  = await Jobs.findByPosition(position)
            if(findByPosition.length == 0) {
                const createPostion = await Jobs.createPostion({position:position,quantity:quantity,description:description})
                if(createPostion){
                    let jobId = createPostion.insertId
                    const insertQuery = await Jobs.createqualification(jobId,qualifications)
                    if(insertQuery){
                        return res.send(200,{code:200,msg:"สร้างข้อมูลสำเร็จ"}).end();
                    }else{
                        return res.send(500,{code:500,msg:"สร้างข้อมูลไม่สำเร็จ"}).end()
                    }
                }else{
                    return res.send(500,{code:500,msg:"คุณเพิ่มตำแหน่งงานไม่สำเร็จ"})
                }
            }else{
               return res.send(409,{code:409,msg:"ตำแหน่งดั้งกล่าวมีอยู่แล้วไม่สามารถทำเพิ่มได้"}).end()
            }
        }else{ 
            return res.send(400,{code:400,msg:"กรุณากรอกข้อมูลให้ครบทุกช่อง"}).end()
        }
    }catch (error) {
      console.log(error)
    }
}

const deleteJobs = async ( req, res) => {
    if(Number.isNaN(+req.params.id)){
        return res.send(400,{code:400,msg:"กรุณาระบุ ID "})
    }
    if(req.params.id <= 0){
        return res.send(400,{code:400,msg:"ไอดีคุณติดลบ หรือ ไอดีที่คุณระบุมาคือ 0 "})
    }
    try {
       const checkJobById = await Jobs.findJobByid(req.params.id)
       if(checkJobById.length == 1){
          const checkqualificationById = await Jobs.findqualification(req.params.id)
          if(checkqualificationById.length != 0) {
             const deleteQualification = await Jobs.deletequalification(req.params.id)
             const deleteJobs = await Jobs.deleteJobs(req.params.id)
             if(deleteJobs == true && deleteQualification == true){
                return res.send(200,{code:200,msg:"ลบรายการสำเร็จ"}).end()
             }else{
                return res.send(500,{code:500, msg:"ลบรายการส่วนใดส่วนหนึงของระบบไม่สำเร็จ เช่น อาชีพ หรือ คุณสมบัติ"}).end()
             }
          }else{
            const deleteJobs = await Jobs.deleteJobs(req.params.id)
            if(deleteJobs){
                return res.send(200,{code:200,msg:"ลบรายการ Jobs สำเร็จ"}).end()
            }else{
                return res.send(500,{code:500,msg:"ลบรายการไม่สำเร็จ"}).end()
            }
          }
       }else{
          return res.send(404,{code:404,msg:"ไม่พบข้อมูลที่ต้องการลบ"}).end()
       }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getall , getJobsById, createJobs, deleteJobs}