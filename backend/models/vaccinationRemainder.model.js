import mongoose from "mongoose";
const vaccinationRemainderSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    vaccine_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vaccinationDetail",
    },
    is_completed : {
        type : Boolean,
        default : false,
    },
    completed_date : {
        type : Date,
    },
    due_date : {
        type : Date,
    },
});

const vaccinationRemainderModel = mongoose.model("vaccinationRemainder" , vaccinationRemainderSchema);

export default vaccinationRemainderModel;