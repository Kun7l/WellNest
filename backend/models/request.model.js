import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    sender_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    receiver_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    status : {
        type : String,
        enum : ["accepted" , "rejected"],
    },
});

const requestModel = mongoose.model("request" , requestSchema);

export default requestModel;