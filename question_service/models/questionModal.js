const {mongoose} = require("mongoose");

const questionModel =  new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
   type: {
    type: String,
    required: true
   }
   
});
const Question = mongoose.models.questions || mongoose.model("questions",questionModel);

module.exports = {Question};