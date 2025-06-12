import mongoose,{Schema} from "mongoose";
const likeSchema = new Schema({
    article:{
        type:Schema.Types.ObjectId,
        ref:"Article"
    },
    likedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const Like = mongoose.model("Like",likeSchema)