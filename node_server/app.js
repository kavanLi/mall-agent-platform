// 引入各种包
const express = require("express")
const formidable = require("formidable")
// 这个DB.js是我看一个大佬写的操作mongodb封装好的库
const DB = require("./DB")
// 这是数据库的地址和集合
let dburl = 'mongodb://localhost:27017/learn'
let collection = "users"

const mondb = new DB(dburl, collection)
// 这个解析传过来的数据
const form = new formidable.IncomingForm()

const app = express()
app.use(express.static("./dist"))
// 注册接口 /regin
app.post("/regin", (req, res) => {
    form.parse(req, (err, fields, files) => {
        let obj = {
            username: fields.username,
            password: fields.password,
            tel: fields.tel,
            email: fields.email,
            name: fields.name,
            time: new Date()
        }
        // 把数据插入到数据库中, 表示注册成功, 并把传过来的数据返回方便登陆
        mondb
            .insert(obj)
            .then(result => {
                res.send(obj)
            })
    })
})
//登陆接口
app.post("/login", (req, res) => {
    form.parse(req, (err, fields, files) => {
        let user = {
            username: fields.username,
            password: fields.password
        }
    })
    mondb
        .query(user)
        .then(result => {
            res.send(result)
        })
})

var port = 8088
app.listen(port, function () {
    console.log(`ok, Your application is running here: http://localhost:${port}`)
})
console.log(`ok, Your application is running here: http://localhost:${port}`)
