const { mongoose } = require("mongoose");
const { Question } = require("./models/questionModal");
const { mongoUri, db } = require("./lib/urls");
async function connectMongo() {
    try {
        await mongoose.connect(mongoUri,{dbName: db});
        console.log("Connected to database succesfully");

    } catch (error) {
        console.log(error);
        console.log("Failed to connect database");
    }

}

connectMongo();

exports.postQuestions = async function postQuestion(call,cb){
  const data = call.request;
  try {
      const question = await Question(data);
      question.save();
      return cb(null,{msg: "added successfully"});
  } catch (error) {
    console.log(error.message)
    return cb(error,{msg: error.message});
  }
}

exports.getQuestions = async function getQuestion(call, cb) {
    const { query, page, limit, filter } = call.request;
    const skip = (page - 1) * (limit);
    let moreData = false;

    const dbQuery = {
        $and: [{ title: { $regex: query, $options: 'i' } }]
    };

    if (filter !== 'All') {
        dbQuery.$and.push({ type: filter });
    }


    let response = await Question.find(dbQuery, { _id: 0 }).skip(skip).limit(limit + 1);
    if (response.length > limit) {
        response.pop();
        moreData = true;
    }

    return cb(null, { questions: response, isMore: moreData });

};
