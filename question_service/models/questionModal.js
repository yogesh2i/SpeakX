const { mongoose } = require("mongoose");

const questionModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    anagramType: String,
    solution: String,
    options: [{
        text: String,
        isCorrectAnswer: Boolean
    }],
    blocks: [{
        text: String,
        isAnswer: Boolean,
        showInOption: Boolean
    }],

});

const Question = mongoose.models.questions || mongoose.model("questions", questionModel);

module.exports = { Question };