import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    website:{
        type:String
    },
    location:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

export const Company = mongoose.model("Company", companySchema);