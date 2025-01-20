const { mongoose } = require("mongoose");
const { Question } = require("./models/questionModal");

async function connectMongo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Speakx", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        });
        console.log("Connected to database succesfully");

    } catch (error) {
        console.log("Failed to connect database");
    }

}

connectMongo();


exports.getQuestions = async function getUser(call, cb) {
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
