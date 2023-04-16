const Resume = require('../models/ResumeModels')

const getResume = async(req,res) => {

}

const getByIdResume = async(req,res) => {

}

const createResume = async(req,res) => {
   try {
      const {name,age,address,phone,email,expect_jobs,salary,lang,computing,other_skill,driving,driving_license,own_car} = req.body

      if(
            name != undefined && name !="" && age != undefined &&  age !=""
            && address != undefined && address !=""  && phone !=undefined && phone !=""
            && email !=undefined && email !="" && expect_jobs != undefined && expect_jobs !=""
            && salary !=undefined &&  salary !="" &&  lang != undefined &&  lang !="" 
            && computing != undefined &&  computing !=""&& other_skill !=undefined && other_skill !=""
            && driving != undefined && driving != "" && driving_license != undefined &&  driving_license !=""
            &&own_car != undefined && own_car !=""
        )
         {
            const SaveDataResume = await Resume.create({
                name,age,address,phone,email,expect_jobs,salary,lang,
                computing,other_skill,driving,driving_license,own_car
            })

            if(SaveDataResume){
                console.log(SaveDataResume)

            }else{
                return res.send(500,{code:500,msg:"บันทึกข้อมูลไม่สำเร็จระบบเกิดข้อผิดพลาด"}).end()
            }
      }else{
        return res.send(400,{code:400,msg:"กรุณากรอกข้อมูลให้ครบทุกช่อง"}).end()
      }
   } catch (error) {
      console.log(error)
   }
}
const updateResume = async(req,res) => {

}
const deleteResume= async(req,res) => {

}

module.exports = {
    getResume, getByIdResume, createResume, updateResume, deleteResume
}