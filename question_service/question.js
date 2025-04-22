const { mongoose } = require("mongoose");
const { Question } = require("./models/questionModal");
const { mongoUri, db } = require("./lib/urls");

//connects mongo db
//expects two arguments as 
//1. url to connect mongo
//2. database name
async function connectMongo(mongoUri,db) {
    try {
        await mongoose.connect(mongoUri,{dbName: db});
        console.log("Connected to database succesfully");

    } catch (error) {
        console.log(error);
        console.log("Failed to connect database");
    }

}

connectMongo(mongoUri,db);


//posts a single question
//expects two arguments as
//1. data as call (which can be accesses using call.request)
//2. callback function which gets returned with error and success parameters
exports.postQuestions = async function postQuestion(call,cb){
  const data = call.request;
  try {
      const question = new Question(data);
      await question.save();
      return cb(null,{msg: "Added Successfully"});
  } catch (error) {
    return cb(error,null);
  }
}

//fetching question
//expects two arguments as
//1. data as call (which can be accesses using call.request) 
//2. callback function which gets returned with error and success parameters
exports.getQuestions = async function getQuestion(call, cb) {
    const { query, page, limit, filter } = call.request;
    const skip = (page - 1) * (limit);
    let moreData = false;

    //query to search results matching title
    const dbQuery = {
        $and: [{ title: { $regex: query, $options: 'i' } }]
    };
    //if any filter provided except call including it to search query condition
    if (filter !== 'All') {
        dbQuery.$and.push({ type: filter });
    }

    //fetching data one more than limit for pagination purpose
    let response = await Question.find(dbQuery, { _id: 0 }).skip(skip).limit(limit + 1);

    if (response.length > limit) {
        response.pop();
        moreData = true;
    }

    return cb(null, { questions: response, isMore: moreData });

};
