import mongoose,{Schema} from "mongoose";

const articleSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    title:{
        type: String,
        required:true
    },
    slug:{
        type: String,
        required:true
    },
    content:{
         type: String,
        required:[true,"Content cannot be empty"]
    },
    coverImage:{
        type: {
                public_id: String,
                url: String
            },
    },
    tags:[
        {
            type : String
        }
    ],
    comments:{
        type:Schema.Types.ObjectId,
        ref: "Comment"
    },
    bookMark:[{
        type:Schema.Types.ObjectId,
        ref: "User"
    }],
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    publishedAt:{
        type:Date
    }
},{timestamps:true})

export const Article  =  mongoose.model("Article",articleSchema)