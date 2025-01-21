const express = require("express");
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
const client = new QuestionService("localhost:50050",grpc.credentials.createInsecure());

router.get("/questions", (req, res) => {
  const { query, page = 1, limit = 10, filter } = req.query;
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
    client.postQuestions(data,(err,msg)=>{
      if(err){
        return res.status(500).json({success: false,msg: msg});
      }else{
        return res.status(201).json({success: true});
      }
    })
    
  } catch (error) {
    return res.status(500).json({success: false,msg: "Failed to post"});
  } 
})

module.exports = router;
