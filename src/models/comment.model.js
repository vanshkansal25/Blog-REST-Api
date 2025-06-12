import mongoose,{Schema} from "mongoose";
const commentSchema =  new Schema({
    content:{
        type:String,
        required:true
    },
    article:{
        type: Schema.Types.ObjectId,
        ref:"Article"
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
export const Comment = mongoose.model("Comment",commentSchema)