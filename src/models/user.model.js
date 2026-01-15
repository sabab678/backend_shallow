
//-----in this file we write mongoose for user, how we collect user data or manage-----




import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new Schema({

    userNmae: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]

    },

    fullName: {
        type: String,
        required: true,
        index: true,
        trim: true,
    },
    avatar: {
        type: String,    //cloudinary URL
        required: true,
    },
    coverImage: {
        type: String,    //cloudinary URL
    },
    watchHistory: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Video"
    }],
    refreshToken: {
        type: String,
    }







}


, { timestamps: true })



userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    
    this.password = await bcrypt.hash(this.password,10)
    
})

userSchema.methods.isPasswordCorrect=async function name(password) {
    bcrypt.compare(password,this.password)

}


userSchema.methods.generateAccessToken=async function name() {

    return await jwt.sign({
        _id:this._id,
        email:this.email,
        userNmae:this.userNmae,
        fullName:this.fullName
    },process.env.ACCESS_TOKEN_SECRET,
    {
        expriesIn:process.env.ACESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken=async function name() {
    return await jwt.sign({
        _id:this._id,
         },process.env.REFRESH_TOKEN_SECRET,
    {
        expriesIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
    


export const User = mongoose.model('User', userSchema)










/*
In this file, you define a Mongoose schema for a user, which outlines how user data is structured in your MongoDB database. The schema includes fields like userName, email, password, fullName, and others, along with their data types and validation rules.

This schema allows you to create, read, update, and delete user data in your application. Additionally, you have defined methods for password hashing and token generation, which are essential for user authentication and management.
*/