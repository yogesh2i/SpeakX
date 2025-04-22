const grpc = require("@grpc/grpc-js");
const server = new grpc.Server();
require('dotenv').config();
const PORT = process.env.PORT;

exports.startGrpcServer = function () {
  server.bindAsync(`question_service:${PORT}`,grpc.ServerCredentials.createInsecure(),(error, port) => {
      if (error){
        console.error(error);
      }
      else {
        server.start();
        console.log(`server running at 127.0.0.1:${port}`);
      }
    }
  );
};

exports.getGrpcServer = function () {
  return server;
};
