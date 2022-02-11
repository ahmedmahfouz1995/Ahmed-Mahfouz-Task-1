//  variables declaration ==========================================================>
    const fs = require("fs")
    const yargs = require("yargs")
    const studentData =require("./data")
//  add command constructor ============================================================>
    yargs.command({
        command :"Add",
        describe : "this command adds new student data",
        builder: {
            studentID :{
                describe:'This is student ID description in Add command',
            demandOption:true,
            type:'number'
            },
            studentName:{
                describe:'This is student name description in Add command',
                demandOption:true,
                type:'string'
            },
            studentDegress:{
                describe:'This is student degress description in Add command',
                demandOption:true,
                type:'array'
            },
            comment: {
                describe: 'comment of student from add',
                type: 'string'
            }


        }
        ,
        handler: (x)=>{
            studentData.addStudenData(x.id,x.name,x.degress,x.comment)
            console.log(`student ${x.name} + added`)
        }
    })

//   remove command constructor ============================================================>
    yargs.command({
        command :"Remove",
        describe : "this command Reads student data",
        builder: {
            studentID :{
                describe:'This is studentID description in delete command',
            demandOption:true,
            type:'number'
            },

        }
        ,
        handler: (x)=>{
            studentData.removeStudenData(x.id)
            console.log(`student ${x.name} + Removed`)
        }
    })

//  read command constructor ============================================================>
    yargs.command({
        command :"Read",
        describe : "this command adds new student data",
        builder: {
            studentID :{
                describe:'This is studentID description in read command',
            demandOption:true,
            type:'number'

        }
    }
        ,
        handler: (x)=>{
            studentData.ReadStudenData(x.id)
        
        }
    })

//  list command constructor ============================================================>
    yargs.command({
        command :"List",
        describe : "this command adds new student data",
        handler: ()=>{
            studentData.listStudenData()

        }
    })

//  yargs lanuch
    yargs.parse()