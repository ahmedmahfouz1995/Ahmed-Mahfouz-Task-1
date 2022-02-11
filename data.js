//  variables declaration ==========================================================>
const fs = require("fs")

// add student data functions================================>
const addStudenData =(id, name, degrees, comment)=>{
    const studentData = loadData()
    if(isNaN(id) || id == 0 ){
        console.log("plz enter valid Data");
    }
    else{
        if (name === "") {
            console.log("please enter student name")
        } else {
            if (degrees.length === 0) {
                console.log("please enter student degrees")
            } else {
                const duplicateStudent = studentData.find((ele) => {
                    return ele.id === id
                })
                if (!duplicateStudent) {
        
                    let totalDeg =0
                    parseInt
                     degrees.forEach(degree => {
                         try {
                           let degreeint=  parseInt(degree)
                           totalDeg+=degreeint
                         } catch (error) {
                             console.log("please inter valid degrees")
                         }
                        
                    });
                    studentData.push({
                        id,
                        name,
                        degrees,
                        total: totalDeg,
                        comment
                    })
                    saveData(studentData) 
                }
                else {
                    console.log('The id is already exist can not add student with duplicate id')
                }
            }
        }
    }     
       
} 
const loadData=() =>{
    try {
        data= fs.readFileSync("studentData.json").toString
        return JSON.parse(data)
    } catch (error) {
        return []
    }
} 
const saveData=(data)=>{
        const savedata = JSON.stringify(data)
        fs.writeFileSync("studentData.json",savedata)
}

// Remove students data functions  =============================>
const removeStudenData =(id)=>{
    const studentData = loadData()
    if(isNaN(id) || id == 0){
        console.log('plz enter valid id')
    }
    else{
        const studentToKeep = studentData.filter(student=>{
            return student.id !== id
        })
       
            if(studentData.length !== studentToKeep.length){
                saveStudent(studentToKeep)
                console.log(`student with id: ${id} removed successfuly`)
            }
            else{
                console.log(`No student with id: ${id} to delete`)
            }
    }
  
} 
// Read students data functions  =============================>
const listStudenData =()=>{
    const studentData = loadData()
    if(studentData.length>0){
        studentData.forEach(student => {
            console.log(`
            student id        :${student.id}
            student name      :${student.name} , 
            degrees           :[${student.degrees}] , 
            with total degree :${student.total}
            `)
        })
    }
    else{
        console.log('There is no Data')
    }
} 
// List students data functions  =============================>
const ReadStudenData =(id)=>{
    const studentData = loadData()
    if(isNaN(id) || id == 0){
        console.log('plz enter Valid id')
    }
    else{
        const studetToRead = studentData.find((student) => {
            return student.id === id
        })
        if (studetToRead) {
            console.log(`
            student id        :${id}
            student name      :${studentReq.name} , 
            degrees           :[${studentReq.degrees}] , 
            with total degree :${studentReq.total}`)
        }
        else {
            console.log(`there is no student with id ${id}`)
        }
    }

} 
module.exports = {
    ReadStudenData,
    listStudenData,
    removeStudenData,
    addStudenData
}
