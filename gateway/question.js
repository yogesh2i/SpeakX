const express = require("express");
require('dotenv').config();
const router = express.Router();

const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const PROTO_PATH = __dirname + "/protos/question.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  defaults: true,
  oneofs: true,
});

const QuestionService = grpc.loadPackageDefinition(packageDefinition).QuestionService;
const client = new QuestionService(`${process.env.QUESTION_SERVICE_URL}`,grpc.credentials.createInsecure());

router.get("/questions", (req, res) => {
  const { query, page = 1, limit = 10, filter } = req.query;
  //calling grpc service to fetch questions
  client.getQuestions({ query, page, limit, filter }, (err, msg) => {
    if (err) {
      return res.status(500).json({ success: false, msg: "couldnt find any questions" });
    } else {
      return res.status(200).json({ success: true, questions: msg.questions, isMore: msg.isMore });

    }
  })
});

router.post("/add",(req,res)=>{
  try {
    const data = req.body;
    //calling grpc service to post questions
    client.postQuestions(data,(err,msg)=>{
      if(err){
        return res.status(400).json({success: false,msg: err.message});
      }else{
        return res.status(201).json({success: true});
      }
    })
    
  } catch (error) {
    return res.status(500).json({success: false,msg: "Failed to post"});
  } 
})

module.exports = router;
