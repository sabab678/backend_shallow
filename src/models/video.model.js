//this file design how video and related info saved



import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema({
    videoFile: {
        type: String,  //cloudinary URL
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,  //cloudinary URL
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,   //From cloudinary 
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },






}, { timestamps: true })



videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model('Video', videoSchema)










/*
In the video.model.js file, you define a Mongoose schema for a video entity in a MongoDB database. The schema includes fields such as videoFile, title, description, thumbnail, views, duration, isPublished, and owner, each with specific data types and validation rules. Required fields are marked with required: true, ensuring that necessary data is provided when creating a video document. The views field has a default value of 0, while isPublished defaults to true, indicating that videos are published by default. The schema also uses timestamps to automatically manage createdAt and updatedAt fields. Additionally, the mongooseAggregatePaginate plugin is applied to enable pagination for aggregate queries. Finally, the schema is exported as a Mongoose model named Video, allowing it to be used for database operations in other parts of the application.

*/