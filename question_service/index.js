const { startGrpcServer, getGrpcServer } = require("./grpc");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const PROTO_PATH = __dirname + "/protos/question.proto";
const { getQuestions, postQuestions } = require("./question");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  defaults: true,
  oneofs: true,
});

const question_proto = grpc.loadPackageDefinition(packageDefinition);

startGrpcServer();
const server = getGrpcServer();

server.addService(question_proto.QuestionService.service, {
  getQuestions,postQuestions
});
