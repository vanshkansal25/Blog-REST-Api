import mongoose,{Schema} from "mongoose";
const userSchema = new Schema({
    username:{
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true 
    },
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password:{
        type: String,
        required:[true,"Password is Required"]
    },
    avatar:{
        type: {
                public_id: String,
                url: String //cloudinary url
            },
            required: true
    },
    refreshToken:{
        type : String
    },
    bookMark:[{
        type:Schema.Types.ObjectId,
        ref: "User"
    }],
    role: {
    type: String,
    enum: ["reader", "writer", "editor", "admin"],
    default: "reader"
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema);