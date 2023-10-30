const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const nodemailer = require('nodemailer')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{
    res.send(`<h1 style='text-align:center;color:blue;'>welcome</h1>`)
})
app.post('/api/sendEmail',(req,res)=>{
    res.send("yes i got")
    let data=req.body
    console.log(data)
    const tranporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'vanmathi291@gmail.com',
            pass:'vanmathibala'
        }
    })
    const mailOptions={
        from:'vanmathi291@gmail.com',
        to:'vanmathi291@gmail.com',
        subject:'message from client',
        html:`
        <ul>
        <li><h1 style = 'color :green;'>Name:${data.name}
        </h1><li>
        <li><h1 style = 'color:blue;'>phone_Number:${data.phoneNumber}
        <h1><li>
        <li><h1 style = 'color:red;'>Email:${data.email}
        <h1><li>
        <li><h1 style = 'color:blue;'>Message:${data.message}
        <h1><li>
        `
    }
    tranporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(`Email sent:${info.response}`)
        }
    })
    tranporter.close()
})
app.listen(8000,()=>{
    console.log('server starting up port 8000')
})