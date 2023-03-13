import mongoose from "mongoose";

const Post = new mongoose.Schema({  
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },

})

const PostSchema = mongoose.model('Post', Post); // PostSchema is the name of the collection in the database

export default PostSchema;