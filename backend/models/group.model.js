import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    creater_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    name : {
        type : String,
    },
    participant_id : [{
        type : mongoose.Schema.Types.ObjectId,
    }],
})

const groupModel = mongoose.model("group" , groupSchema);

export default groupModel;