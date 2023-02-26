import bcrypt, { hash } from "bcrypt"

import User from "../models/user.model"

const signUpUser = (info, callback) => {
    bcrypt.hash(info.password, 10, (err, hash) => {
         
        const user = new User({
            firstName : info.firstName,
            lastName : info.lastName,
            password : hash,
            username : info.username,
            email : info.email

        })
        const savedUSer = user.save()
        callback(null, savedUSer)
    })
}

export {signUpUser}