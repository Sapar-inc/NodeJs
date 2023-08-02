const express = require('express')
const app = express()
const fs = require('fs')
const {uid} = require('uid')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const registrationHandler = function (req,res){
    const body = req.body
    
    let readUserFile = db.read()
    
    let {login, password, password_try} = body
    
    for(let user of readUserFile){
        if(login == user.login){
            return res.json({message: 'Логин занят', status: 'Error', payload: body})
        }
    }
    
    if(login.length < 5){
        return res.json({message: 'Логин меньше 5-и символов', status: 'Error', payload: body})
    } 

    if(password.length < 8){
        return res.json({message: 'Пароль меньше 8-ми символов', status: 'Error', payload: body})
    }

    if(password != password_try){
        return res.json({message: 'Пароли не совподают', status: 'Error', payload: body})
    }

    const newUser = {
        id: uid(), 
        login,
        password
    }
    db.create(newUser)

    return res.json({message: 'Вы зарегестрировались', status: 'success', payload: newUser})
}
app.post('/registaration', registrationHandler)

const autorisationsHadler = function (req,res){
    const body = req.body
    
    let {login, password,} = body
    
    let readUserFile = db.read()
    for(let user of readUserFile){
        if(login != user.login){
            return res.json({message: 'не правельный логин', status: 'error', payload: {isAuth: false, badIs: "login"}})
        }
        if(password != user.password){
            return res.json({message: 'не правельный пароль', status: 'error', payload: {isAuth: false, badIs: "password"}})
        }
        if(user.login == login && password == user.password){
            return res.json({message: 'Вы вошли', status: 'success', payload: {isAuth: true, user}})
        }
    }
}

app.post('/autorisation', autorisationsHadler)

const deleteUser = function (req,res){
    let {id} = req.body

    let read = db.read()
    const targetUser = read.filter((el) => {
        return el.id === id
    })

    if (!targetUser.length) return res.json({message: 'не найден', status: 'error', payload: {id}})

    let saveLastUserRemoved = targetUser[0]

    db.delete(saveLastUserRemoved.id)

    return res.json({message: 'удален', status: 'success', payload: saveLastUserRemoved})

    
}

app.post('/deleteUser', deleteUser)

const editUserHandler = function (req,res){
    let {id,login,password} = req.body

    let read = db.read()
    const targetUser = read.filter((el) => {
        return el.id === id
    })

    if (!targetUser.length) return res.json({message: 'не найден', status: 'error', payload: {id}})

    let saveLastUserUpdate = targetUser[0]
    saveLastUserUpdate.login = login
    saveLastUserUpdate.password = password

    db.update(saveLastUserUpdate.id)


    return res.json({message: 'изменен', status: 'success', payload: saveLastUserUpdate})

}

app.post('/editUser', editUserHandler)

const db = {
    create: function(newUser){
        const users = this.read();

        users.push(newUser)
        fs.writeFileSync('users.json', JSON.stringify(users))
    },
    read: function(){ 
        return JSON.parse(Buffer.from(fs.readFileSync('users.json').toString('utf-8'))) 
    },
    update: function(saveLastUserUpdate){
        let updatedUser = this.read()
        console.log(saveLastUserUpdate)
        db.delete(saveLastUserUpdate)
        updatedUser.push(saveLastUserUpdate)
        fs.writeFileSync('users.json', JSON.stringify(updatedUser))

    },
    delete: function(saveLastUserRemoved){
        let removedUser = this.read()
        console.log(saveLastUserRemoved)
        const num = (element) => element.id == saveLastUserRemoved
        let indexUser =  removedUser.findIndex(num)
        removedUser.splice(indexUser,1)
        fs.writeFileSync('users.json', JSON.stringify(removedUser))

    } 
}
app.listen(3000)


