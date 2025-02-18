import mongoose from "mongoose";

const vaccinationDetailSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age_group : {
        type : String,
        required : true,
    },
    overview : {
        type : String,
        required : true,
    },
});

const vaccinationDetailModel = mongoose.model("vaccinationDetail" , vaccinationDetailSchema);

export default vaccinationDetailModel;